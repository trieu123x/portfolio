/**
 * TRANSLATIONS – EN & VI
 * Thêm / sửa nội dung dịch tại đây.
 */

const translations = {
  en: {
    /* ── Nav ── */
    nav: {
      home:     '#home',
      projects: '#projects',
      skills:   '#skills',
      about:    '#about-me',
      contact:  '#contacts',
    },

    /* ── Hero ── */
    hero: {
      roles: [
        'AI Engineer & ML Developer',
        'RAG Systems Builder',
        'Computer Vision Developer',
        'FastAPI & Python Dev',
      ],
      greeting: 'is a',
      desc1:    '// Passionate about Generative AI',
      desc2:    '// Building RAG systems & Computer Vision',
      contactBtn: 'Contact me !!',
      githubBtn:  'my-git',
      status:     'Currently working on AI projects',
      workingOn:  'Currently working on\n  K-Hospital AI',
    },

    /* ── Quote ── */
    quote: {
      text:   "I only deploy once, but I've been building for ten years.",
      author: '— Đinh Hải Triều',
    },

    /* ── Projects ── */
    projects: {
      title:     'projects',
      viewAll:   'View all',
      live:      'Live',
      code:      'Cached',
      comingSoon: 'Coming soon',
      items: [
        {
          title: 'K-Hospital – MediCare',
          desc:  'Full-stack hospital appointment platform with an end-to-end RAG pipeline: query rewriting, hybrid vector search (pgvector + keyword), and real-time LLM streaming with Gemini fallback handling.',
        },
        {
          title: 'Garbage Classification System',
          desc:  'Real-time 12-class garbage detection & classification. Two-stage pipeline: YOLOv8 for detection + ResNet50 for classification. Achieved mAP@50: 0.83, accuracy: 0.84.',
        },
        {
          title: 'AI Pattern Detection',
          desc:  'Zero-shot technical symbol detector for engineering drawings. Uses multi-scale × multi-angle template matching (TM_CCOEFF_NORMED) + two-level NMS. No training data required — just 1 template image. Includes Gradio UI with spotlight visualization.',
        },
        {
          title: 'Exclusive – E-Commerce Platform',
          desc:  'Full-stack e-commerce with dynamic sales pricing, inventory locking, COD/VNPay/Stripe payments, admin revenue analytics (monthly/weekly/daily stacked charts), wishlist, reviews, and VIP program.',
        },
        {
          title: 'Premium Weather Dashboard',
          desc:  'Sophisticated weather app with realistic Framer Motion animations (snow, rain, storms, sun rays), glassmorphism UI, hierarchical country→city search, pinned favorites, and full EN/VI i18n support.',
        },
        {
          title: 'Next Project',
          desc:  'Always building something new. Stay tuned for the next AI-powered project coming soon.',
        },
      ],
    },

    /* ── Skills ── */
    skills: {
      title: 'skills',
      groups: [
        { title: 'AI / ML' },
        { title: 'Languages' },
        { title: 'Frameworks & Tools' },
        { title: 'Databases & Infra' },
      ],
    },

    /* ── About ── */
    about: {
      title:    'about-me',
      funFacts: 'my-fun-facts',
      readMore: 'Read more',
      para1:    "Hello! I'm",
      para1b:   ', a IT student at',
      para1c:   'Posts and Telecommunications Institute of Technology (PTIT)',
      para1d:   ', Hanoi.',
      para2a:   "I'm passionate about",
      para2b:   'and',
      para2c:   '. My focus is on building scalable AI solutions — from RAG pipelines to real-time object detection systems.',
      para3:    'Currently seeking an',
      para3b:   'position to leverage my experience and contribute to production-grade AI systems while refining skills in model optimization and deployment.',
      aiIntern: 'AI Intern',
      genAI:    'Generative AI',
      cv:       'Computer Vision',
      facts: [
        'I debug problems before writing solutions',
        'I optimize before I scale',
        'I prefer architecture over quick hacks',
        'I build systems, not scripts',
        'I ship only when it\'s solid',
      ],
    },

    /* ── Contact ── */
    contact: {
      title:     'contacts',
      cardTitle: 'Message me here',
      intro1:    "I'm interested in freelance opportunities and internship positions.",
      intro2:    "However, if you have other requests or questions, don't hesitate to contact me!",
    },

    /* ── Footer ── */
    footer: {
      media:     'Media',
      copyright: '© 2025 Made by',
    },
  },

  /* ════════════════════════════════════════════ */
  vi: {
    /* ── Nav ── */
    nav: {
      home:     '#trang chủ',
      projects: '#dự án',
      skills:   '#kỹ năng',
      about:    '#về tôi',
      contact:  '#liên hệ',
    },

    /* ── Hero ── */
    hero: {
      roles: [
        'Kỹ sư AI & Lập trình viên ML',
        'Xây dựng hệ thống RAG',
        'Lập trình viên Computer Vision',
        'Lập trình viên FastAPI & Python',
      ],
      greeting: 'là một',
      desc1:    '// Đam mê với Generative AI',
      desc2:    '// Xây dựng RAG & Computer Vision',
      contactBtn: 'Liên hệ ngay !!',
      githubBtn:  'GitHub của tôi',
      status:     'Đang làm việc trên các dự án AI',
      workingOn:  'Đang phát triển\n  K-Hospital AI',
    },

    /* ── Quote ── */
    quote: {
      text:   'Một lần triển khai — mười năm chuẩn bị.',
      author: '— Đinh Hải Triều',
    },

    /* ── Projects ── */
    projects: {
      title:      'dự-án',
      viewAll:    'Xem tất cả',
      live:       'Demo',
      code:       'Mã nguồn',
      comingSoon: 'Sắp ra mắt',
      items: [
        {
          title: 'K-Hospital – MediCare',
          desc:  'Nền tảng đặt lịch khám bệnh full-stack với pipeline RAG: viết lại truy vấn, tìm kiếm vector lai (pgvector + từ khóa), và streaming LLM thời gian thực với xử lý fallback Gemini.',
        },
        {
          title: 'Phân loại rác thải',
          desc:  'Phát hiện & phân loại rác thải thời gian thực 12 lớp. Pipeline 2 tầng: YOLOv8 để phát hiện + ResNet50 để phân loại. Đạt mAP@50: 0.83, độ chính xác: 0.84.',
        },
        {
          title: 'Phát hiện mẫu AI',
          desc:  'Bộ phát hiện ký hiệu kỹ thuật zero-shot cho bản vẽ kỹ thuật. Sử dụng template matching đa tỉ lệ × đa góc (TM_CCOEFF_NORMED) + NMS 2 tầng. Không cần dữ liệu huấn luyện — chỉ cần 1 ảnh mẫu. Giao diện Gradio với spotlight visualization.',
        },
        {
          title: 'Exclusive – Nền tảng Thương mại Điện tử',
          desc:  'E-commerce full-stack với định giá khuyến mãi động, khóa hàng tồn, thanh toán COD/VNPay/Stripe, dashboard phân tích doanh thu admin (biểu đồ tháng/tuần/ngày), danh sách yêu thích, đánh giá sản phẩm, và chương trình VIP.',
        },
        {
          title: 'Weather Dashboard cao cấp',
          desc:  'Ứng dụng thời tiết phù hợp với animation Framer Motion chân thực (tuyết, mưa, bão, nắng), giao diện glassmorphism, tìm kiếm phân cấp quốc gia→thành phố, địa điểm yêu thích, và hỗ trợ đa ngôn ngữ EN/VI.',
        },
        {
          title: 'Dự án tiếp theo',
          desc:  'Luôn luôn xây dựng điều gì đó mới. Hãy đón chờ dự án AI tiếp theo sắp ra mắt.',
        },
      ],
    },

    /* ── Skills ── */
    skills: {
      title: 'kỹ-năng',
      groups: [
        { title: 'AI / ML' },
        { title: 'Ngôn ngữ lập trình' },
        { title: 'Frameworks & Công cụ' },
        { title: 'Cơ sở dữ liệu & Hạ tầng' },
      ],
    },

    /* ── About ── */
    about: {
      title:    'về-tôi',
      funFacts: 'sự-thật-thú-vị',
      readMore: 'Đọc thêm',
      para1:    'Xin chào! Tôi là',
      para1b:   ', sinh viên năm 3 ngành CNTT tại',
      para1c:   'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
      para1d:   ', Hà Nội.',
      para2a:   'Tôi đam mê với',
      para2b:   'và',
      para2c:   '. Tập trung xây dựng giải pháp AI có thể mở rộng — từ pipeline RAG đến hệ thống phát hiện đối tượng thời gian thực.',
      para3:    'Hiện đang tìm kiếm vị trí',
      para3b:   'để tận dụng kinh nghiệm và đóng góp vào hệ thống AI production trong khi trau dồi kỹ năng tối ưu hóa và triển khai mô hình.',
      aiIntern: 'AI Intern',
      genAI:    'Generative AI',
      cv:       'Computer Vision',
      facts: [
        'Tôi debug vấn đề trước khi viết giải pháp',
        'Tôi tối ưu trước khi mở rộng quy mô',
        'Tôi ưu tiên kiến trúc hơn giải pháp tạm bợ',
        'Tôi xây dựng hệ thống, không chỉ script',
        'Tôi chỉ ship khi mọi thứ đã thực sự chắc chắn',
      ],
    },

    /* ── Contact ── */
    contact: {
      title:     'liên-hệ',
      cardTitle: 'Nhắn tin cho tôi',
      intro1:    'Tôi quan tâm đến các cơ hội freelance và vị trí thực tập.',
      intro2:    'Tuy nhiên, nếu bạn có yêu cầu hoặc câu hỏi khác, đừng ngại liên hệ với tôi!',
    },

    /* ── Footer ── */
    footer: {
      media:     'Mạng xã hội',
      copyright: '© 2025 Tạo bởi',
    },
  },
};

export default translations;
