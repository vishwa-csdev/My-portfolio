import { CuratedProject } from '../types';

export const fallbackProjects: CuratedProject[] = [
  {
    id: 'ai-inference-engine',
    title: 'High-Performance C++ AI Inference Engine',
    category: 'AI/ML',
    description: 'Custom low-latency neural inference engine engineered in C++ for edge deployment, featuring memory-mapped matrix operations and optimized CUDA kernel execution.',
    highlights: [
      'Sub-5ms latency for deep convolutional layer operations',
      'SIMD vectorization & zero-copy memory allocation',
      'Integrated PyTorch C++ LibTorch bindings for model weight export'
    ],
    tech: ['C/C++', 'CUDA', 'PyTorch', 'CMake', 'OpenMP'],
    githubUrl: 'https://github.com/vishwa-csdev/ai-inference-engine',
    liveUrl: 'https://github.com/vishwa-csdev',
    isFeatured: true,
    metrics: [
      { label: 'Inference Speed', value: '4.2ms' },
      { label: 'Memory Footprint', value: '< 120MB' },
      { label: 'Throughput', value: '240 FPS' }
    ]
  },
  {
    id: 'vision-llm-pipeline',
    title: 'Multi-Modal Vision & Language Pipeline',
    category: 'AI/ML',
    description: 'End-to-end multi-modal AI architecture combining vision encoders with LLM fine-tuning for real-time document analysis and scene understanding.',
    highlights: [
      'Fine-tuned Transformer models with LoRA/QLoRA parameter efficiency',
      'Asynchronous Python backend with FastAPI and Redis task queue',
      'Streamed token responses with Server-Sent Events (SSE)'
    ],
    tech: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Redis', 'OpenCV'],
    githubUrl: 'https://github.com/vishwa-csdev/vision-llm-pipeline',
    isFeatured: true,
    metrics: [
      { label: 'Accuracy', value: '98.4%' },
      { label: 'Token Stream', value: '65 tok/s' }
    ]
  },
  {
    id: 'fullstack-mlops-dashboard',
    title: 'Enterprise MLOps & Model Telemetry Platform',
    category: 'Full-Stack',
    description: 'Full-stack Web dashboard for real-time model monitoring, concept drift detection, latency telemetry, and automated deployment pipelines.',
    highlights: [
      'Real-time WebSocket streaming of loss curves and inference metrics',
      'Responsive dark-theme UI with interactive chart canvas and filtering',
      'Docker containerized deployment with PostgreSQL metric storage'
    ],
    tech: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Python', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/vishwa-csdev/fullstack-mlops-dashboard',
    liveUrl: 'https://github.com/vishwa-csdev',
    isFeatured: true,
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Telemetry Rate', value: '10k req/s' }
    ]
  },
  {
    id: 'my-portfolio',
    title: 'Luxury Minimalist Portfolio & GitHub Sync',
    category: 'Full-Stack',
    description: 'Bespoke dark-theme personal developer platform with precise glow light accents, live GitHub REST API integration, and mathematical ML metric interactive widgets.',
    highlights: [
      'Tailwind CSS & Framer Motion tailored micro-animations',
      'Live dynamic repository fetch with graceful offline fallbacks',
      'Accessible, zero-light wash luxury aesthetic design'
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/vishwa-csdev/My-portfolio',
    liveUrl: 'https://github.com/vishwa-csdev/My-portfolio',
    isFeatured: false
  },
  {
    id: 'cuda-parallel-raytracer',
    title: 'CUDA Parallel Raytracing & Physics Engine',
    category: 'High-Performance Systems',
    description: 'Parallel acceleration rendering engine leveraging C++20 and CUDA GPU threads to compute real-time ray-triangle intersections and light bouncing.',
    highlights: [
      'BVH (Bounding Volume Hierarchy) spatial acceleration tree in C++',
      'Massively parallelized pixel shading with 1000+ CUDA threads',
      'Interactive GLFW window with real-time camera controls'
    ],
    tech: ['C/C++', 'CUDA', 'GLSL', 'CMake', 'C++20'],
    githubUrl: 'https://github.com/vishwa-csdev/cuda-parallel-raytracer',
    isFeatured: false,
    metrics: [
      { label: 'Frame Rate', value: '144 FPS' },
      { label: 'Parallel Rays', value: '2.1M/sec' }
    ]
  }
];
