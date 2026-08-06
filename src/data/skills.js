/**
 * SKILLS DATA
 * Thêm / sửa / xoá nhóm kỹ năng tại đây.
 * Mỗi object gồm:
 *   id    – unique key
 *   title – tên nhóm hiển thị
 *   items – mảng tên skill
 */
const skills = [
  {
    id: 'ai-ml',
    title: 'AI & ML',
    items: [
      'LLMs (Gemini, GPT)',
      'RAG Systems',
      'Hybrid RAG (Dense + Sparse)',
      'Prompt Engineering',
      'Vector Search (HNSW / Cosine)',
      'Reranking (Cross-Encoder)',
      'Intent Classification',
      'Reciprocal Rank Fusion (RRF)',
      'Embedding Versioning',
      'YOLOv8',
      'ResNet50',
      'HuggingFace Transformers',
      'Sentence Transformers',
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    items: [
      'PyTorch',
      'FastAPI',
      'Flask',
      'ReactJS',
      'Next.js',
      'Node.js / Express',
      'Ultralytics',
      'SQLAlchemy / Alembic',
      'TanStack Query',
      'Zustand',
    ],
  },
  {
    id: 'data-db',
    title: 'Data & DB',
    items: [
      'pgvector HNSW (PostgreSQL)',
      'PostgreSQL FTS / GIN Index',
      'Redis (Queue & Cache)',
      'Supabase',
      'Prisma',
      'NumPy / Pandas',
      'OpenCV',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    items: [
      'Git / GitHub',
      'Docker / Docker Compose',
      'GitHub Actions (CI/CD)',
      'Postman',
      'Linux',
      'Kaggle GPU',
      'SSE (Streaming)',
      'Celery Worker',
      'NVIDIA CUDA',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    items: [
      'Python (Advanced)',
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },
  {
    id: 'model-eval',
    title: 'Model Evaluation',
    items: [
      'mAP, F1-Score',
      'Precision / Recall',
      'Confusion Matrix',
      'Train/Val Accuracy',
      'Recall@K / MRR / NDCG',
      'Faithfulness & Citation Coverage',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    items: [
      'Multi-Tenant SaaS',
      'Microservices',
      'RBAC & ACL',
      'Audit Logging',
      'Workflow Approval',
      'API-first Design',
    ],
  },
];

export default skills;
