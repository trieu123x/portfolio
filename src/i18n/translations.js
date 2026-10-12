/**
 * TRANSLATIONS – EN & VI
 * Thêm / sửa nội dung dịch tại đây.
 */

const translations = {
  en: {
    /* ── Nav ── */
    nav: {
      home:       '#home',
      experience: '#experience',
      projects:   '#projects',
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
      workingOn:  'Currently working on\n  AI-workforce system',
    },

    /* ── Quote ── */
    quote: {
      text:   "I only deploy once, but I've been building for ten years.",
      author: '— Đinh Hải Triều',
    },

    /* ── Experience ── */
    experience: {
      title: 'experience',
      items: [
        {
          company:  'Yopaz',
          role:     'AI Engineer Intern',
          team:     'R&D Team',
          period:   'Jul 2026 – Oct 2026',
          location: 'Hanoi, Vietnam',
          summary:  'Yopaz is a software company in Hanoi with a branch in Tokyo, building software for Japanese clients. In the R&D team, I built AI solutions with vision-language models and LLM agents.',
          bullets: [
            'CAD 2D → 3D Mapping: used a VLM (self-hosted vLLM / Gemini / OpenAI) to read dimension and GD&T annotations from rendered DXF drawings, grounding outputs to allow-listed geometry IDs to prevent hallucination',
            'Mapped recognized annotations to STEP 3D features via top-K retrieval and scoring, with schema validation and human review',
            'Marketing Agent: LangGraph agent turning a brief into Facebook / Instagram / Threads posts with hybrid RAG, a fact-check self-refine loop and 2 human-approval steps (interrupt / resume)',
            'Built the Marketing Agent in 5 days with FastAPI + SSE streaming and per-call token cost tracking',
          ],
          tech: ['Python', 'VLM', 'vLLM', 'Gemini', 'OpenAI', 'LangGraph', 'FastAPI', 'RAG', 'pgvector', 'SSE'],
        },
      ],
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
          title: 'AI Workforce – Enterprise Multi-Agent Platform',
          desc:  'Multi-tenant enterprise platform where AI agents (HR, Legal, Finance, Marketing, Knowledge, CEO Assistant) work alongside employees. Each agent runs on its own LangGraph graph with tool permissions, human-in-the-loop approvals, hybrid RAG over company documents, audit logging and AI cost tracking.',
        },
        {
          title: 'Fall Detection – Two-Stage Vision Pipeline',
          desc:  'Video fall detection system. YOLO11s + ByteTrack detects and tracks each person, then an ensemble of SigLIP2 zero-shot and a YOLO11x fall model classifies posture per track, smoothed by majority voting. F1 0.897, recall 0.982 on 900 labeled person crops.',
        },
        {
          title: 'K-Hospital – MediCare',
          desc:  'Full-stack hospital appointment platform with an end-to-end RAG pipeline: query rewriting, hybrid vector search (pgvector + keyword), and real-time LLM streaming with Gemini fallback handling.',
        },
        {
          title: 'Garbage Classification System',
          desc:  'Real-time 12-class garbage detection & classification. Two-stage pipeline: YOLOv8 for detection + ResNet50 for classification. Achieved mAP@50: 0.83, accuracy: 0.84.',
        },
        {
          title: 'License Plate Recognition System',
          desc:  'Two-stage AI pipeline for vehicle license plate detection and optical character recognition (OCR). Uses YOLOv8 for plate localization and a fine-tuned ResNet-50 classifier for character recognition. Includes deskewing logic and Vietnamese license plate syntax rules.',
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
      home:       '#trang chủ',
      experience: '#kinh nghiệm',
      projects:   '#dự án',
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
      workingOn:  'Đang phát triển\n  Hệ thống AI-workforce',
    },


    /* ── Quote ── */
    quote: {
      text:   'Một lần triển khai — mười năm chuẩn bị.',
      author: '— Đinh Hải Triều',
    },

    /* ── Experience ── */
    experience: {
      title: 'kinh-nghiệm',
      items: [
        {
          company:  'Yopaz',
          role:     'Thực tập sinh AI Engineer',
          team:     'Team R&D',
          period:   '07/2026 – 10/2026',
          location: 'Hà Nội, Việt Nam',
          summary:  'Yopaz là công ty phần mềm tại Hà Nội, có chi nhánh ở Tokyo, phát triển phần mềm cho khách hàng Nhật Bản. Trong team R&D, tôi xây dựng các giải pháp AI với mô hình thị giác–ngôn ngữ (VLM) và LLM agent.',
          bullets: [
            'CAD 2D → 3D Mapping: dùng VLM (vLLM tự host / Gemini / OpenAI) đọc kích thước và chú thích GD&T từ bản vẽ DXF đã render, ràng buộc kết quả vào danh sách ID hình học hợp lệ để chống bịa',
            'Map các chú thích nhận diện được sang feature 3D trong file STEP bằng top-K retrieval và chấm điểm, có kiểm tra schema và người duyệt',
            'Marketing Agent: agent LangGraph biến brief thành bài đăng Facebook / Instagram / Threads với hybrid RAG, vòng fact-check tự sửa và 2 bước người duyệt (interrupt / resume)',
            'Xây dựng Marketing Agent trong 5 ngày với FastAPI + SSE streaming và theo dõi chi phí token cho từng lần gọi',
          ],
          tech: ['Python', 'VLM', 'vLLM', 'Gemini', 'OpenAI', 'LangGraph', 'FastAPI', 'RAG', 'pgvector', 'SSE'],
        },
      ],
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
          title: 'AI Workforce – Nền tảng Đa tác tử cho Doanh nghiệp',
          desc:  'Nền tảng doanh nghiệp đa tenant, nơi các AI agent (Nhân sự, Pháp chế, Tài chính, Marketing, Tri thức, Trợ lý CEO) làm việc cùng nhân viên. Mỗi agent chạy trên một graph LangGraph riêng, có phân quyền tool, phê duyệt human-in-the-loop, hybrid RAG trên tài liệu công ty, audit log và theo dõi chi phí AI.',
        },
        {
          title: 'Phát hiện Té ngã – Pipeline Thị giác 2 tầng',
          desc:  'Hệ thống phát hiện té ngã từ video. YOLO11s + ByteTrack phát hiện và theo dõi từng người, sau đó tổ hợp SigLIP2 zero-shot và model té ngã YOLO11x phân loại tư thế trên từng track, làm mượt bằng bỏ phiếu đa số. F1 0.897, recall 0.982 trên 900 ảnh crop người có nhãn.',
        },
        {
          title: 'K-Hospital – MediCare',
          desc:  'Nền tảng đặt lịch khám bệnh full-stack với pipeline RAG: viết lại truy vấn, tìm kiếm vector lai (pgvector + từ khóa), và streaming LLM thời gian thực với xử lý fallback Gemini.',
        },
        {
          title: 'Phân loại rác thải',
          desc:  'Phát hiện & phân loại rác thải thời gian thực 12 lớp. Pipeline 2 tầng: YOLOv8 để phát hiện + ResNet50 để phân loại. Đạt mAP@50: 0.83, độ chính xác: 0.84.',
        },
        {
          title: 'Nhận diện Biển số xe',
          desc:  'Hệ thống AI hai giai đoạn để phát hiện biển số xe và nhận diện ký tự quang học (OCR). Sử dụng YOLOv8 để định vị biển số và bộ phân loại ResNet-50 được fine-tune để nhận diện ký tự. Tích hợp thuật toán xoay thẳng biển số và áp dụng luật cấu trúc biển số Việt Nam.',
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
