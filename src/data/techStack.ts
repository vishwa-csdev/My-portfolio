import { TechCategory } from '../types';

export const techStackData: TechCategory[] = [
  {
    title: 'Core Systems & Languages',
    subtitle: 'Low-level performance, memory management, and high-level rapid algorithms',
    skills: [
      {
        name: 'C / C++',
        level: 'Expert',
        description: 'Modern C++ (C++17/20), STL, manual memory management, multithreading, SIMD vectorization, CMake build pipelines, and CUDA GPU kernels.',
        tags: ['C++20', 'STL', 'Multithreading', 'Memory Mgmt', 'CMake']
      },
      {
        name: 'Python',
        level: 'Expert',
        description: 'Core language for ML research and backend microservices. AsyncIO, Cython optimizations, NumPy vectorization, OOP design, and scripting.',
        tags: ['AsyncIO', 'NumPy', 'OOP', 'Cython', 'Type Hints']
      }
    ]
  },
  {
    title: 'AI / Machine Learning Stack',
    subtitle: 'Deep neural networks, computer vision, transformers, and model inference',
    skills: [
      {
        name: 'PyTorch & TorchScript',
        level: 'Advanced',
        description: 'Custom neural network architectures, autograd, TensorBoard profiling, distributed training (DDP), and C++ LibTorch export.',
        tags: ['Neural Nets', 'LibTorch', 'DDP', 'Model Opt']
      },
      {
        name: 'TensorFlow & Scikit-Learn',
        level: 'Advanced',
        description: 'Classical ML pipelines (Random Forests, Gradient Boosting, SVMs), Keras custom loss functions, model evaluation, and cross-validation.',
        tags: ['Scikit-Learn', 'Feature Eng', 'Keras', 'XGBoost']
      },
      {
        name: 'OpenCV & Computer Vision',
        level: 'Advanced',
        description: 'Image filtering, object detection pipelines, feature extraction (SIFT, ORB), matrix transformations, and video stream processing.',
        tags: ['Image Processing', 'YOLO', 'Feature Matching']
      },
      {
        name: 'Hugging Face & LLMs',
        level: 'Intermediate',
        description: 'Transformers library, tokenizer pipelines, fine-tuning LLMs with LoRA/PEFT, vector databases (Pinecone/Chroma), and prompt engineering.',
        tags: ['Transformers', 'LoRA', 'Vector DB', 'RAG']
      }
    ]
  },
  {
    title: 'Full-Stack & Systems Infrastructure',
    subtitle: 'Scalable web applications, modern APIs, reactive UIs, and containerized deployment',
    skills: [
      {
        name: 'React & Next.js',
        level: 'Advanced',
        description: 'Component architecture, SSR/SSG patterns, dynamic state management, custom hooks, and high-performance DOM rendering.',
        tags: ['React 18', 'TypeScript', 'Next.js', 'State Mgmt']
      },
      {
        name: 'Tailwind CSS & Design Systems',
        level: 'Advanced',
        description: 'Responsive layout grids, custom dark/light theme systems, micro-interactions with Framer Motion, and CSS design tokens.',
        tags: ['Tailwind CSS', 'Framer Motion', 'Responsive', 'UX']
      },
      {
        name: 'FastAPI & Node.js',
        level: 'Advanced',
        description: 'Asynchronous RESTful APIs, OpenAPI documentation, WebSockets, JWT authentication, and high-throughput microservices.',
        tags: ['FastAPI', 'Node.js', 'WebSockets', 'REST APIs']
      },
      {
        name: 'PostgreSQL & Databases',
        level: 'Intermediate',
        description: 'Relational database schema design, index optimization, complex SQL queries, and ORM integration (Prisma, SQLAlchemy).',
        tags: ['PostgreSQL', 'SQLAlchemy', 'Prisma', 'Indexing']
      },
      {
        name: 'Docker & Git DevOps',
        level: 'Intermediate',
        description: 'Multi-stage Docker builds, container orchestration, CI/CD GitHub Actions workflows, Git branch strategies, and Linux environment administration.',
        tags: ['Docker', 'GitHub Actions', 'Linux', 'CI/CD']
      }
    ]
  }
];
