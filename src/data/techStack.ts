import { TechCategory } from '../types';

export const techStackData: TechCategory[] = [
  {
    title: 'AI / Machine Learning',
    subtitle: 'Neural model development, loss function optimization, and scientific computing',
    accent: 'indigo',
    skills: [
      {
        name: 'Python',
        level: 'Primary Language',
        description: 'Core programming language for machine learning pipelines, dataset manipulation, mathematical modeling, and backend service integration.',
        tags: ['Python 3', 'Data Structures', 'Scientific Computing', 'AsyncIO'],
        accent: 'indigo'
      },
      {
        name: 'PyTorch',
        level: 'Framework',
        description: 'Building custom neural architectures, tensor computations, automated gradient backpropagation, and deep learning experiments.',
        tags: ['Deep Learning', 'Neural Networks', 'Tensors', 'Autograd'],
        accent: 'indigo'
      },
      {
        name: 'TensorFlow',
        level: 'Framework',
        description: 'Constructing machine learning models, neural training loops, Keras workflows, and model evaluation metrics for predictive intelligence.',
        tags: ['Machine Learning', 'Keras', 'Model Pipelines', 'Evaluation'],
        accent: 'indigo'
      }
    ]
  },
  {
    title: 'Languages & Systems',
    subtitle: 'Foundational programming languages spanning low-level performance to high-level web runtimes',
    accent: 'amber',
    skills: [
      {
        name: 'C / C++',
        level: 'Systems & Algorithms',
        description: 'Writing fast, deterministic code with manual memory concepts, pointer arithmetic, data structures, and algorithmic computational efficiency.',
        tags: ['C/C++', 'Memory Concepts', 'Algorithms', 'Data Structures'],
        accent: 'amber'
      },
      {
        name: 'JavaScript (ES6+) & TypeScript',
        level: 'Primary Web Stack',
        description: 'Developing modern type-safe applications, asynchronous promise chains, DOM rendering, and modular architecture.',
        tags: ['TypeScript', 'ES6+', 'Type Safety', 'Async/Await'],
        accent: 'amber'
      }
    ]
  },
  {
    title: 'Full-Stack & Web Engineering',
    subtitle: 'Proven through shipping interactive dashboards, games, and web applications',
    accent: 'cyan',
    skills: [
      {
        name: 'React & Vite',
        level: 'Frontend Architecture',
        description: 'Building responsive single-page web applications with reactive state hooks, reusable component trees, and high-performance bundling.',
        tags: ['React', 'Vite', 'Custom Hooks', 'Component Trees'],
        accent: 'cyan'
      },
      {
        name: 'Tailwind CSS & UI Systems',
        level: 'Styling & Design',
        description: 'Translating Figma designs into production code with responsive grid layouts, custom dark theme palettes, glassmorphism, and Framer Motion micro-animations.',
        tags: ['Tailwind CSS', 'Figma to Code', 'Framer Motion', 'Responsive UI'],
        accent: 'cyan'
      },
      {
        name: 'REST APIs & Web Data Integration',
        level: 'API Layer',
        description: 'Connecting client interfaces to third-party RESTful APIs (Formula 1 telemetry, GitHub REST API) with resilient error handling and live updates.',
        tags: ['REST APIs', 'Fetch API', 'JSON', 'Dynamic Sync'],
        accent: 'cyan'
      },
      {
        name: 'Web Audio API & Browser Features',
        level: 'Browser Capabilities',
        description: 'Leveraging modern browser Web Audio playback, progressive audio streaming, and local storage state persistence.',
        tags: ['Web Audio API', 'LocalStorage', 'Audio Playback'],
        accent: 'cyan'
      }
    ]
  },
  {
    title: 'Automation & Workflow Tooling',
    subtitle: 'Workflow automation, version control, and Linux environment orchestration',
    accent: 'emerald',
    skills: [
      {
        name: 'n8n Workflow Automation',
        level: 'Automation & Pipelines',
        description: 'Designing automated multi-step workflows, webhook triggers, API integrations, and AI agent pipeline orchestration to connect disparate services.',
        tags: ['n8n', 'Webhooks', 'Workflow Automation', 'AI Agent Orchestration'],
        accent: 'emerald'
      },
      {
        name: 'Git & GitHub Collaboration',
        level: 'Version Control',
        description: 'Branch management, pull requests, automated repository synchronization, and open-source project governance.',
        tags: ['Git', 'GitHub', 'Version Control', 'GitHub Actions'],
        accent: 'emerald'
      },
      {
        name: 'Fedora Linux',
        level: 'Daily Driver Environment',
        description: 'Primary operating system and development environment, command line proficiency, shell scripting, and package management.',
        tags: ['Fedora Linux', 'Bash', 'CLI', 'Dev Environment'],
        accent: 'emerald'
      }
    ]
  }
];
