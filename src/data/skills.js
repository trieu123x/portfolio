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
      'Prompt Engineering',
      'Vector Search (Cosine)',
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
    ],
  },
  {
    id: 'data-db',
    title: 'Data & DB',
    items: [
      'pgvector (PostgreSQL)',
      'Supabase',
      'Prisma',
      'NumPy / Pandas',
      'OpenCV',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      'Git / GitHub',
      'Docker',
      'Postman',
      'Linux',
      'Kaggle GPU',
      'SSE (Streaming)',
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
    ],
  },
];

export default skills;
