#!/usr/bin/env python3
"""
Test localStorage resilience for tv_ikea_guide_web:
Tests that invalid, primitive, null, or corrupted localStorage values
do not crash page initialization or step completion toggling.
"""

import sys
import time
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By

def test_storage_resilience(url):
    print(f"\n[Test Storage Resilience] Testing against {url}...")
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

    driver = webdriver.Edge(options=options)
    corrupted_payloads = [
        ("null string", "null"),
        ("number primitive", "12345"),
        ("string primitive", "\"corrupted_string\""),
        ("array payload", "[1, 2, 3]"),
        ("malformed JSON", "{unclosed json"),
        ("empty string", ""),
    ]

    try:
        driver.get(url)
        time.sleep(1)

        for label, payload in corrupted_payloads:
            print(f"-> Testing corrupted payload: {label} ({payload})")
            driver.execute_script(f"localStorage.setItem('ikea_guide_completed_steps', {repr(payload)});")
            driver.refresh()
            time.sleep(1)

            # Check for JS errors
            logs = driver.get_log("browser")
            severe_errors = [l for l in logs if l.get("level") == "SEVERE"]
            assert len(severe_errors) == 0, f"Error found with {label}: {severe_errors}"

            # Verify cards are rendered (not 0 cards)
            cards = driver.find_elements(By.CSS_SELECTOR, ".step-card")
            assert len(cards) > 0, f"No cards rendered with payload: {label}"

            # Verify toggling completion works without throwing
            toggle_btn = driver.find_element(By.CSS_SELECTOR, ".completion-toggle")
            driver.execute_script("arguments[0].click();", toggle_btn)
            time.sleep(0.3)

            # Verify saved value in localStorage is a valid JSON object
            saved = driver.execute_script("return localStorage.getItem('ikea_guide_completed_steps');")
            assert saved.startswith("{") and saved.endswith("}"), f"Saved state is not valid JSON object: {saved}"
            print(f"   PASS: {label} handled cleanly, saved: {saved}")

        print("\nALL STORAGE RESILIENCE TESTS PASSED!")
        return True
    except Exception as e:
        print(f"\n❌ STORAGE RESILIENCE TEST FAILED: {e}")
        return False
    finally:
        driver.quit()

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8000"
    success = test_storage_resilience(target)
    sys.exit(0 if success else 1)
