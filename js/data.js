/**
 * ============================================================================
 * IKEA SMART TV GUIDE DATA STORE (js/data.js)
 * Master Technical Specifications & Detailed Vector Line-Art Diagrams
 * Covers 4 Platforms: Android/Google TV, Samsung Tizen, LG webOS, Troubleshooting
 * ============================================================================
 */

const GUIDE_DATA = {
  // Global Shared Mascot & Common Diagrams
  commonSvgs: {
    gubbeWelcome: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
        <rect x="10" y="10" width="780" height="380" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
        <!-- Grid Blueprint Paper Texture -->
        <g opacity="0.15" stroke="var(--svg-stroke)" stroke-width="0.75" stroke-dasharray="3 3">
          <line x1="50" y1="20" x2="50" y2="380" /><line x1="150" y1="20" x2="150" y2="380" />
          <line x1="250" y1="20" x2="250" y2="380" /><line x1="350" y1="20" x2="350" y2="380" />
          <line x1="450" y1="20" x2="450" y2="380" /><line x1="550" y1="20" x2="550" y2="380" />
          <line x1="650" y1="20" x2="650" y2="380" /><line x1="750" y1="20" x2="750" y2="380" />
          <line x1="20" y1="100" x2="780" y2="100" /><line x1="20" y1="200" x2="780" y2="200" />
          <line x1="20" y1="300" x2="780" y2="300" />
        </g>
        <!-- IKEA Gubbe Mascot (Left) -->
        <g id="gubbe-figure">
          <!-- Head -->
          <circle cx="160" cy="110" r="42" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
          <!-- Smile -->
          <path d="M 145 125 Q 160 142 175 125" fill="none" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
          <!-- Eyes -->
          <circle cx="148" cy="105" r="4" fill="var(--svg-stroke)" />
          <circle cx="172" cy="105" r="4" fill="var(--svg-stroke)" />
          <!-- Body -->
          <path d="M 160 152 L 160 270" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" />
          <!-- Legs -->
          <path d="M 160 270 L 125 350 M 160 270 L 195 350" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Left Arm holding Checklist -->
          <path d="M 160 180 L 105 210 L 115 245" stroke="var(--svg-stroke)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Right Arm pointing towards TV -->
          <path d="M 160 180 L 220 170 L 260 145" stroke="var(--svg-stroke)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Hand pointing index finger -->
          <circle cx="265" cy="142" r="6" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
        </g>
        <!-- Speech Bubble -->
        <g>
          <path d="M 220 70 Q 220 40 260 40 L 460 40 Q 500 40 500 70 L 500 100 Q 500 130 460 130 L 270 130 L 230 150 L 245 130 Q 220 130 220 100 Z" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <text x="360" y="75" font-family="sans-serif" font-weight="900" font-size="16" text-anchor="middle" fill="var(--svg-stroke)">VÄLKOMMEN! CHÀO MỪNG BẠN</text>
          <text x="360" y="105" font-family="sans-serif" font-weight="700" font-size="14" text-anchor="middle" fill="var(--svg-accent-blue)">CẨM NANG SMART TV KHÔNG QUẢNG CÁO</text>
        </g>
        <!-- Checklist Board -->
        <g transform="translate(60, 220)">
          <rect x="0" y="0" width="80" height="110" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <rect x="25" y="-6" width="30" height="12" rx="3" fill="var(--svg-stroke)" />
          <line x1="15" y1="25" x2="65" y2="25" stroke="var(--svg-stroke)" stroke-width="2" />
          <line x1="25" y1="45" x2="65" y2="45" stroke="var(--svg-stroke)" stroke-width="2" />
          <line x1="25" y1="65" x2="65" y2="65" stroke="var(--svg-stroke)" stroke-width="2" />
          <line x1="25" y1="85" x2="65" y2="85" stroke="var(--svg-stroke)" stroke-width="2" />
          <!-- Checkmarks -->
          <path d="M 12 44 L 16 48 L 22 40" fill="none" stroke="var(--ikea-success)" stroke-width="2" stroke-linecap="round" />
          <path d="M 12 64 L 16 68 L 22 60" fill="none" stroke="var(--ikea-success)" stroke-width="2" stroke-linecap="round" />
          <path d="M 12 84 L 16 88 L 22 80" fill="none" stroke="var(--ikea-success)" stroke-width="2" stroke-linecap="round" />
        </g>
        <!-- TV Silhouette (Right) -->
        <g transform="translate(480, 140)">
          <!-- TV Frame -->
          <rect x="0" y="0" width="260" height="160" rx="8" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
          <!-- Screen Area -->
          <rect x="12" y="12" width="236" height="136" rx="4" fill="var(--svg-fill-gray)" opacity="0.4" stroke="var(--svg-stroke)" stroke-width="1.5" />
          <!-- TV Stand -->
          <path d="M 115 160 L 110 195 L 85 200 M 145 160 L 150 195 L 175 200" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
          <line x1="75" y1="200" x2="185" y2="200" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" />
          <!-- YouTube Clean Logo inside TV -->
          <g transform="translate(130, 80)">
            <rect x="-45" y="-28" width="90" height="56" rx="14" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="2" />
            <polygon points="-10,-15 18,0 -10,15" fill="#FFFFFF" />
            <circle cx="28" cy="-18" r="14" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="1.5" />
            <path d="M 23 -18 L 27 -14 L 34 -22" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
          </g>
        </g>
      </svg>
    `,
    gubbeWarning: `
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
        <rect x="10" y="10" width="780" height="380" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
        <!-- Big Yellow Warning Sign -->
        <g transform="translate(450, 60)">
          <polygon points="120,20 230,220 10,220" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="4" stroke-linejoin="round" />
          <line x1="120" y1="80" x2="120" y2="155" stroke="var(--svg-stroke)" stroke-width="8" stroke-linecap="round" />
          <circle cx="120" cy="185" r="7" fill="var(--svg-stroke)" />
        </g>
        <!-- Gubbe Halting / Hands Up -->
        <g transform="translate(140, 50)">
          <circle cx="100" cy="80" r="42" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
          <!-- Surprised Expression -->
          <ellipse cx="100" cy="98" rx="8" ry="12" fill="none" stroke="var(--svg-stroke)" stroke-width="3" />
          <circle cx="88" cy="74" r="4" fill="var(--svg-stroke)" />
          <circle cx="112" cy="74" r="4" fill="var(--svg-stroke)" />
          <!-- Body -->
          <line x1="100" y1="122" x2="100" y2="240" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" />
          <!-- Left Arm Waving Stop -->
          <path d="M 100 150 L 50 140 L 20 100" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="15" cy="95" r="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
          <!-- Right Arm Waving Stop -->
          <path d="M 100 150 L 150 140 L 180 100" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="185" cy="95" r="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
          <!-- Legs -->
          <path d="M 100 240 L 70 320 M 100 240 L 130 320" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <!-- Warning Banner -->
        <rect x="50" y="320" width="700" height="48" rx="8" fill="var(--ikea-danger)" stroke="var(--svg-stroke)" stroke-width="2.5" />
        <text x="400" y="352" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle" fill="#FFFFFF">⚠️ CHÚ Ý: ĐỌC KỸ BẪY NGẦM OEM & KHÔNG TẮT GÓI HDMI HỆ THỐNG</text>
      </svg>
    `,
    toolsInventory: `
      <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
        <rect x="10" y="10" width="780" height="340" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
        <text x="400" y="45" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle" fill="var(--svg-stroke)">DANH MỤC DỤNG CỤ CẦN CHUẨN BỊ (HARDWARE & TOOLS CHECKLIST)</text>
        <line x1="40" y1="65" x2="760" y2="65" stroke="var(--svg-stroke)" stroke-width="1.5" stroke-dasharray="4 3" />
        <!-- Tool 1: Smart TV -->
        <g transform="translate(60, 95)">
          <rect x="0" y="0" width="130" height="90" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <rect x="8" y="8" width="114" height="74" rx="3" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
          <line x1="65" y1="90" x2="65" y2="115" stroke="var(--svg-stroke)" stroke-width="3" />
          <line x1="40" y1="115" x2="90" y2="115" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
          <text x="65" y="145" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">1x Smart TV</text>
          <text x="65" y="165" font-family="sans-serif" font-weight="500" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Android/Sam/LG)</text>
        </g>
        <!-- Tool 2: Remote Control -->
        <g transform="translate(250, 95)">
          <rect x="25" y="0" width="60" height="120" rx="14" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <!-- Power Button -->
          <circle cx="42" cy="18" r="7" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="1.5" />
          <!-- D-Pad -->
          <circle cx="55" cy="55" r="18" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
          <circle cx="55" cy="55" r="7" fill="var(--svg-stroke)" />
          <!-- Number keys -->
          <rect x="36" y="82" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <rect x="50" y="82" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <rect x="64" y="82" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <rect x="36" y="96" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <rect x="50" y="96" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <rect x="64" y="96" width="10" height="8" rx="2" fill="var(--svg-stroke)" />
          <text x="55" y="145" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">1x Remote TV</text>
          <text x="55" y="165" font-family="sans-serif" font-weight="500" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Có phím số/ảo)</text>
        </g>
        <!-- Tool 3: Wi-Fi Router -->
        <g transform="translate(420, 110)">
          <rect x="10" y="40" width="120" height="50" rx="8" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <circle cx="35" cy="65" r="4" fill="var(--ikea-success)" />
          <circle cx="55" cy="65" r="4" fill="var(--ikea-success)" />
          <circle cx="75" cy="65" r="4" fill="var(--ikea-success)" />
          <!-- Antennas -->
          <line x1="30" y1="40" x2="20" y2="5" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
          <line x1="110" y1="40" x2="120" y2="5" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
          <!-- Wi-Fi Waves -->
          <path d="M 60 15 Q 70 5 80 15" fill="none" stroke="var(--svg-accent-blue)" stroke-width="2" stroke-linecap="round" />
          <path d="M 52 25 Q 70 12 88 25" fill="none" stroke="var(--svg-accent-blue)" stroke-width="2" stroke-linecap="round" />
          <text x="70" y="130" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">1x Mạng LAN/Wi-Fi</text>
          <text x="70" y="150" font-family="sans-serif" font-weight="500" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Cùng lớp mạng)</text>
        </g>
        <!-- Tool 4: PC / Laptop -->
        <g transform="translate(600, 95)">
          <!-- Laptop Screen -->
          <rect x="15" y="0" width="120" height="85" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
          <rect x="23" y="8" width="104" height="69" rx="3" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
          <!-- Terminal icon inside screen -->
          <text x="32" y="30" font-family="monospace" font-weight="700" font-size="14" fill="var(--svg-accent-blue)">&gt;_</text>
          <!-- Laptop Base -->
          <polygon points="5,85 145,85 135,105 15,105" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" stroke-linejoin="round" />
          <line x1="60" y1="88" x2="90" y2="88" stroke="var(--svg-stroke)" stroke-width="2" stroke-linecap="round" />
          <text x="75" y="145" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">1x Máy tính PC</text>
          <text x="75" y="165" font-family="sans-serif" font-weight="500" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Windows/Mac/Linux)</text>
        </g>
        <!-- Bottom Banner -->
        <rect x="60" y="275" width="680" height="45" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="1.5" />
        <text x="400" y="303" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle" fill="var(--ikea-blue)">💡 MẸO IKEA: Giữ TV và Máy tính cùng bắt một mạng Wi-Fi (hoặc cắm dây LAN) để kết nối 1-chạm không dây.</text>
      </svg>
    `
  },

  // ==========================================================================
  // PLATFORM 1: ANDROID TV & GOOGLE TV
  // ==========================================================================
  android: {
    id: "android",
    title: "Android TV & Google TV",
    subtitle: "Cài đặt SmartTube Không Quảng Cáo & Bộ Công Cụ Tối Ưu CleanYourTV",
    badge: "ANDROID",
    themeColor: "#16A34A",
    tools: [
      { name: "Smart TV chạy Android TV 8-10 hoặc Google TV 11-14 (Sony, TCL, Xiaomi, Chromecast, v.v.)", icon: "📺" },
      { name: "Remote TV có nút D-Pad và phím OK", icon: "📱" },
      { name: "Mạng Wi-Fi gia đình (TV và Máy tính chung 1 mạng LAN)", icon: "📶" },
      { name: "Ứng dụng Downloader by AFTVnews (Tải từ Play Store)", icon: "📥" }
    ],
    steps: [
      {
        id: "atv-step-1",
        stepNumber: 1,
        title: "Kích Hoạt Developer Mode (Bấm OK 7 Lần)",
        desc: "Mở menu Cài đặt trên TV, tìm đến mục Thông tin Bản dựng hệ điều hành (Build Number) và dùng remote bấm phím OK liên tục 7 lần để mở khóa quyền Lập trình viên.",
        details: [
          "Bấm biểu tượng Bánh răng (Cài đặt) ở góc trên bên phải màn hình TV.",
          "Chọn 'Tùy chọn thiết bị' (Device Preferences) hoặc 'Hệ thống' (System) → Chọn 'Giới thiệu' (About).",
          "Cuộn xuống mục 'Bản dựng hệ điều hành Android TV' (Android TV OS Build).",
          "Dùng remote nhấn phím OK đúng 7 lần liên tục. Màn hình TV sẽ hiển thị thông báo chúc mừng: 'Hiện bạn đã là nhà phát triển!'."
        ],
        actionGlyph: "OK x7",
        tip: "Nếu bấm chưa đủ 7 lần, màn hình sẽ hiện thông báo đếm ngược: 'Bạn còn 3 bước nữa để trở thành nhà phát triển'.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Screen Frame -->
            <g transform="translate(60, 40)">
              <rect x="0" y="0" width="440" height="260" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Menu UI Inside TV -->
              <rect x="15" y="15" width="410" height="40" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="40" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">⚙️ Settings &gt; About &gt; Android TV OS Build</text>
              <!-- Build Option Highlighted -->
              <rect x="15" y="70" width="410" height="50" rx="6" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
              <text x="35" y="95" font-family="monospace" font-weight="700" font-size="14" fill="var(--svg-stroke)">Build: STTM.221205.001</text>
              <text x="35" y="112" font-family="sans-serif" font-weight="600" font-size="11" fill="var(--ikea-blue)">[MỤC CẦN NHẤN OK 7 LẦN LIÊN TỤC]</text>
              <!-- Toast inside TV -->
              <g transform="translate(70, 160)">
                <rect x="0" y="0" width="300" height="50" rx="8" fill="var(--svg-stroke)" />
                <text x="150" y="32" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-accent-yellow)">🎉 You are now a developer!</text>
              </g>
              <!-- TV Stand -->
              <line x1="220" y1="260" x2="220" y2="295" stroke="var(--svg-stroke)" stroke-width="4" />
              <line x1="160" y1="295" x2="280" y2="295" stroke="var(--svg-stroke)" stroke-width="5" stroke-linecap="round" />
            </g>
            <!-- Remote Control with Finger Pressing OK (Right) -->
            <g transform="translate(560, 40)">
              <!-- Remote Body -->
              <rect x="20" y="0" width="160" height="320" rx="30" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Power & Mic -->
              <circle cx="50" cy="40" r="10" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <circle cx="150" cy="40" r="10" fill="var(--svg-fill-gray)" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <!-- Large D-Pad -->
              <circle cx="100" cy="140" r="55" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <!-- Center OK Button Highlighted -->
              <circle cx="100" cy="140" r="28" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="3" />
              <text x="100" y="146" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle" fill="#111111">OK</text>
              <!-- Action Badge 7x -->
              <g transform="translate(145, 115)">
                <circle cx="20" cy="20" r="24" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="2.5" />
                <text x="20" y="27" font-family="sans-serif" font-weight="900" font-size="16" text-anchor="middle" fill="#FFFFFF">7x</text>
              </g>
              <!-- Tap Waves -->
              <path d="M 80 100 Q 100 85 120 100" fill="none" stroke="var(--svg-stroke)" stroke-width="2" stroke-linecap="round" />
              <path d="M 75 90 Q 100 70 125 90" fill="none" stroke="var(--svg-stroke)" stroke-width="2" stroke-linecap="round" />
              <!-- Volume & Back -->
              <rect x="45" y="220" width="30" height="20" rx="4" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
              <rect x="125" y="220" width="30" height="20" rx="4" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="100" y="360" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">BẤM PHÍM OK 7 LẦN</text>
            </g>
          </svg>
        `
      },
      {
        id: "atv-step-2",
        stepNumber: 2,
        title: "Bật Gỡ Lỗi USB & Gỡ Lỗi Không Dây (Cổng 5555)",
        desc: "Truy cập menu Tùy chọn nhà phát triển vừa mở khóa và gạt công tắc Bật gỡ lỗi USB để kích hoạt dịch vụ ADB qua mạng LAN trên cổng mặc định 5555.",
        details: [
          "Quay lại màn hình Cài đặt → Chọn 'Tùy chọn nhà phát triển' (Developer Options).",
          "Tìm mục 'Gỡ lỗi USB' (USB Debugging) và chuyển sang trạng thái [BẬT / ON].",
          "Khi TV hiện hộp thoại xác nhận 'Cho phép gỡ lỗi USB?', chọn OK.",
          "Đối với Android TV 8/9/10, cổng gỡ lỗi mạng `5555` sẽ tự động mở sẵn."
        ],
        actionGlyph: "DEBUG = ON",
        tip: "Đảm bảo TV và máy tính đang kết nối chung 1 mạng Wi-Fi hoặc cùng cắm dây LAN vào router.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Left: TV Settings Toggle Screen -->
            <g transform="translate(60, 50)">
              <rect x="0" y="0" width="400" height="250" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Title Bar -->
              <rect x="15" y="15" width="370" height="35" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="38" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">Developer Options</text>
              <!-- Option 1: USB Debugging Toggle (ACTIVE) -->
              <g transform="translate(15, 70)">
                <rect x="0" y="0" width="370" height="60" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
                <text x="20" y="28" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">USB Debugging (Gỡ lỗi USB)</text>
                <text x="20" y="46" font-family="sans-serif" font-weight="600" font-size="11" fill="var(--ikea-ink-secondary)">Kích hoạt cổng mạng ADB 5555</text>
                <!-- Switch ON -->
                <rect x="290" y="16" width="60" height="28" rx="14" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                <circle cx="334" cy="30" r="11" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
              </g>
              <!-- Option 2: Keep Awake -->
              <g transform="translate(15, 145)">
                <rect x="0" y="0" width="370" height="50" rx="8" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="20" y="30" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">Bật màn hình khi sạc (Keep Awake)</text>
                <!-- Switch OFF -->
                <rect x="290" y="12" width="60" height="26" rx="13" fill="var(--svg-fill-gray)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <circle cx="305" cy="25" r="10" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
              </g>
            </g>
            <!-- Right: Router emitting Wi-Fi to TV -->
            <g transform="translate(520, 60)">
              <!-- Router -->
              <rect x="40" y="60" width="160" height="60" rx="8" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <circle cx="70" cy="90" r="5" fill="var(--ikea-success)" />
              <circle cx="95" cy="90" r="5" fill="var(--ikea-success)" />
              <circle cx="120" cy="90" r="5" fill="var(--ikea-success)" />
              <!-- Antennas -->
              <line x1="60" y1="60" x2="40" y2="20" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
              <line x1="180" y1="60" x2="200" y2="20" stroke="var(--svg-stroke)" stroke-width="3" stroke-linecap="round" />
              <!-- Port Badge -->
              <g transform="translate(50, 150)">
                <rect x="0" y="0" width="140" height="40" rx="6" fill="var(--svg-stroke)" />
                <text x="70" y="26" font-family="monospace" font-weight="900" font-size="15" text-anchor="middle" fill="#FFFFFF">PORT: 5555</text>
              </g>
              <!-- Arrow from Router to TV -->
              <path d="M 30 110 L -30 110" fill="none" stroke="var(--ikea-blue)" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#arrow)" />
              <text x="120" y="230" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">WI-FI LAN KẾT NỐI SẴN</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="15" fill="var(--ikea-code-text)">adb connect 192.168.1.XX:5555</text>
          </svg>
        `
      },
      {
        id: "atv-step-3",
        stepNumber: 3,
        title: "Ghép Đôi Bảo Mật TLS (Google TV & Android 11+)",
        desc: "Google TV và Android 11+ áp dụng giao thức mã hóa Wireless Debugging mới với mã PIN 6 số. Thực hiện ghép đôi bảo mật trước khi mở cổng ADB.",
        details: [
          "Vào Cài đặt → Tùy chọn nhà phát triển → Gạt Bật 'Gỡ lỗi không dây' (Wireless debugging).",
          "Chọn 'Ghép nối thiết bị bằng mã ghép nối' (Pair device with pairing code).",
          "TV hiện mã PIN 6 số (ví dụ: `829104`) và cổng ghép đôi (ví dụ: `192.168.1.50:37123`).",
          "Trên máy tính chạy lệnh: `adb pair <IP_TV>:<CỔNG_PAIR>` rồi nhập mã PIN 6 số.",
          "Sau khi báo `Successfully paired`, lấy Cổng kết nối chính ở màn hình ngoài và chạy lệnh: `adb connect <IP_TV>:<CỔNG_CONNECT>`."
        ],
        command: "adb pair 192.168.1.50:37123\nadb connect 192.168.1.50:41255\nadb tcpip 5555",
        actionGlyph: "PAIR 6-DIGIT",
        tip: "Sau khi kết nối lần đầu, chạy `adb tcpip 5555` để đưa về cổng chuẩn 5555 vĩnh viễn, không cần ghép đôi lại sau này.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Left: TV Pairing Code Dialog -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="340" height="240" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="15" y="15" width="310" height="30" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="25" y="35" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--svg-stroke)">Pair device with pairing code</text>
              <!-- PIN Display Box -->
              <rect x="30" y="65" width="280" height="65" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
              <text x="170" y="95" font-family="sans-serif" font-weight="600" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">Wi-Fi pairing code</text>
              <text x="170" y="122" font-family="monospace" font-weight="900" font-size="24" text-anchor="middle" fill="var(--ikea-blue)" letter-spacing="4">829 104</text>
              <!-- IP & Port -->
              <text x="170" y="155" font-family="sans-serif" font-weight="600" font-size="12" text-anchor="middle" fill="var(--svg-stroke)">IP address &amp; Port</text>
              <text x="170" y="175" font-family="monospace" font-weight="700" font-size="13" text-anchor="middle" fill="#DC2626">192.168.1.50:37123</text>
              <text x="170" y="270" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">MÀN HÌNH TIVI (ANDROID 11+)</text>
            </g>
            <!-- Middle: Arrow with Lightning -->
            <g transform="translate(415, 120)">
              <path d="M 0 30 L 60 30" fill="none" stroke="var(--svg-stroke)" stroke-width="4" stroke-dasharray="6 4" />
              <polygon points="50,20 70,30 50,40" fill="var(--svg-stroke)" />
              <circle cx="35" cy="-5" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <path d="M 35 -15 L 30 -5 L 38 -5 L 33 5" fill="none" stroke="#111111" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <!-- Right: PC Terminal Window -->
            <g transform="translate(485, 45)">
              <rect x="0" y="0" width="260" height="240" rx="10" fill="#0F172A" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Window Dots -->
              <circle cx="20" cy="20" r="5" fill="#EF4444" />
              <circle cx="35" cy="20" r="5" fill="#F59E0B" />
              <circle cx="50" cy="20" r="5" fill="#10B981" />
              <line x1="0" y1="36" x2="260" y2="36" stroke="#334155" stroke-width="1.5" />
              <!-- Terminal Text -->
              <text x="15" y="65" font-family="monospace" font-size="11" fill="#94A3B8">&gt; adb pair 192.168.1.50:37123</text>
              <text x="15" y="85" font-family="monospace" font-size="11" fill="#38BDF8">Enter pairing code: 829104</text>
              <text x="15" y="110" font-family="monospace" font-size="11" fill="#22C55E">Successfully paired to ...</text>
              <text x="15" y="140" font-family="monospace" font-size="11" fill="#94A3B8">&gt; adb connect 192.168.1.50:41255</text>
              <text x="15" y="165" font-family="monospace" font-size="11" fill="#22C55E">connected to 192.168.1.50:41255</text>
              <text x="15" y="195" font-family="monospace" font-size="11" fill="#FBBF24">&gt; adb tcpip 5555</text>
              <text x="130" y="270" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">MÁY TÍNH TERMINAL</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="15" fill="var(--ikea-code-text)">adb tcpip 5555 &amp;&amp; adb connect 192.168.1.50:5555</text>
          </svg>
        `
      },
      {
        id: "atv-step-4",
        stepNumber: 4,
        title: "Cài Đặt SmartTube Qua Ứng Dụng Downloader (Mã 28544)",
        desc: "Không cần cắm máy tính hay USB! Cài ứng dụng Downloader từ Google Play Store, mở lên và nhập mã tải nhanh chính thức để cài SmartTube.",
        details: [
          "Vào Google Play Store trên TV, tìm và cài đặt ứng dụng 'Downloader by AFTVnews'.",
          "Vào Cài đặt TV → Bảo mật & Hạn chế → Cài đặt ứng dụng không rõ nguồn gốc → Gạt [CHO PHÉP] cho Downloader.",
          "Mở Downloader, tại ô nhập URL gõ mã số tải nhanh:",
          "  • Nhập mã '28544' (Bản Stable ổn định nhất cho gia đình).",
          "  • Hoặc mã '79015' (Bản Beta cập nhật tính năng mới).",
          "Bấm nút 'GO', Downloader sẽ tự động tải file APK chính thức từ GitHub của tác giả Yurii Lyskov và bật trình cài đặt."
        ],
        command: "28544",
        actionGlyph: "CODE: 28544",
        tip: "Mã 28544 tự động chuyển hướng an toàn tới kutt.to/stn_stable và tải gói cài org.smarttube.stable.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Screen with Downloader UI -->
            <g transform="translate(60, 40)">
              <rect x="0" y="0" width="460" height="270" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Downloader Header (Orange Accent) -->
              <rect x="15" y="15" width="430" height="40" rx="4" fill="#EA580C" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <text x="35" y="41" font-family="sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Downloader by AFTVnews</text>
              <!-- URL Input Box with Big Code -->
              <g transform="translate(35, 80)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">Enter a URL or Short Code:</text>
                <rect x="0" y="30" width="300" height="55" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
                <text x="150" y="68" font-family="monospace" font-weight="900" font-size="28" text-anchor="middle" fill="#EA580C" letter-spacing="4">28544</text>
                <!-- Blinking Cursor -->
                <line x1="225" y1="42" x2="225" y2="72" stroke="var(--svg-stroke)" stroke-width="3" />
                <!-- GO Button -->
                <rect x="315" y="30" width="75" height="55" rx="6" fill="#EA580C" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="352" y="65" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle" fill="#FFFFFF">GO</text>
              </g>
              <!-- Shortcut Badges -->
              <g transform="translate(35, 190)">
                <rect x="0" y="0" width="180" height="45" rx="6" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="1.5" />
                <text x="90" y="22" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="var(--ikea-success)">STABLE (KHUYÊN DÙNG)</text>
                <text x="90" y="38" font-family="monospace" font-weight="900" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">28544</text>
                <rect x="200" y="0" width="180" height="45" rx="6" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="1.5" />
                <text x="290" y="22" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="var(--ikea-blue)">BETA (TÍNH NĂNG MỚI)</text>
                <text x="290" y="38" font-family="monospace" font-weight="900" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">79015</text>
              </g>
            </g>
            <!-- Right: Remote Typing Numbers -->
            <g transform="translate(560, 40)">
              <rect x="20" y="0" width="160" height="320" rx="30" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Number Pad Zoom In -->
              <g transform="translate(35, 80)">
                <rect x="0" y="0" width="130" height="150" rx="8" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
                <!-- Key 2 -->
                <circle cx="65" cy="25" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="65" y="30" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle">2</text>
                <!-- Key 8 -->
                <circle cx="65" cy="95" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="65" y="100" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle">8</text>
                <!-- Key 5 -->
                <circle cx="65" cy="60" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="65" y="65" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle">5</text>
                <!-- Key 4 -->
                <circle cx="25" cy="60" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="25" y="65" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle">4</text>
              </g>
              <text x="100" y="360" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">NHẬP MÃ: 28544</text>
            </g>
          </svg>
        `
      },
      {
        id: "atv-step-5",
        stepNumber: 5,
        title: "Cấu Hình SmartTube: SponsorBlock, Codec VP9 & Auto Frame Rate",
        desc: "Thiết lập các tính năng tối thượng của SmartTube: Tự động nhảy qua đoạn quảng cáo trong video (SponsorBlock), ép giải mã phần cứng VP9 chống giật 4K, và bật đồng bộ tần số quét AFR.",
        details: [
          "Mở SmartTube → Vào biểu tượng Bánh răng (Cài đặt) ở thanh menu bên trái.",
          "Mục 'SponsorBlock': Bật tính năng SponsorBlock, đánh dấu Tự động bỏ qua (Auto Skip) cho: Đoạn tài trợ (Sponsor), Tự quảng cáo (Self-promotion), Nhắc subscribe, Đoạn kết (Outro).",
          "Mục 'Bộ phát video' (Video Player) → 'Định dạng video' (Video Formats):",
          "  • Chọn 'Ưu tiên VP9' (Force VP9) và TẮT AV1 nếu dùng TV đời cũ/Box cấu hình yếu để chống đứng hình và quá tải 100% CPU.",
          "  • TV đời mới 2022+ hỗ trợ phần cứng AV1 thì giữ nguyên 'Tự động' (Auto).",
          "Mục 'Tự động chỉnh tần số quét' (Auto Frame Rate - AFR): Bật ON, đặt độ trễ 500ms - 1000ms để màn hình đồng bộ 24fps xem phim không bị rung giật (3:2 pulldown judder)."
        ],
        actionGlyph: "SPONSORBLOCK + VP9",
        tip: "SponsorBlock sẽ hiển thị một vạch màu xanh lá cây trên thanh thời gian và tự lướt qua đoạn quảng cáo mà không cần bấm phím.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV with SmartTube Playback & SponsorBlock -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="680" height="280" rx="12" fill="#0B1120" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Mock Video Playing Area -->
              <rect x="20" y="20" width="640" height="180" rx="6" fill="#1E293B" stroke="#334155" stroke-width="1.5" />
              <!-- Video Title -->
              <text x="40" y="55" font-family="sans-serif" font-weight="800" font-size="16" fill="#FFFFFF">▶ SmartTube 4K HDR • Nature Documentary</text>
              <rect x="40" y="70" width="70" height="22" rx="4" fill="var(--ikea-blue)" />
              <text x="75" y="86" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle" fill="#FFFFFF">VP9 60FPS</text>
              <rect x="120" y="70" width="70" height="22" rx="4" fill="var(--ikea-success)" />
              <text x="155" y="86" font-family="sans-serif" font-weight="900" font-size="11" text-anchor="middle" fill="#FFFFFF">AFR: 24Hz</text>
              <!-- Timeline Bar -->
              <g transform="translate(40, 160)">
                <!-- Base Timeline -->
                <rect x="0" y="0" width="600" height="10" rx="5" fill="#475569" />
                <!-- Played Portion -->
                <rect x="0" y="0" width="220" height="10" rx="5" fill="#DC2626" />
                <!-- SponsorBlock Skipped Zone (Green Segment) -->
                <rect x="220" y="-3" width="90" height="16" rx="4" fill="var(--ikea-success)" stroke="#FFFFFF" stroke-width="1.5" />
                <text x="265" y="32" font-family="sans-serif" font-weight="800" font-size="11" text-anchor="middle" fill="var(--ikea-success)">⏩ AUTO SKIP SPONSOR</text>
                <circle cx="310" cy="5" r="8" fill="#FFFFFF" stroke="#DC2626" stroke-width="2" />
              </g>
              <!-- Bottom Feature Badges Inside Player -->
              <g transform="translate(40, 225)">
                <text x="0" y="25" font-family="sans-serif" font-weight="700" font-size="13" fill="#94A3B8">⚙️ SponsorBlock: <tspan fill="#4ADE80" font-weight="900">BẬT (Auto Skip)</tspan></text>
                <text x="250" y="25" font-family="sans-serif" font-weight="700" font-size="13" fill="#94A3B8">⚙️ Codec: <tspan fill="#38BDF8" font-weight="900">Force VP9 (Tắt AV1)</tspan></text>
                <text x="500" y="25" font-family="sans-serif" font-weight="700" font-size="13" fill="#94A3B8">⚙️ AFR: <tspan fill="#FBBF24" font-weight="900">Độ trễ 500ms</tspan></text>
              </g>
            </g>
            <!-- Callout Note -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-yellow-soft)" stroke="var(--ikea-yellow)" stroke-width="2" />
            <text x="80" y="383" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">💡 Khuyến nghị cho TV cũ / Box Mi Box S: Ép codec VP9 sẽ giảm nhiệt độ CPU từ 100% xuống dưới 40%.</text>
          </svg>
        `
      },
      {
        id: "atv-step-6",
        stepNumber: 6,
        title: "Đăng Nhập Google (OAuth2 Device) & Cast Video Qua TV Code",
        desc: "Đăng nhập tài khoản Google an toàn tuyệt đối mà không cần gõ mật khẩu trên TV qua mã xác thực OAuth2 thiết bị, và kết nối điện thoại để truyền video không quảng cáo bằng mã TV 12 số.",
        details: [
          "Đăng nhập tài khoản Google:",
          "  • Trong SmartTube, vào menu 'Tài khoản' → Chọn 'Đăng nhập'.",
          "  • TV hiển thị mã 8 ký tự (ví dụ: `ABCD-EFGH`).",
          "  • Trên điện thoại hoặc máy tính, mở trình duyệt vào trang: `https://google.com/device`.",
          "  • Nhập mã 8 ký tự và bấm 'Cho phép'. SmartTube tự đồng bộ toàn bộ danh sách đăng ký, lịch sử xem.",
          "Truyền video từ điện thoại (Cast via TV Code 12 số):",
          "  • Trong SmartTube, vào Cài đặt → 'Điều khiển từ xa' → 'Thêm thiết bị' → Nhận mã 12 số.",
          "  • Mở ứng dụng YouTube trên điện thoại → Cài đặt → 'Xem trên TV' → 'Liên kết bằng mã TV' → Nhập 12 số.",
          "  • Sau đó biểu tượng Cast trên điện thoại sẽ xuất hiện thiết bị tên 'SmartTube' để truyền video mượt mà không quảng cáo."
        ],
        command: "https://google.com/device",
        actionGlyph: "OAUTH2 + CAST",
        tip: "Phương pháp Leanback Device Flow đảm bảo mật khẩu tài khoản Google của bạn không bao giờ được lưu trữ hay gõ trên TV.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Left: TV Screen with Device Code -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="320" height="250" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="15" y="15" width="290" height="35" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="38" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--svg-stroke)">Đăng nhập tài khoản Google</text>
              <text x="160" y="85" font-family="sans-serif" font-weight="600" font-size="12" text-anchor="middle" fill="var(--svg-stroke)">Truy cập từ điện thoại hoặc PC:</text>
              <text x="160" y="110" font-family="monospace" font-weight="800" font-size="14" text-anchor="middle" fill="var(--ikea-blue)">google.com/device</text>
              <!-- 8-Char Code Box -->
              <rect x="40" y="130" width="240" height="55" rx="8" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="160" y="167" font-family="monospace" font-weight="900" font-size="24" text-anchor="middle" fill="#111111" letter-spacing="4">ABCD-EFGH</text>
              <text x="160" y="215" font-family="sans-serif" font-weight="700" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">Hoặc mã Cast TV: 123 456 789 012</text>
              <text x="160" y="275" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">MÀN HÌNH TIVI</text>
            </g>
            <!-- Middle: Secure Lock & Two-Way Sync -->
            <g transform="translate(400, 120)">
              <circle cx="20" cy="20" r="28" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="2.5" />
              <!-- Padlock Icon -->
              <rect x="10" y="16" width="20" height="16" rx="2" fill="var(--ikea-success)" />
              <path d="M 14 16 L 14 10 Q 20 4 26 10 L 26 16" fill="none" stroke="var(--ikea-success)" stroke-width="2.5" />
              <path d="M -20 20 L 5 20" fill="none" stroke="var(--svg-stroke)" stroke-width="3" stroke-dasharray="4 3" />
              <path d="M 35 20 L 60 20" fill="none" stroke="var(--svg-stroke)" stroke-width="3" stroke-dasharray="4 3" />
              <text x="20" y="65" font-family="sans-serif" font-weight="800" font-size="11" text-anchor="middle" fill="var(--ikea-success)">OAuth2 SECURE</text>
            </g>
            <!-- Right: Smartphone with Google Login -->
            <g transform="translate(480, 45)">
              <!-- Phone Body -->
              <rect x="30" y="0" width="160" height="260" rx="24" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Notch & Screen -->
              <rect x="42" y="20" width="136" height="215" rx="10" fill="var(--svg-fill-gray)" opacity="0.2" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <circle cx="110" cy="10" r="3" fill="var(--svg-stroke)" />
              <!-- Input field on phone -->
              <g transform="translate(52, 60)">
                <text x="58" y="20" font-family="sans-serif" font-weight="700" font-size="10" text-anchor="middle" fill="var(--svg-stroke)">Nhập mã hiển thị trên TV</text>
                <rect x="0" y="30" width="116" height="30" rx="4" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="58" y="50" font-family="monospace" font-weight="800" font-size="11" text-anchor="middle" fill="var(--ikea-blue)">ABCD-EFGH</text>
                <!-- Allow Button -->
                <rect x="0" y="70" width="116" height="28" rx="4" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="1" />
                <text x="58" y="88" font-family="sans-serif" font-weight="800" font-size="11" text-anchor="middle" fill="#FFFFFF">CHO PHÉP (ALLOW)</text>
              </g>
              <text x="110" y="285" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">ĐIỆN THOẠI / PC</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="15" fill="var(--ikea-code-text)">Truy cập: https://google.com/device</text>
          </svg>
        `
      },
      {
        id: "atv-step-7",
        stepNumber: 7,
        title: "CleanYourTV: Debloat An Toàn & Phòng Tránh Bẫy Ngầm OEM",
        desc: "Sử dụng bộ công cụ CleanYourTV để vô hiệu hóa (freeze) telemetry rác, quảng cáo màn hình chính bằng lệnh chuẩn `pm disable-user --user 0`. Tuyệt đối không xóa hay tắt các gói HDMI phần cứng.",
        details: [
          "Nguyên tắc Zero-Brick: Lệnh `pm disable-user --user 0` đóng băng tiến trình (0% RAM/CPU) mà không xóa APK gốc trong /system/app.",
          "🔴 TUYỆT ĐỐI KHÔNG TẮT (DO NOT TOUCH):",
          "  • Các gói giữ quyền `android.permission.TV_INPUT_HARDWARE` (`com.mediatek.tis`, `com.cltv.mal`): Tắt sẽ làm mất cổng HDMI 1, HDMI 2, báo 'No Signal'!",
          "  • Bẫy bootloop TCL: `com.android.location.fused` (TCL 43S5400A crash Zygote).",
          "  • Gói `setupwraith`: Trước khi tắt phải vào Wi-Fi chọn 'Quên mạng' rồi kết nối lại bằng remote để chuyển quyền sở hữu về `system`.",
          "🟢 CÁC GÓI NÊN TẮT (SAFE TO DISABLE):",
          "  • Telemetry theo dõi: `tv.samba.ssm`, `com.miui.tv.analytics`, `com.tcl.ttvs`.",
          "  • Quảng cáo & Kênh rác: `com.tcl.channelplus`, `com.sony.dtv.promos`, `com.google.android.partnersetup`."
        ],
        command: "adb shell pm disable-user --user 0 tv.samba.ssm\nadb shell pm disable-user --user 0 com.tcl.channelplus",
        actionGlyph: "SAFE DEBLOAT",
        warning: "Nếu lỡ tắt nhầm gói HDMI hoặc Launcher khiến màn hình đen, xem ngay Phân hệ Xử lý sự cố để chạy lệnh khôi phục `pm enable` tức thì.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Comparison Split Layout: DO vs DON'T -->
            <!-- Left Side: DO (Green Box) -->
            <g transform="translate(40, 40)">
              <rect x="0" y="0" width="340" height="280" rx="10" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="2.5" />
              <!-- Header -->
              <rect x="0" y="0" width="340" height="45" rx="8" fill="var(--ikea-success)" />
              <text x="170" y="28" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle" fill="#FFFFFF">✔️ NÊN TẮT (AN TOÀN)</text>
              <!-- Safe Packages List -->
              <g transform="translate(20, 65)">
                <text x="0" y="20" font-family="monospace" font-weight="700" font-size="12" fill="var(--svg-stroke)">• tv.samba.ssm (ACR Spyware)</text>
                <text x="0" y="45" font-family="monospace" font-weight="700" font-size="12" fill="var(--svg-stroke)">• com.tcl.channelplus (Kênh rác)</text>
                <text x="0" y="70" font-family="monospace" font-weight="700" font-size="12" fill="var(--svg-stroke)">• com.sony.dtv.promos (Quảng cáo)</text>
                <text x="0" y="95" font-family="monospace" font-weight="700" font-size="12" fill="var(--svg-stroke)">• com.google.android.partnersetup</text>
                <text x="0" y="120" font-family="monospace" font-weight="700" font-size="12" fill="var(--svg-stroke)">• com.miui.tv.analytics (Xiaomi)</text>
              </g>
              <!-- Safe Shield Icon -->
              <g transform="translate(140, 215)">
                <path d="M 30 0 L 60 12 L 60 35 Q 60 55 30 65 Q 0 55 0 35 L 0 12 Z" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="2" />
                <path d="M 18 32 L 26 40 L 42 22" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
              </g>
            </g>
            <!-- Right Side: DON'T (Red Danger Box) -->
            <g transform="translate(420, 40)">
              <rect x="0" y="0" width="340" height="280" rx="10" fill="var(--ikea-danger-bg)" stroke="var(--ikea-danger)" stroke-width="2.5" />
              <!-- Header -->
              <rect x="0" y="0" width="340" height="45" rx="8" fill="var(--ikea-danger)" />
              <text x="170" y="28" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle" fill="#FFFFFF">🚫 CẤM TẮT (NGUY HIỂM)</text>
              <!-- Danger Packages List -->
              <g transform="translate(20, 65)">
                <text x="0" y="20" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">• TV_INPUT_HARDWARE (Mất HDMI!)</text>
                <text x="0" y="45" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">• com.mediatek.tis (Mất HDMI)</text>
                <text x="0" y="70" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">• com.android.location.fused (TCL)</text>
                <text x="0" y="95" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">• com.android.systemui / settings</text>
                <text x="0" y="120" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">• setupwraith (Khi chưa quên Wi-Fi)</text>
              </g>
              <!-- Big Cross Prohibited Icon -->
              <g transform="translate(140, 215)">
                <circle cx="30" cy="30" r="28" fill="none" stroke="#DC2626" stroke-width="6" />
                <line x1="10" y1="10" x2="50" y2="50" stroke="#DC2626" stroke-width="6" stroke-linecap="round" />
              </g>
            </g>
            <!-- Bottom Command Snippet -->
            <rect x="40" y="340" width="720" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="60" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">adb shell pm disable-user --user 0 tv.samba.ssm</text>
          </svg>
        `
      }
    ]
  },

  // ==========================================================================
  // PLATFORM 2: SAMSUNG SMART TV (TIZEN OS)
  // ==========================================================================
  samsung: {
    id: "samsung",
    title: "Samsung Smart TV (Tizen OS)",
    subtitle: "Mở Khóa Developer Mode 12345 & Cài Đặt TizenTube Qua Apps2Samsung GUI",
    badge: "SAMSUNG TIZEN",
    themeColor: "#0058A9",
    tools: [
      { name: "Samsung Smart TV chạy Tizen OS (2016 đến 2024+)", icon: "📺" },
      { name: "Remote TV (Remote truyền thống có phím số hoặc Smart Remote SolarCell)", icon: "📱" },
      { name: "Máy tính Windows hoặc Mac cùng mạng LAN với TV", icon: "💻" },
      { name: "Phần mềm Apps2Samsung (Tải từ GitHub của reisxd / Apps2Samsung)", icon: "⚡" }
    ],
    steps: [
      {
        id: "sam-step-1",
        stepNumber: 1,
        title: "Mở Mục Apps & Nhập Dãy Số Bí Mật '12345'",
        desc: "Trên màn hình chính Samsung Smart Hub, bấm chọn kho ứng dụng 'Apps'. Khi đang ở trong Apps, bấm tuần tự 5 số 1 - 2 - 3 - 4 - 5 trên remote.",
        details: [
          "Bấm phím Home trên điều khiển → Di chuyển chọn mục 'Apps' (Kho ứng dụng Samsung).",
          "Khi màn hình Apps vừa hiện ra, bấm tuần tự các phím số: 1 → 2 → 3 → 4 → 5.",
          "Đối với Remote truyền thống (Có hàng phím số): Bấm trực tiếp 1, 2, 3, 4, 5.",
          "Đối với Smart Remote năng lượng mặt trời (SolarCell / Tối giản không có phím số vật lý):",
          "  • Bấm phím '123' (hoặc '123/màu') trên remote để mở Bàn phím số ảo trên màn hình TV.",
          "  • Dùng cụm phím điều hướng (D-Pad) di chuyển và bấm OK chọn lần lượt: 1 → 2 → 3 → 4 → 5.",
          "Cửa sổ cấu hình 'Developer Mode configuration' màu xám sẽ lập tức xuất hiện!"
        ],
        actionGlyph: "1 - 2 - 3 - 4 - 5",
        tip: "Nếu bấm chậm hoặc sai nhịp khiến cửa sổ không hiện, hãy thoát ra màn hình Home rồi vào lại Apps để bấm lại.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Remote Comparison: Standard vs SolarCell Smart Remote -->
            <!-- Left: Standard Remote with Physical Number Pad -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="130" height="310" rx="20" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <!-- Number Keys 1-5 Highlighted -->
              <circle cx="35" cy="45" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="35" y="50" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">1</text>
              <circle cx="65" cy="45" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="65" y="50" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">2</text>
              <circle cx="95" cy="45" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="95" y="50" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">3</text>
              <circle cx="35" cy="85" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="35" y="90" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">4</text>
              <circle cx="65" cy="85" r="14" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="65" y="90" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">5</text>
              <text x="65" y="345" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="var(--svg-stroke)">REMOTE THƯỜNG</text>
              <text x="65" y="365" font-family="sans-serif" font-weight="600" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Bấm trực tiếp 1-5)</text>
            </g>
            <!-- Middle: SolarCell Smart Remote with 123 Virtual Keypad Button -->
            <g transform="translate(230, 45)">
              <rect x="0" y="0" width="110" height="310" rx="22" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <!-- Power -->
              <circle cx="35" cy="35" r="9" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <!-- 123 Virtual Keypad Key Highlighted -->
              <rect x="25" y="65" width="60" height="30" rx="8" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <text x="55" y="85" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#111111">123</text>
              <!-- D-Pad -->
              <circle cx="55" cy="155" r="38" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
              <circle cx="55" cy="155" r="16" fill="var(--svg-stroke)" />
              <text x="55" y="345" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="var(--svg-stroke)">REMOTE SOLARCELL</text>
              <text x="55" y="365" font-family="sans-serif" font-weight="600" font-size="11" text-anchor="middle" fill="var(--ikea-ink-secondary)">(Bấm phím 123 mở ảo)</text>
            </g>
            <!-- Right: TV Screen in Apps showing Virtual Keypad Selection -->
            <g transform="translate(380, 45)">
              <rect x="0" y="0" width="380" height="250" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Apps Top Bar -->
              <rect x="15" y="15" width="350" height="35" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="38" font-family="sans-serif" font-weight="900" font-size="14" fill="var(--svg-stroke)">Samsung Smart Hub &gt; Apps</text>
              <!-- On-Screen Virtual Keypad Dialog -->
              <g transform="translate(40, 65)">
                <rect x="0" y="0" width="300" height="150" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
                <text x="150" y="25" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="var(--ikea-blue)">BÀN PHÍM SỐ ẢO TRÊN MÀN HÌNH TIVI</text>
                <!-- Number Sequence 1-2-3-4-5 Highlighted -->
                <circle cx="50" cy="65" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="50" y="71" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">1</text>
                <circle cx="100" cy="65" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="100" y="71" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">2</text>
                <circle cx="150" cy="65" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="150" y="71" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">3</text>
                <circle cx="200" cy="65" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="200" y="71" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">4</text>
                <circle cx="250" cy="65" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="250" y="71" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle">5</text>
                <!-- Arrow showing sequence -->
                <path d="M 68 65 L 82 65 M 118 65 L 132 65 M 168 65 L 182 65 M 218 65 L 232 65" stroke="var(--svg-stroke)" stroke-width="2" stroke-linecap="round" />
                <text x="150" y="125" font-family="sans-serif" font-weight="700" font-size="12" text-anchor="middle" fill="var(--svg-stroke)">D-Pad chọn lần lượt: 1 → 2 → 3 → 4 → 5</text>
              </g>
              <text x="190" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">MÀN HÌNH TIVI TRONG MỤC APPS</text>
            </g>
          </svg>
        `
      },
      {
        id: "sam-step-2",
        stepNumber: 2,
        title: "Bật Developer Mode = ON & Nhập Địa Chỉ Host PC IP",
        desc: "Trong hộp thoại Developer Mode vừa bật lên, gạt tùy chọn sang trạng thái ON và nhập chính xác địa chỉ IPv4 của máy tính vào ô Host PC IP.",
        details: [
          "Lấy IP của máy tính trước:",
          "  • Trên Windows: Mở cmd gõ `ipconfig` xem dòng `IPv4 Address` (ví dụ: `192.168.1.15`).",
          "  • Trên Mac: Mở Terminal gõ `ipconfig getifaddr en0`.",
          "Trên bảng Developer Mode configuration của TV:",
          "  • Dòng đầu tiên: Gạt chuyển sang [ON].",
          "  • Dòng Host PC IP: Nhập 4 cụm số IP của máy tính bằng bàn phím số (hoặc remote).",
          "  • Bấm nút 'OK' để lưu cấu hình."
        ],
        actionGlyph: "HOST PC IP",
        tip: "TV chỉ cho phép máy tính có địa chỉ IP này kết nối nạp ứng dụng qua cổng SDB 26101.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Screen with Dev Mode Configuration Popup -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="680" height="280" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Modal Title -->
              <rect x="15" y="15" width="650" height="40" rx="4" fill="#334155" />
              <text x="35" y="41" font-family="sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Developer Mode configuration</text>
              <!-- Dev Mode Toggle ON -->
              <g transform="translate(40, 80)">
                <text x="0" y="25" font-family="sans-serif" font-weight="800" font-size="16" fill="var(--svg-stroke)">Developer Mode</text>
                <!-- Switch ON -->
                <rect x="200" y="5" width="70" height="32" rx="16" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                <circle cx="252" cy="21" r="12" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="290" y="27" font-family="sans-serif" font-weight="900" font-size="14" fill="var(--ikea-blue)">ON</text>
              </g>
              <!-- Host PC IP Input -->
              <g transform="translate(40, 140)">
                <text x="0" y="25" font-family="sans-serif" font-weight="800" font-size="16" fill="var(--svg-stroke)">Host PC IP</text>
                <!-- IP Input Blocks -->
                <g transform="translate(200, 0)">
                  <rect x="0" y="0" width="60" height="40" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="30" y="26" font-family="monospace" font-weight="900" font-size="16" text-anchor="middle">192</text>
                  <text x="66" y="26" font-family="monospace" font-weight="900" font-size="16">.</text>
                  <rect x="75" y="0" width="60" height="40" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="105" y="26" font-family="monospace" font-weight="900" font-size="16" text-anchor="middle">168</text>
                  <text x="141" y="26" font-family="monospace" font-weight="900" font-size="16">.</text>
                  <rect x="150" y="0" width="60" height="40" rx="6" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="180" y="26" font-family="monospace" font-weight="900" font-size="16" text-anchor="middle">1</text>
                  <text x="216" y="26" font-family="monospace" font-weight="900" font-size="16">.</text>
                  <rect x="225" y="0" width="60" height="40" rx="6" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="255" y="26" font-family="monospace" font-weight="900" font-size="16" text-anchor="middle">15</text>
                </g>
                <text x="500" y="25" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--ikea-ink-secondary)">← Điền IP máy tính của bạn</text>
              </g>
              <!-- OK Button -->
              <g transform="translate(290, 210)">
                <rect x="0" y="0" width="100" height="40" rx="6" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="50" y="25" font-family="sans-serif" font-weight="900" font-size="16" text-anchor="middle" fill="#FFFFFF">OK</text>
              </g>
            </g>
            <!-- Bottom Notification -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
            <text x="400" y="383" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--ikea-blue)">BƯỚC TIẾP THEO CỰC KỲ QUAN TRỌNG: BẮT BUỘC COLD REBOOT KHỞI ĐỘNG LẠI TV!</text>
          </svg>
        `
      },
      {
        id: "sam-step-3",
        stepNumber: 3,
        title: "Cold Reboot TV: Giữ Nút Nguồn 3–5 Giây Để Mở Cổng 26101",
        desc: "Khởi động lại nguội (Cold Reboot) là điều kiện bắt buộc để TV áp dụng cấu hình và mở cổng dịch vụ SDB 26101. Nhấn nhả bình thường chỉ làm TV ngủ (Standby) và sẽ không mở cổng!",
        details: [
          "Hướng điều khiển thẳng vào mắt hồng ngoại của TV Samsung.",
          "NHẤN VÀ GIỮ CHẶT NÚT NGUỒN (POWER) LIÊN TỤC 3 ĐẾN 5 GIÂY.",
          "Màn hình TV sẽ tắt hẳn, sau đó tự bật lại với logo chữ SAMSUNG SMART TV.",
          "(Cách dự phòng: Rút phích cắm điện của TV ra khỏi ổ cắm tường, đợi 15 giây rồi cắm lại).",
          "Kiểm tra thành công: Mở lại mục Apps, góc trên bên phải màn hình sẽ có dòng chữ đỏ 'Develop Mode'."
        ],
        actionGlyph: "HOLD POWER 3-5s",
        warning: "Nếu chỉ bấm nút nguồn 1 chạm, TV chỉ vào chế độ ngủ chờ (Standby Mode) và cổng 26101 sẽ không hoạt động.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Remote Control pointing with finger holding Power button -->
            <g transform="translate(80, 50)">
              <!-- Hand & Remote -->
              <rect x="30" y="0" width="130" height="260" rx="24" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Big Power Key Pressed -->
              <circle cx="95" cy="40" r="22" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="3" />
              <path d="M 95 26 L 95 40 M 87 31 A 12 12 0 1 0 103 31" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
              <!-- Press Waves -->
              <circle cx="95" cy="40" r="32" fill="none" stroke="#DC2626" stroke-width="2" stroke-dasharray="4 3" />
              <!-- Finger / Hand Pressing -->
              <path d="M 120 70 L 105 45" stroke="var(--svg-stroke)" stroke-width="8" stroke-linecap="round" />
              <!-- Timer Hourglass Badge: 3-5s -->
              <g transform="translate(170, 20)">
                <rect x="0" y="0" width="120" height="50" rx="8" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2.5" />
                <text x="60" y="32" font-family="sans-serif" font-weight="900" font-size="16" text-anchor="middle" fill="#111111">⏱️ GIỮ 3-5s</text>
              </g>
              <text x="95" y="295" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">GIỮ NÚT NGUỒN</text>
            </g>
            <!-- Middle: TV Screen Reboots and Shows Logo -->
            <g transform="translate(420, 50)">
              <rect x="0" y="0" width="320" height="200" rx="10" fill="#0F172A" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- TV Stand -->
              <line x1="160" y1="200" x2="160" y2="230" stroke="var(--svg-stroke)" stroke-width="4" />
              <line x1="110" y1="230" x2="210" y2="230" stroke="var(--svg-stroke)" stroke-width="4" stroke-linecap="round" />
              <!-- Logo Samsung Appearing on Black Screen -->
              <g transform="translate(160, 100)">
                <ellipse cx="0" cy="0" rx="100" ry="30" fill="none" stroke="#1D4ED8" stroke-width="2.5" transform="rotate(-10)" />
                <text x="0" y="6" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle" fill="#FFFFFF" letter-spacing="2">SAMSUNG</text>
              </g>
              <!-- Success Indicator: Port 26101 Active -->
              <g transform="translate(85, 150)">
                <rect x="0" y="0" width="150" height="30" rx="6" fill="var(--ikea-success)" />
                <text x="75" y="20" font-family="monospace" font-weight="900" font-size="12" text-anchor="middle" fill="#FFFFFF">PORT 26101: OPEN</text>
              </g>
              <text x="160" y="265" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">TV TỰ KHỞI ĐỘNG LẠI (LOGO SAMSUNG)</text>
            </g>
            <!-- Alternate: Power Plug Pull 15s -->
            <g transform="translate(60, 340)">
              <rect x="0" y="0" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
              <text x="40" y="36" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">🔌 Cách 2: Rút phích cắm điện TV khỏi ổ tường trong 15 giây rồi cắm lại để ép Cold Reboot.</text>
            </g>
          </svg>
        `
      },
      {
        id: "sam-step-4",
        stepNumber: 4,
        title: "Cài Đặt 1-Chạm TizenTube Qua Apps2Samsung GUI",
        desc: "Mở phần mềm Apps2Samsung trên máy tính. Ứng dụng tự động dò tìm TV Samsung trong mạng LAN, trích xuất mã phần cứng DUID và nạp gói TizenTube Standalone (.wgt) chỉ bằng 1 nút bấm.",
        details: [
          "Tải phần mềm Apps2Samsung từ GitHub chính thức (bản `.exe` cho Windows hoặc `.dmg` cho macOS).",
          "Mở Apps2Samsung: Phần mềm sẽ tự động quét TV trong cùng mạng LAN.",
          "Nếu không tự hiện: Bấm 'Add Device' nhập địa chỉ IP của TV và cổng `26101`.",
          "Chuyển sang thẻ 'App Catalog' → Tìm 'TizenTube' (Standalone).",
          "Bấm nút 'Install'. Phần mềm sẽ tự động ký chứng chỉ DUID và nạp ứng dụng lên TV.",
          "Khi hoàn tất, trên Smart Hub của TV sẽ xuất hiện biểu tượng YouTube TizenTube độc lập màu đỏ!"
        ],
        command: "Apps2Samsung GUI -> Install TizenTube",
        actionGlyph: "INSTALL 1-CLICK",
        tip: "Bản Standalone chạy song song hoàn toàn độc lập với app YouTube gốc, không làm mất YouTube nguyên bản của TV.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Apps2Samsung PC GUI Mockup -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="680" height="280" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- App Window Header -->
              <rect x="0" y="0" width="680" height="38" rx="8" fill="#1E293B" />
              <circle cx="20" cy="19" r="6" fill="#EF4444" />
              <circle cx="38" cy="19" r="6" fill="#F59E0B" />
              <circle cx="56" cy="19" r="6" fill="#10B981" />
              <text x="340" y="24" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">Apps2Samsung - Tizen App Manager</text>
              <!-- Connected TV Status Bar -->
              <g transform="translate(30, 55)">
                <rect x="0" y="0" width="620" height="45" rx="6" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="1.5" />
                <circle cx="25" cy="22" r="8" fill="var(--ikea-success)" />
                <text x="45" y="27" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">ĐÃ KẾT NỐI: Samsung TV (192.168.1.50:26101) • DUID: UM000000000001</text>
              </g>
              <!-- App Catalog Item: TizenTube -->
              <g transform="translate(30, 120)">
                <rect x="0" y="0" width="620" height="90" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
                <!-- Red YouTube Icon -->
                <rect x="25" y="18" width="80" height="54" rx="14" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="2" />
                <polygon points="58,35 78,45 58,55" fill="#FFFFFF" />
                <!-- Info -->
                <text x="125" y="38" font-family="sans-serif" font-weight="900" font-size="16" fill="var(--svg-stroke)">TizenTube (Standalone .wgt)</text>
                <text x="125" y="58" font-family="sans-serif" font-weight="600" font-size="12" fill="var(--ikea-ink-secondary)">Ad-Free YouTube • SponsorBlock • Return Dislike • 4K HDR</text>
                <!-- Install Button -->
                <g transform="translate(480, 24)">
                  <rect x="0" y="0" width="115" height="42" rx="6" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="57" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">INSTALL ⚡</text>
                </g>
              </g>
              <!-- Progress Bar -->
              <g transform="translate(30, 230)">
                <rect x="0" y="0" width="620" height="18" rx="9" fill="var(--svg-fill-gray)" />
                <rect x="0" y="0" width="620" height="18" rx="9" fill="var(--ikea-success)" />
                <text x="310" y="14" font-family="sans-serif" font-weight="800" font-size="10" text-anchor="middle" fill="#FFFFFF">100% HOÀN TẤT - ĐÃ CÀI VÀO SMART HUB</text>
              </g>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="383" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">Tải công cụ chính thức: https://github.com/Apps2Samsung/Apps2Samsung</text>
          </svg>
        `
      },
      {
        id: "sam-step-5",
        stepNumber: 5,
        title: "Giải Mã Chữ Ký DUID & Lỗi [-12] SIGNATURE_VALIDATION_FAILED",
        desc: "Hiểu rõ cơ chế chứng chỉ số của Samsung: Lỗi [-12] chỉ xảy ra khi cài file .wgt ký sai DUID. Một khi đã cài thành công vào TV, chứng chỉ KHÔNG BAO GIỜ hết hạn và ứng dụng chạy vĩnh viễn!",
        details: [
          "Bản chất lỗi `[-12] SIGNATURE_VALIDATION_FAILED`: Từ Tizen 6.0+, Samsung yêu cầu file `.wgt` phải được ký bằng Distributor Certificate chứa đúng mã DUID (Device Unique ID) của TV đó.",
          "Cài các file `.wgt` trôi nổi trên mạng sẽ bị từ chối cài đặt (Lỗi -12).",
          "Apps2Samsung tự động giải quyết: Tự đọc DUID của TV bạn và tự sinh cặp chứng chỉ tương thích 100%.",
          "Hiểu đúng về thời hạn 1 năm của chứng chỉ Tizen:",
          "  • Chứng chỉ lập trình viên chỉ được kiểm tra DUY NHẤT TẠI THỜI ĐIỂM CÀI ĐẶT (Installation Time).",
          "  • Khi app đã nằm trên TV, hệ điều hành Tizen KHÔNG BAO GIỜ kiểm tra lại thời hạn chứng chỉ.",
          "  • Ứng dụng sẽ hoạt động vĩnh viễn nhiều năm mà không bao giờ bị khóa, trừ khi bạn chủ động xóa app hoặc Factory Reset TV!"
        ],
        actionGlyph: "DUID CERT = ∞",
        tip: "Bạn không bao giờ phải gia hạn chứng chỉ hàng năm như tin đồn trên mạng.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- DUID Matching Comparison -->
            <!-- Left: Error -12 (Wrong DUID) -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--ikea-danger-bg)" stroke="var(--ikea-danger)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="var(--ikea-danger)" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">❌ LỖI [-12] CHỮ KÝ SAI DUID</text>
              <g transform="translate(20, 60)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">TV DUID: UM000000000001</text>
                <text x="0" y="45" font-family="sans-serif" font-weight="700" font-size="12" fill="#DC2626">File .wgt DUID: OTHER_TV_123</text>
                <line x1="10" y1="65" x2="260" y2="65" stroke="var(--ikea-border)" stroke-width="1.5" />
                <text x="0" y="90" font-family="sans-serif" font-weight="800" font-size="12" fill="#DC2626">KẾT QUẢ: Tizen từ chối cài đặt!</text>
                <text x="0" y="110" font-family="monospace" font-weight="800" font-size="11" fill="var(--svg-stroke)">[-12] SIGNATURE_VALIDATION_FAILED</text>
              </g>
              <g transform="translate(130, 195)">
                <circle cx="25" cy="25" r="22" fill="#DC2626" />
                <line x1="12" y1="12" x2="38" y2="38" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
                <line x1="38" y1="12" x2="12" y2="38" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
              </g>
            </g>
            <!-- Right: Valid DUID Match & Perpetual Validity -->
            <g transform="translate(430, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="var(--ikea-success)" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">✔️ DUID KHỚP: CHẠY VĨNH VIỄN</text>
              <g transform="translate(20, 60)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">TV DUID: UM000000000001</text>
                <text x="0" y="45" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--ikea-success)">Apps2Samsung DUID: KHỚP 100%</text>
                <line x1="10" y1="65" x2="260" y2="65" stroke="var(--ikea-border)" stroke-width="1.5" />
                <text x="0" y="90" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--ikea-success)">Sau khi cài: Tizen KHÔNG kiểm tra lại</text>
                <text x="0" y="110" font-family="sans-serif" font-weight="700" font-size="11" fill="var(--svg-stroke)">Thời hạn: Vĩnh viễn (Infinity ∞)</text>
              </g>
              <g transform="translate(130, 185)">
                <!-- Infinity Symbol -->
                <text x="25" y="40" font-family="sans-serif" font-weight="900" font-size="48" text-anchor="middle" fill="var(--ikea-success)">∞</text>
              </g>
            </g>
            <!-- Bottom Key Takeaway -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-yellow-soft)" stroke="var(--ikea-yellow)" stroke-width="2" />
            <text x="400" y="375" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">💡 BẢO ĐẢM: Chứng chỉ 1 năm chỉ dùng để cài đặt. Sau khi cài, ứng dụng chạy vĩnh viễn nhiều năm!</text>
          </svg>
        `
      },
      {
        id: "sam-step-6",
        stepNumber: 6,
        title: "Bảo Vệ Ứng Dụng: Chặn Cập Nhật Phần Mềm Tự Động (Anti-OTA)",
        desc: "Để tránh việc Samsung tung bản cập nhật hệ điều hành tự động làm tắt Developer Mode hoặc xóa ứng dụng sideload, hãy tắt cập nhật trên TV và chặn tên miền OTA trên router.",
        details: [
          "Lớp 1: Tắt cập nhật trong cài đặt TV:",
          "  • Bấm Cài đặt (Settings) trên remote → Chọn 'Hỗ trợ' (Support) → 'Bản cập nhật phần mềm' (Software Update).",
          "  • Chuyển mục 'Tự động cập nhật' (Auto Update) sang [TẮT / OFF].",
          "Lớp 2: Chặn tên miền cập nhật OTA trên Router Wi-Fi / Pi-hole / AdGuard Home:",
          "  • Chặn tên miền: `samsungotn.net`, `samsungcloudsolution.net`, `samsungcloudsolution.com`.",
          "  • Chặn tên miền quảng cáo: `samsungads.com`, `samsungacr.com`.",
          "Mẹo chặn DNS Fallback: TV Samsung có thể tự đổi sang DNS Google `8.8.8.8` nếu bị chặn. Nên tạo rule chặn cổng 53 ngoại mạng trên router đối với IP của TV."
        ],
        command: "samsungotn.net\nsamsungcloudsolution.net\nsamsungads.com",
        actionGlyph: "BLOCK OTA",
        tip: "Đăng nhập tài khoản YouTube trên TizenTube: Mở TizenTube → Đăng nhập → Vào youtube.com/activate trên điện thoại nhập mã 8 số.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Left: TV Settings Screen Disabling Auto Update -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="320" height="250" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="15" y="15" width="290" height="35" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="38" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--svg-stroke)">Support &gt; Software Update</text>
              <g transform="translate(25, 80)">
                <text x="0" y="20" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">Tự động cập nhật</text>
                <text x="0" y="40" font-family="sans-serif" font-weight="600" font-size="11" fill="var(--ikea-ink-secondary)">(Auto Update)</text>
                <!-- Switch OFF -->
                <rect x="190" y="5" width="60" height="28" rx="14" fill="var(--svg-fill-gray)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <circle cx="205" cy="19" r="11" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="190" y="52" font-family="sans-serif" font-weight="900" font-size="12" fill="#DC2626">[ĐÃ TẮT]</text>
              </g>
              <text x="160" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">CÀI ĐẶT TRÊN TIVI</text>
            </g>
            <!-- Middle: Firewall Wall -->
            <g transform="translate(400, 100)">
              <rect x="0" y="0" width="20" height="150" rx="4" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="10" y="80" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF" transform="rotate(-90 10 80)">FIREWALL</text>
            </g>
            <!-- Right: Blocked OTA Domains -->
            <g transform="translate(440, 45)">
              <rect x="0" y="0" width="300" height="250" rx="12" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2.5" />
              <rect x="15" y="15" width="270" height="35" rx="4" fill="#1E293B" />
              <text x="150" y="38" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">ROUTER DNS BLOCKLIST</text>
              <g transform="translate(25, 75)">
                <text x="0" y="25" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 samsungotn.net</text>
                <text x="0" y="55" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 samsungcloudsolution.net</text>
                <text x="0" y="85" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 samsungads.com</text>
                <text x="0" y="115" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 samsungacr.com</text>
              </g>
              <text x="150" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">CHẶN TRÊN ROUTER / PI-HOLE</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">Chặn tên miền OTA: samsungotn.net &amp;&amp; samsungcloudsolution.net</text>
          </svg>
        `
      }
    ]
  },

  // ==========================================================================
  // PLATFORM 3: LG SMART TV (WEBOS)
  // ==========================================================================
  lg: {
    id: "lg",
    title: "LG Smart TV (webOS)",
    subtitle: "Kích Hoạt Developer Mode Chính Thức & Cài Đặt YouTube AdFree + Auto Token Refresh",
    badge: "LG WEBOS",
    themeColor: "#DC2626",
    tools: [
      { name: "LG Smart TV chạy webOS 3.5 đến webOS 24+ (2017 đến nay)", icon: "📺" },
      { name: "LG Magic Remote (Chuột bay có con lăn)", icon: "🪄" },
      { name: "Tài khoản LG Developer miễn phí (Đăng ký tại developer.lge.com)", icon: "👤" },
      { name: "Máy tính PC cài webOS Dev Manager (Bản .msi hoặc .dmg)", icon: "💻" }
    ],
    steps: [
      {
        id: "lg-step-1",
        stepNumber: 1,
        title: "Tạo Tài Khoản LG Developer & Cài Ứng Dụng Developer Mode",
        desc: "Đăng ký tài khoản lập trình viên miễn phí trên trang web của LG và cài đặt ứng dụng Developer Mode chính thức từ kho ứng dụng LG Content Store / Apps trên TV.",
        details: [
          "Trên máy tính hoặc điện thoại: Truy cập `https://developer.lge.com/` và bấm 'Sign In' → 'Create Account'.",
          "Đăng ký bằng email của bạn, kích hoạt tài khoản qua link gửi về hộp thư.",
          "Trên TV LG: Bấm phím Home trên remote → Mở 'LG Content Store' (hoặc 'Apps').",
          "Bấm kính lúp tìm kiếm từ khóa: `Developer Mode`.",
          "Chọn ứng dụng chính thức của LG Electronics và bấm 'Cài đặt' (Install)."
        ],
        command: "https://developer.lge.com/",
        actionGlyph: "DEV MODE APP",
        tip: "Dùng Developer Mode chính thức an toàn 100%, không bị mất bảo hành và không có bất kỳ rủi ro brick nào như các công cụ root cũ.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Smartphone: Register LG Account -->
            <g transform="translate(80, 50)">
              <rect x="0" y="0" width="160" height="260" rx="24" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="12" y="20" width="136" height="215" rx="10" fill="var(--svg-fill-gray)" opacity="0.2" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <text x="80" y="55" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle" fill="#DC2626">developer.lge.com</text>
              <!-- Signup Form Mockup -->
              <rect x="25" y="75" width="110" height="24" rx="4" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <text x="35" y="91" font-family="sans-serif" font-size="10" fill="var(--ikea-ink-secondary)">Email...</text>
              <rect x="25" y="105" width="110" height="24" rx="4" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <text x="35" y="121" font-family="sans-serif" font-size="10" fill="var(--ikea-ink-secondary)">Password...</text>
              <rect x="25" y="140" width="110" height="28" rx="4" fill="#DC2626" />
              <text x="80" y="158" font-family="sans-serif" font-weight="800" font-size="10" text-anchor="middle" fill="#FFFFFF">CREATE ACCOUNT</text>
              <text x="80" y="285" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">1. ĐĂNG KÝ TÀI KHOẢN</text>
            </g>
            <!-- Arrow -->
            <g transform="translate(270, 140)">
              <line x1="0" y1="20" x2="60" y2="20" stroke="var(--svg-stroke)" stroke-width="4" stroke-dasharray="6 4" />
              <polygon points="50,10 70,20 50,30" fill="var(--svg-stroke)" />
            </g>
            <!-- TV: LG Content Store with Developer Mode App -->
            <g transform="translate(370, 50)">
              <rect x="0" y="0" width="370" height="240" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Store Header -->
              <rect x="15" y="15" width="340" height="35" rx="4" fill="#DC2626" />
              <text x="30" y="38" font-family="sans-serif" font-weight="900" font-size="14" fill="#FFFFFF">LG Content Store &gt; Search</text>
              <!-- Search Result: Developer Mode App -->
              <g transform="translate(30, 70)">
                <rect x="0" y="0" width="310" height="80" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
                <rect x="15" y="15" width="50" height="50" rx="10" fill="#334155" />
                <text x="40" y="46" font-family="sans-serif" font-weight="900" font-size="20" text-anchor="middle" fill="#FFFFFF">&lt;/&gt;</text>
                <text x="80" y="38" font-family="sans-serif" font-weight="900" font-size="15" fill="var(--svg-stroke)">Developer Mode</text>
                <text x="80" y="58" font-family="sans-serif" font-weight="600" font-size="11" fill="var(--ikea-ink-secondary)">LG Electronics Inc. • Free</text>
                <!-- Install Button -->
                <rect x="225" y="25" width="70" height="30" rx="4" fill="var(--ikea-blue)" />
                <text x="260" y="45" font-family="sans-serif" font-weight="800" font-size="12" text-anchor="middle" fill="#FFFFFF">INSTALL</text>
              </g>
              <text x="185" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">2. CÀI DEV MODE TRÊN TIVI</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="15" fill="var(--ikea-code-text)">Đăng ký miễn phí: https://developer.lge.com/</text>
          </svg>
        `
      },
      {
        id: "lg-step-2",
        stepNumber: 2,
        title: "Bật Dev Mode Status (Khởi Động Lại) & Bật Key Server",
        desc: "Mở app Developer Mode trên TV, đăng nhập tài khoản LG, bật Dev Mode Status sang ON và chọn Restart TV. Khi TV bật lại, mở lại app và gạt Key Server sang ON để mở cổng 9922.",
        details: [
          "Mở ứng dụng Developer Mode vừa cài đặt trên TV.",
          "Nhập email và mật khẩu tài khoản LG Developer đã tạo ở bước 1.",
          "Gạt mục 'Dev Mode Status' sang [ON].",
          "TV hiện popup yêu cầu khởi động lại → Chọn 'Restart'.",
          "Sau khi TV bật lại, mở lại app Developer Mode:",
          "  • Gạt mục 'Key Server' sang [ON].",
          "  • Màn hình TV sẽ hiển thị: Địa chỉ IP (ví dụ: `192.168.1.150`), Cổng `9922` và Passphrase gồm 6 ký tự ngẫu nhiên (ví dụ: `A3F9B2`)."
        ],
        actionGlyph: "KEY SERVER = ON",
        tip: "Hãy ghi lại Passphrase 6 ký tự để điền vào webOS Dev Manager trên máy tính.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Screen with Developer Mode App Status Screen -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="680" height="280" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- App Title Bar -->
              <rect x="15" y="15" width="650" height="40" rx="4" fill="#334155" />
              <text x="35" y="41" font-family="sans-serif" font-weight="900" font-size="16" fill="#FFFFFF">Developer Mode App (LG Electronics)</text>
              <!-- Dev Mode Status Toggle ON -->
              <g transform="translate(40, 75)">
                <text x="0" y="24" font-family="sans-serif" font-weight="800" font-size="15" fill="var(--svg-stroke)">Dev Mode Status</text>
                <rect x="200" y="5" width="60" height="28" rx="14" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                <circle cx="244" cy="19" r="11" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="280" y="25" font-family="sans-serif" font-weight="900" font-size="13" fill="var(--ikea-blue)">ON (Restarted)</text>
              </g>
              <!-- Key Server Toggle ON -->
              <g transform="translate(40, 125)">
                <text x="0" y="24" font-family="sans-serif" font-weight="800" font-size="15" fill="var(--svg-stroke)">Key Server</text>
                <rect x="200" y="5" width="60" height="28" rx="14" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="2" />
                <circle cx="244" cy="19" r="11" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="280" y="25" font-family="sans-serif" font-weight="900" font-size="13" fill="var(--ikea-blue)">ON (Port 9922)</text>
              </g>
              <!-- Connection Info Display Box -->
              <g transform="translate(40, 175)">
                <rect x="0" y="0" width="600" height="85" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
                <text x="20" y="30" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">IP Address: <tspan font-family="monospace" font-weight="900" fill="var(--ikea-blue)">192.168.1.150</tspan> (Port: 9922)</text>
                <!-- Passphrase Highlight -->
                <text x="20" y="62" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">Passphrase (Mật khẩu phiên):</text>
                <rect x="240" y="42" width="140" height="32" rx="6" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="310" y="64" font-family="monospace" font-weight="900" font-size="18" text-anchor="middle" fill="#111111" letter-spacing="3">A3F9B2</text>
              </g>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2" />
            <text x="400" y="383" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--ikea-blue)">LƯU Ý: Ghi lại mã Passphrase 6 ký tự để điền vào webOS Dev Manager trên máy tính.</text>
          </svg>
        `
      },
      {
        id: "lg-step-3",
        stepNumber: 3,
        title: "Kết Nối webOS Dev Manager Trên Máy Tính (Cổng 9922)",
        desc: "Mở ứng dụng webOS Dev Manager trên máy tính, thêm thiết bị TV mới bằng cách điền IP của TV, Port 9922, Username mặc định prisoner và Passphrase 6 ký tự.",
        details: [
          "Tải và cài đặt 'webOS Dev Manager' trên máy tính (GitHub: `webosbrew/dev-manager-desktop`).",
          "Mở webOS Dev Manager → Bấm nút 'Add Device' (Thêm thiết bị):",
          "  • Device Host/IP: Nhập IP của TV LG (ví dụ: `192.168.1.150`).",
          "  • Port: `9922` (Mặc định của Key Server).",
          "  • Username: `prisoner` (Tên người dùng mặc định của webOS Dev Mode).",
          "  • Passphrase: Nhập chính xác 6 ký tự hiển thị trên màn hình TV.",
          "Bấm 'Connect & Save'. Trạng thái kết nối sẽ chuyển sang đèn xanh lá cây."
        ],
        command: "Host: <IP_TV> | Port: 9922 | User: prisoner",
        actionGlyph: "PORT 9922",
        tip: "Nếu báo lỗi kết nối, hãy kiểm tra xem TV và máy tính có đang cùng mạng Wi-Fi không và chắc chắn công tắc Key Server đang bật.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- webOS Dev Manager Add Device Dialog Mockup -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="680" height="280" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Header Bar -->
              <rect x="0" y="0" width="680" height="38" rx="8" fill="#1E293B" />
              <text x="340" y="24" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">webOS Dev Manager - Add Device</text>
              <!-- Form Grid -->
              <g transform="translate(50, 60)">
                <!-- Host/IP -->
                <text x="0" y="25" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">Device Host / IP:</text>
                <rect x="180" y="5" width="220" height="32" rx="4" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="195" y="26" font-family="monospace" font-weight="800" font-size="13">192.168.1.150</text>
                <!-- Port 9922 -->
                <text x="0" y="70" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">Port (Cổng kết nối):</text>
                <rect x="180" y="50" width="100" height="32" rx="4" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="195" y="71" font-family="monospace" font-weight="800" font-size="13">9922</text>
                <!-- Username -->
                <text x="0" y="115" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">Username (Mặc định):</text>
                <rect x="180" y="95" width="140" height="32" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="195" y="116" font-family="monospace" font-weight="800" font-size="13">prisoner</text>
                <!-- Passphrase -->
                <text x="0" y="160" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">Passphrase (6 ký tự):</text>
                <rect x="180" y="140" width="140" height="32" rx="4" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="195" y="161" font-family="monospace" font-weight="900" font-size="14">A3F9B2</text>
                <!-- Connect & Save Button -->
                <g transform="translate(430, 80)">
                  <rect x="0" y="0" width="150" height="50" rx="8" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <text x="75" y="30" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">CONNECT &amp; SAVE</text>
                  <!-- Green Online Dot -->
                  <circle cx="135" cy="15" r="5" fill="#FFFFFF" />
                </g>
              </g>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">Tải Dev Manager: https://github.com/webosbrew/dev-manager-desktop</text>
          </svg>
        `
      },
      {
        id: "lg-step-4",
        stepNumber: 4,
        title: "Cài YouTube AdFree (.ipk) & Gói Auto Dev Token Refresh (1000h)",
        desc: "Trong webOS Dev Manager, chuyển sang thẻ 'Apps' để cài YouTube AdFree. Đặc biệt, BẮT BUỘC cài đặt gói 'Auto Dev Token Refresh' để đồng hồ 1000 giờ tự reset vĩnh viễn, ngăn TV xóa app!",
        details: [
          "Trong webOS Dev Manager đã kết nối:",
          "  1. Vào tab 'Available' (hoặc Apps Repo).",
          "  2. Tìm 'YouTube AdFree' (`org.webosbrew.youtube`) → Bấm 'Install'.",
          "  3. Cài tiếp 'Homebrew Channel' (`org.webosbrew.hbchannel`).",
          "GÓI QUAN TRỌNG NHẤT: Cài 'Auto Dev Token Refresh' (`org.webosbrew.dev-token-refresher`):",
          "  • Developer Mode của LG mặc định chỉ cấp phiên 1000 giờ (~41 ngày). Nếu hết hạn, TV sẽ tự xóa sạch các ứng dụng cài ngoài.",
          "  • Gói Auto Dev Token Refresh sẽ chạy ngầm, tự động kết nối API của LG mỗi khi TV mở mạng để reset đồng hồ về lại 1000 giờ.",
          "  • Nhờ đó, YouTube AdFree sẽ tồn tại vĩnh viễn trên TV mà không bao giờ bị khóa hay xóa!"
        ],
        command: "Install: org.webosbrew.youtube & dev-token-refresher",
        actionGlyph: "RESET 1000h ♾️",
        tip: "Ứng dụng Auto Token Refresher chỉ tốn ~2MB RAM và hoàn toàn vô hình, hoạt động tự động 100%.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- App Installation Cards Grid -->
            <!-- Left Card: YouTube AdFree -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="#DC2626" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">1. YOUTUBE ADFREE (.IPK)</text>
              <g transform="translate(20, 60)">
                <rect x="10" y="10" width="60" height="40" rx="10" fill="#DC2626" />
                <polygon points="35,22 50,30 35,38" fill="#FFFFFF" />
                <text x="85" y="28" font-family="sans-serif" font-weight="800" font-size="14" fill="var(--svg-stroke)">YouTube AdFree</text>
                <text x="85" y="46" font-family="monospace" font-size="11" fill="var(--ikea-ink-secondary)">org.webosbrew.youtube</text>
                <text x="10" y="85" font-family="sans-serif" font-weight="600" font-size="12" fill="var(--svg-stroke)">• Chặn 100% video ads &amp; banner</text>
                <text x="10" y="108" font-family="sans-serif" font-weight="600" font-size="12" fill="var(--svg-stroke)">• Tích hợp SponsorBlock tự nhảy</text>
                <text x="10" y="131" font-family="sans-serif" font-weight="600" font-size="12" fill="var(--svg-stroke)">• Hỗ trợ 4K HDR 60fps sắc nét</text>
              </g>
              <!-- Installed Badge -->
              <g transform="translate(85, 205)">
                <rect x="0" y="0" width="140" height="35" rx="6" fill="var(--ikea-success)" />
                <text x="70" y="22" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle" fill="#FFFFFF">✓ ĐÃ CÀI ĐẶT</text>
              </g>
            </g>
            <!-- Right Card: Auto Dev Token Refresh (The Hero Package) -->
            <g transform="translate(430, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="var(--ikea-blue)" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">2. AUTO DEV TOKEN REFRESH 🛡️</text>
              <g transform="translate(20, 60)">
                <!-- Rotating Arrow around 1000h Timer -->
                <circle cx="45" cy="45" r="30" fill="none" stroke="var(--ikea-blue)" stroke-width="3" stroke-dasharray="10 5" />
                <text x="45" y="44" font-family="monospace" font-weight="900" font-size="13" text-anchor="middle" fill="var(--ikea-blue)">1000h</text>
                <text x="45" y="58" font-family="sans-serif" font-weight="700" font-size="9" text-anchor="middle" fill="var(--ikea-blue)">AUTO</text>
                <text x="90" y="35" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">Token Refresher</text>
                <text x="90" y="55" font-family="monospace" font-size="11" fill="var(--ikea-ink-secondary)">dev-token-refresher</text>
                <text x="10" y="95" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--ikea-blue)">• Tự động reset đồng hồ 1000 giờ</text>
                <text x="10" y="118" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--ikea-blue)">• Chống TV tự xóa app sau 41 ngày</text>
                <text x="10" y="141" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--ikea-blue)">• Ứng dụng chạy VĨNH VIỄN 100%</text>
              </g>
              <!-- Perpetual Badge -->
              <g transform="translate(85, 205)">
                <rect x="0" y="0" width="140" height="35" rx="6" fill="var(--ikea-blue)" />
                <text x="70" y="22" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle" fill="#FFFFFF">LOOP RESET ♾️</text>
              </g>
            </g>
            <!-- Bottom Key Takeaway -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-yellow-soft)" stroke="var(--ikea-yellow)" stroke-width="2" />
            <text x="400" y="375" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">⭐ BẮT BUỘC: Cài đặt gói Auto Dev Token Refresh để ứng dụng không bao giờ bị xóa sau 1000 giờ!</text>
          </svg>
        `
      },
      {
        id: "lg-step-5",
        stepNumber: 5,
        title: "Ghim Phím Tắt 1-Chạm Magic Remote (Quick Access)",
        desc: "Gán ứng dụng YouTube AdFree vào phím số 1 (hoặc số bất kỳ) trên điều khiển LG Magic Remote bằng cách nhấn giữ 2-3 giây để mở ngay lập tức chỉ với 1 chạm.",
        details: [
          "Mở ứng dụng YouTube AdFree vừa cài đặt trên TV LG.",
          "Khi ứng dụng đang hiển thị trên màn hình: Hướng điều khiển Magic Remote vào TV và NHẤN GIỮ PHÍM SỐ 1 TRONG 2 ĐẾN 3 GIÂY.",
          "Màn hình TV sẽ xuất hiện thông báo: 'Thêm vào Phím truy cập nhanh 1?' (Add to Quick Access 1?).",
          "Dùng con lăn remote chọn 'Có' (Yes).",
          "Từ nay về sau: Bất cứ lúc nào đang xem TV hay ở cổng HDMI, chỉ cần NHẤN GIỮ PHÍM 1 trong 1 giây là TV mở ngay YouTube không quảng cáo!"
        ],
        actionGlyph: "HOLD KEY 1 (2-3s)",
        tip: "Để chỉnh sửa hoặc xóa phím tắt, hãy nhấn giữ phím số 0 trên remote để mở menu Quản lý Phím truy cập nhanh.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Left: LG Magic Remote with Key 1 Zoomed -->
            <g transform="translate(80, 45)">
              <!-- Magic Remote Contour Body -->
              <path d="M 40 20 Q 75 0 110 20 L 125 240 Q 75 280 25 240 Z" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Power -->
              <circle cx="55" cy="35" r="10" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <!-- Number Key 1 Highlighted Big -->
              <circle cx="55" cy="75" r="18" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="3" />
              <text x="55" y="82" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle" fill="#111111">1</text>
              <!-- Key 2 & 3 -->
              <circle cx="95" cy="75" r="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="1.5" />
              <text x="95" y="80" font-family="sans-serif" font-weight="700" font-size="11" text-anchor="middle">2</text>
              <!-- Scroll Wheel D-Pad -->
              <ellipse cx="75" cy="165" rx="35" ry="35" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="68" y="152" width="14" height="26" rx="7" fill="var(--svg-stroke)" />
              <!-- Finger Holding Key 1 -->
              <g transform="translate(110, 45)">
                <rect x="0" y="0" width="115" height="45" rx="8" fill="var(--svg-stroke)" />
                <text x="57" y="28" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">⏱️ GIỮ 2-3s</text>
              </g>
              <text x="75" y="315" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">LG MAGIC REMOTE</text>
            </g>
            <!-- Right: TV Popup "Add to Quick Access 1?" -->
            <g transform="translate(390, 65)">
              <rect x="0" y="0" width="350" height="210" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <!-- Popup Title -->
              <rect x="15" y="15" width="320" height="35" rx="4" fill="#334155" />
              <text x="175" y="38" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">Quick Access / Phím truy cập nhanh</text>
              <!-- Dialog Body -->
              <text x="175" y="85" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">Thêm "YouTube AdFree" vào</text>
              <text x="175" y="110" font-family="sans-serif" font-weight="900" font-size="18" text-anchor="middle" fill="var(--ikea-blue)">Phím số [ 1 ] ?</text>
              <!-- Yes / No Buttons -->
              <g transform="translate(65, 140)">
                <rect x="0" y="0" width="100" height="40" rx="6" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="50" y="25" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">CÓ (YES) ✓</text>
                <rect x="120" y="0" width="100" height="40" rx="6" fill="var(--svg-fill-gray)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="170" y="25" font-family="sans-serif" font-weight="700" font-size="14" text-anchor="middle" fill="var(--svg-stroke)">Không</text>
              </g>
              <text x="175" y="255" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">MÀN HÌNH TIVI XÁC NHẬN</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="383" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">💡 Tiện ích 1-chạm: Giữ phím 1 trong 1 giây từ bất kỳ kênh nào để xem ngay YouTube không quảng cáo.</text>
          </svg>
        `
      },
      {
        id: "lg-step-6",
        stepNumber: 6,
        title: "Bảo Vệ webOS: Chặn Cập Nhật Firmware Tự Động (Anti-OTA)",
        desc: "Tắt tính năng tự động cập nhật phần mềm trong menu TV LG và chặn tên miền máy tính chủ firmware của LG trên router để bảo toàn trạng thái Developer Mode.",
        details: [
          "Tắt cập nhật tự động trên TV:",
          "  • Bấm nút Bánh răng (Cài đặt) trên remote → Chọn 'Tất cả cài đặt' (All Settings).",
          "  • Chọn 'Hỗ trợ' (Support) hoặc 'Cài đặt chung' (General) → 'Cập nhật phần mềm' (Software Update).",
          "  • Gạt mục 'Cho phép tự động cập nhật' (Allow Automatic Updates) sang [TẮT / OFF].",
          "Chặn tên miền OTA trên Router / Pi-hole / AdGuard DNS:",
          "  • Danh sách tên miền cập nhật: `snu.lge.com`, `su.lge.com`, `su-ssl.lge.com`, `snu-ssl.lge.com`, `aic-ngfts.lge.com`.",
          "  • Danh sách tên miền telemetry & quảng cáo: `lgtvcommon.com`, `rdx2.lgtvcommon.com`."
        ],
        command: "snu.lge.com\nsu.lge.com\naic-ngfts.lge.com",
        actionGlyph: "BLOCK LG OTA",
        tip: "Sau khi chặn, nếu vào menu Cập nhật phần mềm TV sẽ báo lỗi mạng - đây là hiện tượng hoàn toàn bình thường chứng minh đã chặn thành công.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Menu Toggle vs Router Blocklist -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="320" height="250" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="15" y="15" width="290" height="35" rx="4" fill="var(--svg-fill-gray)" opacity="0.3" stroke="var(--svg-stroke)" stroke-width="1" />
              <text x="30" y="38" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--svg-stroke)">All Settings &gt; Support &gt; Update</text>
              <g transform="translate(25, 80)">
                <text x="0" y="20" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">Allow Auto Updates</text>
                <text x="0" y="40" font-family="sans-serif" font-weight="600" font-size="11" fill="var(--ikea-ink-secondary)">(Cho phép tự cập nhật)</text>
                <!-- Switch OFF -->
                <rect x="190" y="5" width="60" height="28" rx="14" fill="var(--svg-fill-gray)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <circle cx="205" cy="19" r="11" fill="#FFFFFF" stroke="var(--svg-stroke)" stroke-width="1.5" />
                <text x="190" y="52" font-family="sans-serif" font-weight="900" font-size="12" fill="#DC2626">[ĐÃ TẮT]</text>
              </g>
              <text x="160" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">CÀI ĐẶT TRÊN TIVI LG</text>
            </g>
            <!-- Firewall Icon -->
            <g transform="translate(400, 100)">
              <rect x="0" y="0" width="20" height="150" rx="4" fill="#DC2626" stroke="var(--svg-stroke)" stroke-width="2" />
              <text x="10" y="80" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF" transform="rotate(-90 10 80)">FIREWALL</text>
            </g>
            <!-- Blocked LG Domains -->
            <g transform="translate(440, 45)">
              <rect x="0" y="0" width="300" height="250" rx="12" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2.5" />
              <rect x="15" y="15" width="270" height="35" rx="4" fill="#1E293B" />
              <text x="150" y="38" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">LG FIRMWARE BLOCKLIST</text>
              <g transform="translate(25, 75)">
                <text x="0" y="25" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 snu.lge.com</text>
                <text x="0" y="55" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 su.lge.com</text>
                <text x="0" y="85" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 aic-ngfts.lge.com</text>
                <text x="0" y="115" font-family="monospace" font-weight="800" font-size="12" fill="#DC2626">🚫 lgtvcommon.com</text>
              </g>
              <text x="150" y="280" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">CHẶN TRÊN ROUTER / DNS</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">Chặn tên miền OTA LG: snu.lge.com &amp;&amp; su.lge.com</text>
          </svg>
        `
      }
    ]
  },

  // ==========================================================================
  // PLATFORM 4: SỔ TAY XỬ LÝ SỰ CỐ & CỨU HỘ KHẨN CẤP (TROUBLESHOOTING)
  // ==========================================================================
  troubleshooting: {
    id: "troubleshooting",
    title: "Sổ Tay Xử Lý Sự Cố & Cứu Hộ Khẩn Cấp",
    subtitle: "Cứu Hộ Màn Hình Đen, Mất Tín Hiệu HDMI, Lỗi ADB Unauthorized & Factory Reset Phím Cứng",
    badge: "TROUBLESHOOTING",
    themeColor: "#EAB308",
    tools: [
      { name: "Remote TV nguyên bản của hãng", icon: "📱" },
      { name: "Máy tính PC có cáp mạng hoặc kết nối Wi-Fi cùng TV", icon: "💻" },
      { name: "Cáp USB dữ liệu (trong trường hợp cứu hộ khẩn cấp)", icon: "🔌" },
      { name: "Cụm phím cứng vật lý phía sau hoặc cạnh đáy TV", icon: "🔘" }
    ],
    steps: [
      {
        id: "fix-step-1",
        stepNumber: 1,
        title: "Cứu Hộ Màn Hình Đen Sau Khi Debloat Android TV",
        desc: "Nếu lỡ tắt nhầm trình khởi chạy mặc định khiến TV bị đen màn hình khi bấm nút Home, hãy áp dụng một trong hai phương án cứu hộ bằng lệnh ADB từ máy tính hoặc dùng phím cứng remote.",
        details: [
          "Phương án 1: Cứu hộ bằng lệnh ADB qua máy tính:",
          "  1. Kết nối ADB: `adb connect <IP_TV>:5555`.",
          "  2. Bật lại launcher gốc: `adb shell pm enable com.google.android.apps.tv.launcherx`.",
          "  3. Xóa ưu tiên launcher: `adb shell cmd package clear-package-preferred-activities`.",
          "  4. Kích hoạt giao diện Home: `adb shell am start -a android.intent.action.MAIN -c android.intent.category.HOME`.",
          "Phương án 2: Cứu hộ trực tiếp bằng Remote TV (Không cần máy tính):",
          "  1. Nhấn phím 'Cài đặt' (Bánh răng) hoặc phím 'Input' trên remote.",
          "  2. Menu cạnh bên sẽ hiện ra → Chọn 'Cài đặt hệ thống' → 'Ứng dụng' → 'Xem tất cả ứng dụng'.",
          "  3. Tìm đến ứng dụng 'Google TV' hoặc 'Android TV Home' → Bấm nút 'Bật' (Enable)."
        ],
        command: "adb shell pm enable com.google.android.apps.tv.launcherx\nadb shell cmd package clear-package-preferred-activities\nadb shell am start -a android.intent.action.MAIN -c android.intent.category.HOME",
        actionGlyph: "BLACK SCREEN RESCUE",
        tip: "Màn hình đen chỉ là do thiếu ứng dụng Home Launcher hiển thị, toàn bộ hệ điều hành bên dưới vẫn hoạt động 100% nguyên vẹn.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Branch 1: Terminal Command (PC) -->
            <g transform="translate(50, 45)">
              <rect x="0" y="0" width="330" height="260" rx="10" fill="#0F172A" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="0" y="0" width="330" height="35" rx="8" fill="#1E293B" />
              <text x="165" y="24" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">CÁCH 1: LỆNH ADB CỨU HỘ (PC)</text>
              <g transform="translate(15, 55)">
                <text x="0" y="20" font-family="monospace" font-size="11" fill="#38BDF8">&gt; adb shell pm enable</text>
                <text x="0" y="38" font-family="monospace" font-size="10" fill="#22C55E">com.google.android.apps.tv.launcherx</text>
                <text x="0" y="65" font-family="monospace" font-size="11" fill="#38BDF8">&gt; adb shell cmd package</text>
                <text x="0" y="83" font-family="monospace" font-size="10" fill="#22C55E">clear-package-preferred-activities</text>
                <text x="0" y="110" font-family="monospace" font-size="11" fill="#38BDF8">&gt; adb shell am start -a</text>
                <text x="0" y="128" font-family="monospace" font-size="10" fill="#22C55E">android.intent.action.MAIN ...</text>
              </g>
              <g transform="translate(95, 210)">
                <rect x="0" y="0" width="140" height="35" rx="6" fill="var(--ikea-success)" />
                <text x="70" y="22" font-family="sans-serif" font-weight="900" font-size="12" text-anchor="middle" fill="#FFFFFF">RESCUE OK ✓</text>
              </g>
            </g>
            <!-- Branch 2: Hardware Remote Settings Button -->
            <g transform="translate(420, 45)">
              <rect x="0" y="0" width="330" height="260" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="0" y="0" width="330" height="35" rx="8" fill="#334155" />
              <text x="165" y="24" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">CÁCH 2: PHÍM CÀI ĐẶT TRÊN REMOTE</text>
              <g transform="translate(25, 60)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">1. Bấm phím ⚙️ Settings / Input</text>
                <text x="0" y="45" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">2. Chọn menu Ứng dụng (Apps)</text>
                <text x="0" y="70" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">3. Tìm 'Android TV Home'</text>
                <text x="0" y="95" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--ikea-blue)">4. Bấm nút [ BẬT / ENABLE ]</text>
              </g>
              <!-- Remote Icon with Highlighted Gear -->
              <g transform="translate(130, 175)">
                <circle cx="35" cy="35" r="28" fill="var(--svg-accent-yellow)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="35" y="43" font-family="sans-serif" font-weight="900" font-size="24" text-anchor="middle">⚙️</text>
              </g>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="50" y="340" width="700" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="70" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">adb shell pm enable com.google.android.apps.tv.launcherx</text>
          </svg>
        `
      },
      {
        id: "fix-step-2",
        stepNumber: 2,
        title: "Khắc Phục Video 4K Bị Giật Hình Hoặc Lệch Tiếng (AV1 sang VP9)",
        desc: "Hiện tượng video 4K phát bị khựng, nhấp nháy hoặc âm thanh đi trước hình ảnh thường do chip TV cũ bị quá tải 100% khi giải mã định dạng AV1. Chuyển sang VP9 sẽ giải quyết triệt để.",
        details: [
          "Nguyên nhân cốt lõi: Bộ giải mã phần mềm AV1 đòi hỏi năng lực CPU cực mạnh. Các chip MediaTek cũ hoặc Mi Box S không có phần cứng giải mã AV1 nên CPU bị nghẽn 100%.",
          "Cách xử lý trên SmartTube (Android TV):",
          "  • Mở SmartTube → Cài đặt → 'Bộ phát video' → 'Định dạng video'.",
          "  • Chọn 'Ưu tiên VP9' (Force VP9) và TẮT tùy chọn AV1.",
          "Cách xử lý trên TizenTube (Samsung):",
          "  • Khi video đang phát, bấm nút xuống trên remote để mở thanh điều khiển.",
          "  • Vào biểu tượng Cài đặt bánh răng → Chất lượng video → Chọn luồng có nhãn 'VP9 4K'.",
          "Khắc phục rung giật khi lia máy (Judder effect): Bật tính năng 'Auto Frame Rate' (AFR) với độ trễ 500ms để tần số quét màn hình TV tự động khớp với 24fps của phim điện ảnh."
        ],
        command: "SmartTube Settings -> Video Formats -> Force VP9 (Disable AV1)",
        actionGlyph: "FORCE VP9 60FPS",
        tip: "VP9 là codec chuẩn của YouTube được tối ưu hóa phần cứng trên 99% các dòng Smart TV sản xuất từ năm 2016 đến nay.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Codec Comparison: AV1 (100% CPU Lag) vs VP9 (Smooth Hardware Decode) -->
            <!-- Left: AV1 Overload -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--ikea-danger-bg)" stroke="var(--ikea-danger)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="var(--ikea-danger)" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">❌ AV1 CODEC: NGHẼN CPU 100%</text>
              <g transform="translate(25, 60)">
                <text x="0" y="25" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• CPU TV: <tspan fill="#DC2626" font-weight="900">100% QUÁ TẢI</tspan></text>
                <text x="0" y="55" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• Khung hình: Rơi rụng (Drop frames)</text>
                <text x="0" y="85" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• Âm thanh: Tiếng đi trước hình</text>
                <text x="0" y="115" font-family="sans-serif" font-weight="700" font-size="13" fill="#DC2626">• Hiện tượng: Giật lag liên tục</text>
              </g>
              <!-- Stutter Loading Spinner -->
              <g transform="translate(130, 195)">
                <circle cx="25" cy="25" r="22" fill="none" stroke="#DC2626" stroke-width="5" stroke-dasharray="15 10" />
              </g>
            </g>
            <!-- Right: VP9 Hardware Smooth -->
            <g transform="translate(430, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--ikea-success-bg)" stroke="var(--ikea-success)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="40" rx="8" fill="var(--ikea-success)" />
              <text x="155" y="26" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">✔️ FORCE VP9: MƯỢT MÀ 4K 60FPS</text>
              <g transform="translate(25, 60)">
                <text x="0" y="25" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• CPU TV: <tspan fill="var(--ikea-success)" font-weight="900">DƯỚI 30% MÁT MẺ</tspan></text>
                <text x="0" y="55" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• Giải mã: Phần cứng chuyên dụng</text>
                <text x="0" y="85" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--svg-stroke)">• Đồng bộ: Hình và tiếng chuẩn xác</text>
                <text x="0" y="115" font-family="sans-serif" font-weight="700" font-size="13" fill="var(--ikea-success)">• Trải nghiệm: 4K 60fps mượt mà</text>
              </g>
              <!-- 60FPS Smooth Badge -->
              <g transform="translate(95, 195)">
                <rect x="0" y="0" width="120" height="40" rx="6" fill="var(--ikea-success)" />
                <text x="60" y="26" font-family="sans-serif" font-weight="900" font-size="15" text-anchor="middle" fill="#FFFFFF">60 FPS ⚡</text>
              </g>
            </g>
            <!-- Bottom Key Takeaway -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="375" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">Cài đặt SmartTube: Bộ phát video → Định dạng video → Ưu tiên VP9 (Force VP9)</text>
          </svg>
        `
      },
      {
        id: "fix-step-3",
        stepNumber: 3,
        title: "Xử Lý Lỗi ADB 'unauthorized' & Cố Định Địa Chỉ IP Tĩnh",
        desc: "Khắc phục triệt để lỗi kết nối ADB bị từ chối bằng cách thu hồi quyền và cấp lại trên TV, đồng thời thiết lập địa chỉ IP tĩnh để IP của TV không bị thay đổi mỗi khi khởi động lại router.",
        details: [
          "Xử lý lỗi ADB báo 'unauthorized':",
          "  1. Trên máy tính chạy lệnh ngắt dịch vụ: `adb kill-server`.",
          "  2. Trên TV: Vào Cài đặt → Tùy chọn nhà phát triển → Chọn 'Thu hồi quyền cấp phép gỡ lỗi USB' (Revoke USB debugging authorizations) → Chọn OK.",
          "  3. Trên máy tính gõ lại: `adb connect <IP_TV>:5555`.",
          "  4. Nhìn lên màn hình TV: Tích chọn vào ô vuông '[✓] Luôn cho phép từ máy tính này' (Always allow from this computer) và bấm nút 'OK'.",
          "Cố định địa chỉ IP tĩnh (Static IP):",
          "  • Vào Cài đặt TV → Mạng & Internet → Chọn Wi-Fi đang kết nối → Cài đặt IP.",
          "  • Đổi từ [DHCP] sang [Tĩnh / Static]: Đặt IP cố định (ví dụ: `192.168.1.88`), Gateway `192.168.1.1`, Độ dài tiền tố `24`, DNS 1 `8.8.8.8`."
        ],
        command: "adb kill-server\nadb connect 192.168.1.88:5555",
        actionGlyph: "STATIC IP: 192.168.1.88",
        tip: "Đặt đuôi IP cao (ví dụ .88 hoặc .99) để tránh bị router cấp trùng cho điện thoại hay thiết bị khác trong nhà.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- TV Screen with Allow USB Debugging Dialog -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="380" height="260" rx="12" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="3" />
              <rect x="15" y="15" width="350" height="35" rx="4" fill="#334155" />
              <text x="35" y="38" font-family="sans-serif" font-weight="900" font-size="13" fill="#FFFFFF">Cho phép gỡ lỗi USB?</text>
              <g transform="translate(30, 70)">
                <text x="0" y="20" font-family="sans-serif" font-weight="600" font-size="12" fill="var(--svg-stroke)">Khóa vân tay RSA của máy tính:</text>
                <text x="0" y="40" font-family="monospace" font-weight="700" font-size="11" fill="var(--ikea-ink-secondary)">SHA256: 4F:8A:1C:9B:3E...</text>
                <!-- Checkbox Highlighted -->
                <g transform="translate(0, 65)">
                  <rect x="0" y="0" width="22" height="22" rx="4" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="2" />
                  <path d="M 4 11 L 9 16 L 18 6" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
                  <text x="32" y="17" font-family="sans-serif" font-weight="800" font-size="13" fill="var(--svg-stroke)">Luôn cho phép từ máy tính này</text>
                </g>
                <!-- OK Button -->
                <g transform="translate(200, 115)">
                  <rect x="0" y="0" width="85" height="35" rx="6" fill="var(--ikea-blue)" stroke="var(--svg-stroke)" stroke-width="1.5" />
                  <text x="42" y="23" font-family="sans-serif" font-weight="900" font-size="14" text-anchor="middle" fill="#FFFFFF">OK</text>
                </g>
              </g>
              <text x="190" y="295" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">TÍCH CHỌN 'LUÔN CHO PHÉP' TRÊN TIVI</text>
            </g>
            <!-- Right: Static IP Configuration Card -->
            <g transform="translate(480, 45)">
              <rect x="0" y="0" width="260" height="260" rx="12" fill="var(--ikea-blue-light)" stroke="var(--ikea-blue)" stroke-width="2.5" />
              <rect x="15" y="15" width="230" height="35" rx="4" fill="var(--ikea-blue)" />
              <text x="130" y="38" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">CẤU HÌNH IP TĨNH (STATIC)</text>
              <g transform="translate(25, 75)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">IP Type: <tspan font-weight="900" fill="var(--ikea-blue)">STATIC</tspan></text>
                <text x="0" y="45" font-family="monospace" font-weight="800" font-size="12" fill="var(--svg-stroke)">IP: 192.168.1.88</text>
                <text x="0" y="70" font-family="monospace" font-weight="800" font-size="12" fill="var(--svg-stroke)">Gateway: 192.168.1.1</text>
                <text x="0" y="95" font-family="monospace" font-weight="800" font-size="12" fill="var(--svg-stroke)">Prefix: 24</text>
                <text x="0" y="120" font-family="monospace" font-weight="800" font-size="12" fill="var(--svg-stroke)">DNS 1: 8.8.8.8</text>
              </g>
              <text x="130" y="295" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="var(--svg-stroke)">KHÔNG BAO GIỜ BỊ ĐỔI IP</text>
            </g>
            <!-- Bottom Instruction Box -->
            <rect x="60" y="350" width="680" height="55" rx="8" fill="var(--ikea-code-bg)" stroke="var(--ikea-border)" stroke-width="2" />
            <text x="80" y="383" font-family="monospace" font-weight="700" font-size="14" fill="var(--ikea-code-text)">adb kill-server &amp;&amp; adb connect 192.168.1.88:5555</text>
          </svg>
        `
      },
      {
        id: "fix-step-4",
        stepNumber: 4,
        title: "Cứu Hộ Khôi Phục Cài Đặt Gốc Xuất Xưởng (Hardware Reset)",
        desc: "Trong trường hợp hy hữu TV bị treo logo hoặc xung đột phần mềm nặng không thể vào màn hình chính, sử dụng phương pháp cưỡng bức khôi phục xuất xưởng bằng phím cứng vật lý trên thân TV.",
        details: [
          "Sony BRAVIA (Phím cứng sau lưng TV):",
          "  • Rút phích cắm điện TV ra khỏi ổ cắm tường.",
          "  • Nhấn và GIỮ CÙNG LÚC 2 PHÍM: Phím Nguồn (Power) và Phím Giảm âm lượng (Vol -) ở phía sau lưng TV.",
          "  • Tiếp tục giữ chặt 2 phím và cắm phích điện lại. Giữ cho đến khi đèn LED mặt trước chuyển sang MÀU XANH LÁ CÂY (khoảng 10-30 giây) rồi thả tay. TV sẽ tự xóa trắng và vào màn hình cài đặt như mới.",
          "TCL (Nút nguồn cạnh đáy TV):",
          "  • Rút điện TV. Nhấn giữ nút nguồn ở cạnh đáy TV, cắm điện lại, giữ 10-15 giây cho đến khi hiện màn hình Android Recovery → Chọn 'Wipe data / factory reset'.",
          "Samsung: Cài đặt → Hỗ trợ → Tự chẩn đoán (hoặc Cài đặt chung & Quyền riêng tư) → Đặt lại (Mã PIN mặc định: `0000`).",
          "LG: Cài đặt → Tất cả cài đặt → Cài đặt chung → Hệ thống → Đặt lại về cài đặt ban đầu."
        ],
        actionGlyph: "HARDWARE FACTORY RESET",
        warning: "Khôi phục cài đặt gốc sẽ xóa sạch toàn bộ ứng dụng và tài khoản đã đăng nhập, đưa TV về trạng thái lúc mới mở hộp.",
        svg: `
          <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="ikea-svg">
            <rect x="10" y="10" width="780" height="430" rx="16" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
            <!-- Brand 1: Sony Bravia Hardware Buttons -->
            <g transform="translate(60, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="38" rx="8" fill="#1E293B" />
              <text x="155" y="25" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">SONY BRAVIA (PHÍM CỨNG SAU LƯNG)</text>
              <g transform="translate(20, 55)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">1. Rút phích cắm điện TV</text>
                <text x="0" y="45" font-family="sans-serif" font-weight="800" font-size="12" fill="#DC2626">2. Giữ [ Power ] + [ Volume (-) ]</text>
                <text x="0" y="70" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">3. Cắm điện lại, giữ 10-30 giây</text>
                <text x="0" y="95" font-family="sans-serif" font-weight="800" font-size="12" fill="var(--ikea-success)">4. Thả tay khi đèn LED XANH LÁ CÂY</text>
              </g>
              <!-- LED Indicator Green -->
              <g transform="translate(130, 190)">
                <circle cx="25" cy="25" r="18" fill="var(--ikea-success)" stroke="var(--svg-stroke)" stroke-width="2" />
                <text x="25" y="55" font-family="sans-serif" font-weight="900" font-size="10" text-anchor="middle" fill="var(--ikea-success)">GREEN LED</text>
              </g>
            </g>
            <!-- Brand 2: TCL Hardware Button -->
            <g transform="translate(430, 45)">
              <rect x="0" y="0" width="310" height="260" rx="10" fill="var(--svg-fill-white)" stroke="var(--svg-stroke)" stroke-width="2.5" />
              <rect x="0" y="0" width="310" height="38" rx="8" fill="#1E293B" />
              <text x="155" y="25" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle" fill="#FFFFFF">TCL / SAMSUNG / LG PIN RESET</text>
              <g transform="translate(20, 55)">
                <text x="0" y="20" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">• TCL: Giữ nút nguồn đáy TV khi cắm điện</text>
                <text x="0" y="42" font-family="monospace" font-size="11" fill="var(--ikea-ink-secondary)">Vào Recovery -&gt; Wipe data / reset</text>
                <text x="0" y="70" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">• Samsung: PIN Đặt lại: <tspan font-family="monospace" font-weight="900" fill="var(--ikea-blue)">0000</tspan></text>
                <text x="0" y="95" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">• TCL Menu: PIN Mặc định: <tspan font-family="monospace" font-weight="900" fill="var(--ikea-blue)">1234</tspan></text>
                <text x="0" y="120" font-family="sans-serif" font-weight="700" font-size="12" fill="var(--svg-stroke)">• LG: Cài đặt chung -&gt; Đặt lại ban đầu</text>
              </g>
              <!-- Padlock PIN Badge -->
              <g transform="translate(95, 195)">
                <rect x="0" y="0" width="120" height="40" rx="6" fill="var(--ikea-blue)" />
                <text x="60" y="26" font-family="monospace" font-weight="900" font-size="16" text-anchor="middle" fill="#FFFFFF">PIN: 0000</text>
              </g>
            </g>
            <!-- Bottom Key Takeaway -->
            <rect x="60" y="340" width="680" height="60" rx="8" fill="var(--ikea-danger-bg)" stroke="var(--ikea-danger)" stroke-width="2" />
            <text x="400" y="375" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle" fill="#DC2626">⚠️ CẢNH BÁO: Khôi phục xuất xưởng sẽ đưa TV về như lúc mới mua, chỉ dùng khi cứu hộ khẩn cấp.</text>
          </svg>
        `
      }
    ]
  }
};

// Freeze the data store to protect against mutations
Object.freeze(GUIDE_DATA);
