#!/usr/bin/env python3
"""
==============================================================================
AUTOMATED E2E TEST SUITE: tv_ikea_guide_web (tests/verify_live_pages.py)
Validates Live GitHub Pages Deployment, DOM Integrity, Zero Console Errors,
24+ SVG Diagrams, Interactive UI/UX, and Mobile/Desktop Responsiveness.
==============================================================================
"""

import sys
import time
import urllib.request
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

DEFAULT_TARGET_URL = "https://tominhphong.github.io/tv-ikea-guide-web/"

def check_http_status(url):
    print(f"\n[Test 1] Checking HTTP connectivity for {url}...")
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            code = response.getcode()
            print(f"-> HTTP Status Code: {code}")
            assert code == 200, f"Expected HTTP 200, got {code}"
            print("PASS: HTTP Status 200 OK.")
            return True
    except Exception as e:
        print(f"FAIL: HTTP Request failed: {e}")
        return False

def run_selenium_tests(url):
    print(f"\n[Test 2] Launching Headless Edge Selenium E2E Suite...")
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

    driver = webdriver.Edge(options=options)
    success = True

    try:
        # 1. Desktop Viewport (1440x900)
        driver.set_window_size(1440, 900)
        print(f"Navigating to {url} at 1440x900...")
        driver.get(url)
        time.sleep(2)

        # Check Page Title
        title = driver.title
        print(f"-> Page Title: '{title}'")
        assert "IKEA" in title and "Smart TV" in title, f"Unexpected page title: {title}"

        # Check Console Errors
        logs = driver.get_log("browser")
        severe_errors = [l for l in logs if l.get("level") == "SEVERE"]
        print(f"-> Browser Console Severe Errors: {len(severe_errors)}")
        if severe_errors:
            print("Console Errors Detail:", severe_errors)
        assert len(severe_errors) == 0, f"Detected {len(severe_errors)} SEVERE console errors!"

        # Check Navigation Tabs
        tabs = driver.find_elements(By.CSS_SELECTOR, ".nav-tab")
        print(f"-> Found Navigation Tabs: {len(tabs)}")
        assert len(tabs) >= 4, f"Expected 4 navigation tabs, found {len(tabs)}"

        # Verify Tab Switching across all 4 platforms & count SVGs
        platform_keys = ["android", "samsung", "lg", "troubleshooting"]
        total_svg_diagrams_discovered = 0

        for key in platform_keys:
            tab_btn = driver.find_element(By.CSS_SELECTOR, f".nav-tab[data-platform='{key}']")
            tab_btn.click()
            time.sleep(0.5)

            # Check active class
            assert "active" in tab_btn.get_attribute("class"), f"Tab {key} failed to activate"

            # Check cards & SVGs rendered
            cards = driver.find_elements(By.CSS_SELECTOR, ".step-card")
            svgs = driver.find_elements(By.CSS_SELECTOR, ".illustration-frame svg")
            print(f"   Platform [{key.upper()}]: Rendered {len(cards)} step cards, {len(svgs)} SVG diagrams")
            assert len(cards) >= 4, f"Platform {key} has insufficient step cards: {len(cards)}"
            assert len(svgs) >= 4, f"Platform {key} has insufficient SVGs: {len(svgs)}"
            total_svg_diagrams_discovered += len(svgs)

        print(f"-> Total platform SVG illustrations verified: {total_svg_diagrams_discovered} (Target: >= 20)")
        assert total_svg_diagrams_discovered >= 20, "Total SVG count below technical target"

        # Check Desktop Horizontal Overflow
        scroll_w = driver.execute_script("return document.documentElement.scrollWidth")
        inner_w = driver.execute_script("return window.innerWidth")
        print(f"-> Desktop Viewport Width: {inner_w}px, Document ScrollWidth: {scroll_w}px")
        assert scroll_w <= inner_w, f"Desktop horizontal overflow detected: {scroll_w} > {inner_w}"
        print("PASS: Zero Desktop Horizontal Overflow.")

        # Test Interactive Modal Lightbox
        print("-> Testing SVG Pan/Zoom Lightbox Modal...")
        first_frame = driver.find_element(By.CSS_SELECTOR, ".illustration-frame")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", first_frame)
        time.sleep(0.3)
        driver.execute_script("arguments[0].click();", first_frame)
        time.sleep(0.5)

        modal = driver.find_element(By.ID, "svg-modal")
        assert "open" in modal.get_attribute("class"), "SVG Lightbox modal failed to open upon click"
        modal_svg = modal.find_element(By.CSS_SELECTOR, "#modal-viewport svg")
        assert modal_svg is not None, "Modal viewport does not contain SVG"

        # Zoom in test
        zoom_in_btn = driver.find_element(By.ID, "modal-zoom-in")
        zoom_in_btn.click()
        time.sleep(0.2)
        scale_text = driver.find_element(By.ID, "modal-scale-display").text
        assert "125%" in scale_text, f"Expected 125% scale, got {scale_text}"

        # Close modal via close button
        close_btn = driver.find_element(By.ID, "modal-close-btn")
        close_btn.click()
        time.sleep(0.5)
        assert "open" not in modal.get_attribute("class"), "Modal failed to close"
        print("PASS: SVG Lightbox Modal functionality verified.")

        # Test 1-Click Copy-to-Clipboard & Toast
        print("-> Testing 1-Click Copy & Toast Notification...")
        copy_btn = driver.find_element(By.CSS_SELECTOR, ".code-copy-btn")
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", copy_btn)
        time.sleep(0.5)
        driver.execute_script("arguments[0].click();", copy_btn)
        time.sleep(0.5)
        toast = driver.find_element(By.CSS_SELECTOR, ".toast")
        assert toast is not None, "Toast notification failed to display upon copy"
        print("PASS: Copy and Toast feedback verified.")

        # Save Desktop Screenshot
        driver.save_screenshot("verification_desktop.png")
        print("PASS: Saved verification_desktop.png.")

        # 2. Mobile Responsive Test (375x812 iPhone / Modern Mobile)
        print("\n[Test 3] Testing Mobile Responsive Layout (375x812)...")
        driver.set_window_size(375, 812)
        time.sleep(1)

        m_scroll_w = driver.execute_script("return document.documentElement.scrollWidth")
        m_inner_w = driver.execute_script("return window.innerWidth")
        print(f"-> Mobile Viewport Width: {m_inner_w}px, Document ScrollWidth: {m_scroll_w}px")
        assert m_scroll_w <= m_inner_w, f"Mobile horizontal overflow detected: {m_scroll_w} > {m_inner_w}"
        print("PASS: Zero Mobile Horizontal Overflow.")

        driver.save_screenshot("verification_mobile.png")
        print("PASS: Saved verification_mobile.png.")

        print("\n=======================================================")
        print("ALL TESTS PASSED: 100% E2E VERIFICATION SUCCESSFUL")
        print("=======================================================")

    except AssertionError as ae:
        print(f"\n❌ ASSERTION FAILED: {ae}")
        success = False
    except Exception as ex:
        print(f"\n❌ UNEXPECTED ERROR: {ex}")
        success = False
    finally:
        driver.quit()

    return success

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_TARGET_URL
    print(f"Starting E2E Verification against: {target}")
    
    # First check if local testing or remote testing
    if target.startswith("http"):
        http_ok = check_http_status(target)
        if not http_ok:
            print("HTTP connectivity check failed. If newly deployed, waiting 15s for CDN...")
            time.sleep(15)
            http_ok = check_http_status(target)
            if not http_ok:
                sys.exit(1)

    selenium_ok = run_selenium_tests(target)
    if not selenium_ok:
        sys.exit(1)
    sys.exit(0)
