/**
 * PROJECTS DATA
 * images[0] = thumbnail hiển thị trên card
 * images[1..] = gallery trong detail modal
 * detail.role / detail.highlights / detail.bullets dùng cho modal
 */

/* ── Image imports ── */
import khImg1 from '../assets/k-hospital1.png';
import khImg2 from '../assets/k-hospital2.png';
import khImg3 from '../assets/k-hospital3.png';
import khImg4 from '../assets/k-hospital4.png';
import khImg5 from '../assets/k-hospital5.png';

import gbImg1 from '../assets/garbage1.png';
import gbImg2 from '../assets/garbage2.png';
import gbImg3 from '../assets/garbage3.png';
import gbImg4 from '../assets/garbage4.png';

import pdImg1 from '../assets/pattern-detect1.webp';

import exImg1 from '../assets/exclusive.png';
import exImg2 from '../assets/exclusive2.png';
import exImg3 from '../assets/exclusive3.png';

import weatherImg1 from '../assets/weather.png';
import lpImg1 from '../assets/license-plate.jpg';
import awImg1 from '../assets/ai-workforce-ceo.png';
import awImg2 from '../assets/ai-workforce-rag-chat.png';
import awImg3 from '../assets/ai-workforce-legal.png';
import awImg4 from '../assets/ai-workforce-finance.png';
import awImg5 from '../assets/ai-workforce-approvals.png';
import awImg6 from '../assets/ai-workforce-knowledge.png';
import awImg7 from '../assets/ai-workforce-rbac.png';

