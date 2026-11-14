# IKEA Smart TV Ad-Free YouTube & CleanYourTV Visual Guide

> **Trang web cẩm nang lắp ráp & cấu hình trực quan tương tác chuẩn phong cách IKEA**  
> Dành cho Smart TV: Android/Google TV, Samsung Tizen OS, LG webOS và Cứu hộ khẩn cấp.

🌐 **Trang Web Xuất Bản Trực Tuyến (Live GitHub Pages)**:  
👉 **[https://tominhphong.github.io/tv-ikea-guide-web/](https://tominhphong.github.io/tv-ikea-guide-web/)**

---

## 1. Giới Thiệu Dự Án (Overview)

Dự án chuyển thể toàn bộ kho tri thức chuyên sâu từ bộ tài liệu `tv_adfree_youtube_guide` thành một ứng dụng web cẩm nang tương tác trực quan theo phong cách **sổ tay hướng dẫn lắp ráp IKEA (IKEA-style visual step-by-step assembly manual)**.

Mọi thao tác kỹ thuật phức tạp (nhập mã bí mật trên điều khiển, bật chế độ nhà phát triển, cấu hình gỡ lỗi qua Wi-Fi, tải ứng dụng bằng mã số, và chặn cập nhật tự động) đều được chuyển thành **sơ đồ vector SVG chi tiết với nút bấm đánh số thứ tự và ký hiệu hành động trực quan**, giúp bất kỳ ai cũng có thể làm theo một cách dễ dàng và an toàn 100%.

---

## 2. Các Phân Hệ Hướng Dẫn (Platform Coverage)

| Phân hệ | Nền tảng hỗ trợ | Giải pháp chính | Đặc tả kỹ thuật cốt lõi |
|---|---|---|---|
| **Android / Google TV** | Sony, TCL, Xiaomi Mi Box, Chromecast, TV thông minh Android | **SmartTube** + **CleanYourTV** | Bấm OK 7 lần bật Developer Mode, Gỡ lỗi USB cổng 5555, Ghép đôi TLS Android 11+ mã PIN 6 số, Mã tải nhanh Downloader **`28544`**, SponsorBlock tự nhảy quảng cáo, Ép Codec VP9 chống giật 4K, Debloat `pm disable-user --user 0` an toàn Zero-Brick, cảnh báo bẫy mất HDMI. |
| **Samsung Smart TV** | Tizen OS (2016 – 2024+) | **TizenTube** + **Apps2Samsung** | Bấm mã bí mật **`1 2 3 4 5`** trong mục Apps, Bàn phím số ảo phím `123` cho Remote năng lượng mặt trời SolarCell, Nhập Host PC IP, **Cold Reboot** giữ chặt nút Nguồn 3-5s mở cổng SDB **26101**, Apps2Samsung cài đặt 1-chạm, giải mã chữ ký số DUID và thời hạn chứng chỉ không hết hạn sau cài, Chặn OTA domain `samsungotn.net`. |
| **LG Smart TV** | webOS 3.5 – 24+ (2017 – 2024+) | **YouTube AdFree** + **Auto Token Refresh** | Đăng ký LG Developer, Cài app Developer Mode chính thức trên LG Content Store, Bật Key Server cổng **9922** (user `prisoner`), Kết nối webOS Dev Manager, Cài đặt YouTube AdFree `.ipk`, **Gói Auto Dev Token Refresh** tự động gia hạn vòng lặp 1000 giờ vĩnh viễn, Ghim phím tắt Magic Remote Quick Access giữ phím 1 trong 2-3s, Chặn OTA `snu.lge.com`. |
| **Sổ Tay Xử Lý Sự Cố** | Mọi dòng Smart TV | **Troubleshooting & Rescue** | Cứu hộ màn hình đen sau debloat qua ADB `pm enable launcherx` hoặc phím Cài đặt remote, Khắc phục video 4K giật hình chuyển AV1 sang VP9 & bật Auto Frame Rate (AFR), Xử lý lỗi ADB unauthorized và cố định IP Tĩnh (Static IP), Khôi phục cài đặt gốc khẩn cấp bằng phím cứng (Sony BRAVIA giữ Power + Vol-, TCL phím nguồn đáy TV). |

---

## 3. Ngôn Ngữ Thiết Kế Cẩm Nang IKEA (IKEA Design System)

- **Đồ họa Vector Đơn Sắc (Minimalist Line Art)**: Toàn bộ 24+ sơ đồ kỹ thuật được vẽ bằng đồ họa vector SVG thuần, chuẩn nét vẽ phân cấp (`stroke-width`: 2.5px cho khung viền TV/remote, 1.8px cho nút bấm chi tiết, 1.0px cho đường nét đứt tín hiệu).
- **Hệ Màu Giấy Vẽ & Kỹ Thuật**:
  - Chế độ **IKEA Classic**: Nền giấy vẽ cẩm nang nhạt `#FBFBF9`, nét mực đen `#111111`, điểm nhấn xanh IKEA `#0058A9` và vàng cảnh báo `#FFDA1A`.
  - Chế độ **Blueprint CAD (Dark Mode)**: Nền xanh kỹ thuật `#0F172A`, nét vẽ sáng `#F8FAFC`, đường gióng neon `#38BDF8`.
- **Nhân Vật Chỉ Dẫn IKEA Gubbe**: 4 trạng thái cảm xúc (Chào mừng kiểm kê dụng cụ, Thao tác bấm remote, Cảnh báo dừng lại STOP ⚠️ trước bẫy ngầm, và Thành công xem TV ăn mừng).
- **Ký Hiệu Phi Ngôn Ngữ (Action Glyphs)**: Nút bấm remote đánh số vòng tròn ① ② ③ ④ ⑤, ký hiệu cử chỉ `Bấm 7 lần`, `Giữ 3-5 giây`, `Vòng lặp vô hạn 1000h ♾️`, và thẻ đối chiếu **DO & DON'T**.

---

## 4. Tính Năng Kỹ Thuật Ứng Dụng (Web App Features)

1. **Kiến Trúc Không Phụ Thuộc (Zero-Dependency Architecture)**:
   - Thuần HTML5 + CSS3 + Vanilla JavaScript (ES6+).
   - Zero compilation / zero build dependencies — Tương thích tuyệt đối với GitHub Pages tĩnh.
2. **Đồng Bộ URL Hash & Điều Hướng Nền Tảng**:
   - Chuyển đổi mượt mà giữa các tab `#android`, `#samsung`, `#lg`, `#troubleshooting`.
   - Lưu trữ tiến trình hoàn thành từng bước vào `localStorage` của trình duyệt.
3. **Thanh Tiến Độ & Stepper Tương Tác**:
   - Thanh hiển thị tỷ lệ hoàn thành (`0% - 100%`) và các nút nhảy nhanh (Pills) tới từng bước.
4. **Nút 1-Chạm Sao Chép Lệnh & Mã Tải (1-Click Copy-to-Clipboard)**:
   - Sao chép nhanh mã số Downloader (`28544`), lệnh ADB và domain chặn OTA với phản hồi thông báo Toast nổi tức thì.
5. **Trình Phóng To Sơ Đồ Vector (Pan & Zoom Lightbox Modal)**:
   - Chạm hoặc bấm vào bất kỳ sơ đồ SVG nào để mở khung phóng to toàn màn hình. Hỗ trợ lăn chuột, kéo thả (drag pan) và cử chỉ chụm ngón tay (pinch zoom) trên màn hình cảm ứng di động.
6. **Thiết Kế Thích Ứng Hoàn Hảo (Responsive Breakpoints)**:
   - Màn hình di động (<= 480px): Bố cục 1 cột cuộn dọc liền mạch, không tràn ngang (`scrollWidth <= innerWidth`).
   - Màn hình máy tính (>= 1024px): Bố cục 2 cột dạng quyển cẩm nang mở (Booklet Spread) với thanh mục lục và danh mục dụng cụ bám dính (sticky).

---

## 5. Cấu Trúc Mã Nguồn (Code Layout)

```
C:\Users\tomin\teamwork_projects\tv_ikea_guide_web/
├── index.html                   # Khung xương HTML5 ngữ nghĩa, chứa SVG defs & các container
├── css/
│   ├── ikea-variables.css       # Biến màu, font chữ, độ dày nét cho Light & Dark theme
│   ├── ikea-layout.css          # CSS Grid/Flexbox responsive booklet & mobile layout
│   └── ikea-components.css      # Stepper, badges, buttons, copy toast, alert & modal
├── js/
│   ├── data.js                  # Dữ liệu 4 phân hệ & 24+ chuỗi mã vector SVG chi tiết
│   ├── modal.js                 # Xử lý phóng to / thu nhỏ (Pan & Zoom Lightbox) cho SVG
│   └── app.js                   # Điều khiển chuyển tab, tiến trình, lưu localStorage, copy toast
├── tests/
│   └── verify_live_pages.py     # Bộ kiểm thử tự động E2E (Selenium Headless Edge + curl)
└── README.md                    # Tài liệu cẩm nang và hướng dẫn triển khai
```

---

## 6. Hướng Dẫn Kiểm Thử Tự Động (Automated Testing)

Chạy bộ kiểm thử tự động E2E bằng Python và trình duyệt Microsoft Edge (Headless Mode):

```powershell
python tests/verify_live_pages.py
```

Bộ kiểm thử sẽ tự động thực hiện:
- Kiểm tra HTTP status 200 trên trang GitHub Pages công khai.
- Kiểm tra độ sạch của JavaScript Console (Zero SEVERE console errors).
- Kiểm tra hoạt động chuyển đổi 4 tab nền tảng (Android, Samsung, LG, Troubleshooting).
- Đếm và xác nhận tất cả sơ đồ vector SVG hiển thị đầy đủ (>= 24 SVGs).
- Kiểm tra tràn bố cục ngang ở cả 2 viewport: Desktop (1440x900) và Mobile (375x812).
- Chụp ảnh màn hình bằng chứng thực tế nghiệm thu (`verification_screenshot.png`).

---

## 7. Giấy Phép & Bản Quyền (License)

Dự án được phát hành theo giấy phép mã nguồn mở **MIT License**.
Triển khai bởi `tominhphong` — Dành cho cộng đồng người dùng Smart TV.