const projects = [
  {
    id: 'ai-workforce',
    title: 'AI Workforce – Enterprise Multi-Agent Platform',
    desc: 'Multi-tenant enterprise platform where AI agents (HR, Legal, Finance, Marketing, Knowledge, CEO Assistant) work alongside employees. Each agent runs on its own LangGraph graph with tool permissions, human-in-the-loop approvals, hybrid RAG over company documents, audit logging and AI cost tracking.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'Docker', 'RAG', 'TypeScript'],
    icon: '🤖',
    liveUrl: null,
    codeUrl: 'https://github.com/trieu123x/AI-workforce',
    wip: false,
    images: [awImg1, awImg2, awImg3, awImg4, awImg5, awImg6, awImg7],
    detail: {
      role: 'Solo Project – Full-Stack AI Engineer',
      highlights: [
        'Built 6 domain agents (HR, Legal, Finance, Marketing, Knowledge, CEO Assistant), each with its own LangGraph graph, conversation memory, streaming and fallback to the standard flow',
        'Legal agent: contract review pipeline with risk-clause analysis, approval routing and revised contract file generation',
        'Finance agent: internal ledger, Excel/CSV import & analysis, draft journal entries with threshold-based approval and in-chat charts; blocks fabricated figures',
        'CEO Assistant: morning executive briefing, automatic alerts, cross-department metrics, approval inbox and task assignment & tracking',
        'Hybrid RAG pipeline: PDF/DOCX → Markdown, chunk position metadata + parent context, pgvector HNSW + PostgreSQL FTS → Reciprocal Rank Fusion → cross-encoder reranking',
        'Tool gateway with a single tool-contract registry: permissions by job position, per-agent document scope and per-tenant model selection (OpenAI / Gemini)',
        'Separated AI Service (stateless, no DB credentials) from Backend (auth, ACL, approval, audit, cost metering) via internal HTTP',
        'CI/CD with GitHub Actions: clean DB migration, backend pytest, frontend lint/build, Docker image validation',
      ],
      stack: {
        AI: ['LangGraph', 'LangChain', 'Multi-Agent', 'Tool Calling', 'RAG Pipeline', 'pgvector HNSW', 'Hybrid Search', 'RRF', 'Gemini Embedding', 'Jina / BGE Reranker', 'OpenAI / Gemini'],
        Backend: ['Python 3.11', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'PostgreSQL', 'Redis', 'Celery Worker'],
        Frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand'],
        Infrastructure: ['Docker Compose', 'GitHub Actions', 'NVIDIA GPU / CUDA', 'GitHub Container Registry'],
      },
    },
  },
  {
    id: 'fall-detection',
    title: 'Fall Detection – Two-Stage Vision Pipeline',
    desc: 'Video fall detection system. YOLO11s + ByteTrack detects and tracks each person, then an ensemble of SigLIP2 zero-shot and a YOLO11x fall model classifies posture per track, smoothed by majority voting. F1 0.897, recall 0.982 on 900 labeled person crops.',
    tech: ['Python', 'PyTorch', 'YOLO11', 'YOLOv8', 'ByteTrack', 'SigLIP2', 'Hugging Face', 'OpenCV'],
    icon: '🚨',
    liveUrl: null,
    codeUrl: 'https://github.com/trieu123x/fall-detection',
    wip: false,
    images: [],
    detail: {
      role: 'Course Project (IoT Applications) – Computer Vision',
      highlights: [
        'Fine-tuned a YOLOv8n baseline on the Roboflow fall dataset (fall / non-fall): mAP@50 0.983, mAP@50-95 0.722, precision 0.975, recall 0.971',
        'Replaced the single-stage detector with a two-stage pipeline: YOLO11s person detection + ByteTrack tracking → posture classification on each track',
        'Benchmarked 7 Stage-2 candidates (SigLIP2 zero-shot, YOLO11x / YOLO11s / YOLO11n fall models, YOLO11s-pose + keypoint rules, ViT, VideoMAE) on 900 labeled person crops',
        'OR-ensemble of SigLIP2 zero-shot + YOLO11x reached F1 0.897 with recall 0.982 (VideoMAE baseline: F1 0.393)',
        'SigLIP2 zero-shot over 6 postures (lying, falling, standing, walking, sitting, bending) using prompt ensembles',
        'Square letterbox crops keep the person\'s aspect ratio, the key cue separating lying from standing',
        'Temporal smoothing: re-classify every N frames and majority-vote over the last 5 results per track ID to suppress single-frame noise',
      ],
      stack: {
        'Computer Vision': ['YOLO11', 'YOLOv8', 'ByteTrack', 'OpenCV'],
        'Vision-Language': ['SigLIP2 (zero-shot)', 'ViT', 'VideoMAE', 'YOLO11-pose'],
        'ML Framework': ['PyTorch', 'Ultralytics', 'Hugging Face Transformers', 'Kaggle'],
      },
    },
  },
  {
    id: 'k-hospital',
    title: 'K-Hospital – MediCare',
    desc: 'Full-stack hospital appointment platform with an end-to-end RAG pipeline: query rewriting, hybrid vector search (pgvector + keyword), and real-time LLM streaming with Gemini fallback handling.',
    tech: ['Python', 'FastAPI', 'Gemini', 'pgvector', 'Next.js', 'Node.js', 'Prisma'],
    icon: '🏥',
    liveUrl: 'https://k-hospital.vercel.app',
    codeUrl: 'https://github.com/trieu123x/k-hospital',
    wip: false,
    images: [khImg1, khImg2, khImg3, khImg4, khImg5],
    detail: {
      role: 'AI / Backend Engineer (Team project)',
      highlights: [
        'Designed and implemented the full RAG pipeline — from query rewriting to answer generation',
        'Built hybrid vector search combining pgvector cosine similarity with keyword fallback',
        'Integrated Gemini API with real-time SSE streaming and multi-layer fallback handling',
        'Developed embedding cache using MD5 hashing to reduce redundant Gemini API calls',
        'Created doctor/disease/medicine retrieval with semantic similarity thresholds',
        'Implemented appointment booking REST API with role-based JWT authorization (FastAPI)',
      ],
      stack: {
        AI: ['Gemini API', 'pgvector', 'RAG Pipeline', 'SSE Streaming', 'Embedding Cache'],
        Backend: ['FastAPI', 'Python', 'PostgreSQL', 'Prisma', 'Node.js'],
        Frontend: ['Next.js', 'React'],
      },
    },
  },
  {
    id: 'garbage-classify',
    title: 'Garbage Classification System',
    desc: 'Real-time 12-class garbage detection & classification. Two-stage pipeline: YOLOv8 for detection + ResNet50 for classification. Achieved mAP@50: 0.86, accuracy: 0.93.',
    tech: ['PyTorch', 'YOLOv8', 'ResNet50', 'Flask', 'OpenCV', 'CUDA'],
    icon: '♻️',
    liveUrl: 'https://huggingface.co/spaces/trieu123x/Garbage-Detection-and-Classification',
    codeUrl: 'https://github.com/trieu123x/Garbage_detect_and_classify',
    wip: false,
    images: [gbImg1, gbImg2, gbImg3, gbImg4],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Trained YOLOv8 on custom dataset for object detection across 12 garbage classes',
        'Fine-tuned ResNet50 for classification stage, achieving 93% validation accuracy',
        'Built two-stage pipeline: YOLO detects bounding boxes → ResNet classifies crop',
        'Deployed as Flask web app with real-time webcam and image upload support',
        'Optimized inference with CUDA acceleration on GPU',
        'Achieved mAP@50 of 0.86 on validation set (precision 0.91, recall 0.84)',
      ],
      stack: {
        'Computer Vision': ['YOLOv8', 'ResNet50', 'OpenCV', 'CUDA'],
        'ML Framework': ['PyTorch', 'Ultralytics'],
        'Deployment': ['Flask', 'Python'],
      },
    },
  },
  {
    id: 'license-plate-detector',
    title: 'License Plate Recognition System',
    desc: 'Two-stage AI pipeline for vehicle license plate detection and optical character recognition (OCR). Uses YOLOv8 for plate localization and a fine-tuned ResNet-50 classifier for character recognition. Includes deskewing logic and Vietnamese license plate syntax rules.',
    tech: ['PyTorch', 'YOLOv8', 'ResNet50', 'OpenCV', 'Gradio', 'Python'],
    icon: '🚗',
    liveUrl: 'https://huggingface.co/spaces/trieu123x/License-plate',
    codeUrl: 'https://huggingface.co/spaces/trieu123x/License-plate/tree/main',
    wip: false,
    images: [lpImg1],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Built a two-stage LPR pipeline: YOLOv8 for plate detection + ResNet-50 for character OCR',
        'Fine-tuned ResNet-50 on character datasets to achieve high OCR accuracy',
        'Implemented plate deskewing logic using line fitting on character centroids',
        'Applied Vietnamese license plate syntax rules (correcting letter/number confusion based on position)',
        'Created a complete pre-processing workflow: adaptive thresholding, border cleaning, and connected component filtering',
        'Deployed as an interactive web demo on Hugging Face Spaces using Gradio',
      ],
      stack: {
        'Computer Vision': ['YOLOv8', 'OpenCV', 'Deskewing', 'Image Processing'],
        'Deep Learning': ['PyTorch', 'ResNet50', 'Transfer Learning'],
        'Deployment': ['Gradio', 'Hugging Face Spaces', 'Python'],
      },
    },
  },
  {
    id: 'ai-pattern-detection',
    title: 'AI Pattern Detection',
    desc: 'Zero-shot technical symbol detector for engineering drawings. Uses multi-scale × multi-angle template matching (TM_CCOEFF_NORMED) + two-level NMS. No training data required — just 1 template image.',
    tech: ['Python', 'OpenCV', 'DINOv2', 'Gradio', 'NumPy', 'PyTorch'],
    icon: '🔍',
    liveUrl: 'https://huggingface.co/spaces/trieu123x/AI-Pattern-Detection',
    codeUrl: 'https://github.com/trieu123x/AI-Pattern-Detection',
    wip: false,
    images: [pdImg1],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Zero-shot detection — works with just 1 template image, no training data required',
        'Multi-scale × multi-angle template matching using TM_CCOEFF_NORMED correlation',
        'Two-level NMS (Non-Maximum Suppression) to eliminate duplicate detections',
        'Spotlight visualization to highlight detected symbols in dense engineering drawings',
        'Gradio UI for easy drag-and-drop template + drawing input',
        'Explored DINOv2 feature embeddings as an alternative detection approach',
      ],
      stack: {
        'Vision': ['OpenCV', 'NumPy', 'Template Matching', 'NMS'],
        'AI / Research': ['DINOv2', 'PyTorch'],
        'UI': ['Gradio', 'Python'],
      },
    },
  },
  {
    id: 'exclusive-ecommerce',
    title: 'Exclusive – E-Commerce Platform',
    desc: 'Full-stack e-commerce with dynamic sales pricing, inventory locking, COD/VNPay/Stripe payments, admin revenue analytics (monthly/weekly/daily charts), wishlist, reviews, and VIP program.',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Stripe', 'VNPay', 'JWT', 'Recharts'],
    icon: '🛒',
    liveUrl: null,
    codeUrl: 'https://github.com/trieu123x/e-commerce-1',
    wip: false,
    images: [exImg1, exImg2, exImg3],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Dynamic sales system: admin creates time-based promotions with discount %, products auto-display sale price',
        'Inventory locking with row-level DB locks to prevent race conditions and overselling',
        'Multi-gateway payment: COD instant confirmation, VNPay redirect flow, Stripe card processing',
        'Admin analytics dashboard with stacked bar charts (monthly/weekly/daily) per payment method',
        'Stock validation pipeline: frontend disables buy button → cart pre-checkout check → backend atomic deduction',
        'VIP program, wishlist, product reviews/ratings, multi-address management',
        '40+ REST API endpoints, 14 database tables, JWT role-based auth',
      ],
      stack: {
        Frontend: ['Next.js 13+', 'React Hooks', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
        Backend: ['Node.js', 'Express.js', 'Sequelize ORM', 'JWT', 'Bcrypt'],
        Database: ['PostgreSQL', 'Migrations'],
        Payments: ['Stripe', 'VNPay', 'COD'],
      },
    },
  },
  {
    id: 'weather-dashboard',
    title: 'Premium Weather Dashboard',
    desc: 'Sophisticated weather app with realistic Framer Motion animations (snow, rain, storms, sun rays), glassmorphism UI, hierarchical country→city search, pinned favorites, and full EN/VI i18n support.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Axios', 'OpenWeatherMap API'],
    icon: '🌦️',
    liveUrl: 'https://weather-app-iota-taupe-16.vercel.app/',
    codeUrl: 'https://github.com/trieu123x/weather-app',
    wip: false,
    images: [weatherImg1],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Custom-built weather animations (snow, rain, storms, sun rays) using Framer Motion at 60fps via GPU acceleration (will-change, translateZ)',
        'Hierarchical search flow: filter by Country first, then City — powered by OpenWeatherMap Geocoding API',
        'Pinned Favorites system with custom hook (useFavorites) and LocalStorage persistence',
        'Dark/Light dynamic theme switching with glassmorphism design system',
        'Context API for global i18n (EN/VI) and favorites state management',
        '5-day forecast with 3-hour interval data and visual trend charts',
        'Optimized SVG rendering and scroll micro-interactions for premium UX',
      ],
      stack: {
        Core: ['React 18', 'Vite'],
        Styling: ['Tailwind CSS', 'Custom CSS (Glassmorphism)'],
        Animation: ['Framer Motion'],
        'Data & API': ['Axios', 'OpenWeatherMap API'],
        'State & Persistence': ['React Context API', 'LocalStorage'],
      },
    },
  },
  {
    id: 'coming-soon',
    title: 'Next Project',
    desc: 'Always building something new. Stay tuned for the next AI-powered project coming soon.',
    tech: ['TBD'],
    icon: '🚀',
    liveUrl: null,
    codeUrl: null,
    wip: true,
    images: [],
    detail: null,
  },
];

export default projects;
