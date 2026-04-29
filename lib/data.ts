export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  imageColor: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & DevOps" | "Design";
  level: number; // 1-5
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live metrics, customizable widgets, and team collaboration features.",
    longDescription:
      "Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It provides real-time data visualization, customizable widget layouts, and powerful team collaboration tools. The platform integrates with over 30 data sources and processes millions of events per day with sub-second latency.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Prisma", "Recharts", "Tailwind CSS"],
    features: [
      "Real-time data streaming with WebSocket connections",
      "Drag-and-drop dashboard customization",
      "Role-based access control with team workspaces",
      "Automated report generation and email delivery",
      "30+ third-party integrations (Stripe, Mixpanel, etc.)",
      "Dark/light mode with custom theme support",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-indigo-500 to-purple-600",
    featured: true,
  },
  {
    slug: "echo-ai",
    title: "Echo AI",
    description:
      "An AI-powered writing assistant that helps teams create consistent, on-brand content at scale using fine-tuned language models.",
    longDescription:
      "Echo AI is an intelligent writing assistant designed for content teams and marketers. It leverages fine-tuned large language models to understand your brand voice and generate consistent, high-quality content across all channels. The platform includes a collaborative editor, content calendar, and performance analytics.",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "Socket.io", "AWS S3"],
    features: [
      "Brand voice training with custom fine-tuning",
      "Multi-format content generation (blog, social, email)",
      "Real-time collaborative editing with comments",
      "SEO optimization suggestions and keyword tracking",
      "Content calendar with scheduling and publishing",
      "Performance analytics and A/B testing",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    slug: "forge-commerce",
    title: "Forge Commerce",
    description:
      "A headless e-commerce platform with a blazing-fast storefront, inventory management, and multi-currency checkout.",
    longDescription:
      "Forge Commerce is a modern headless e-commerce solution built for performance and flexibility. The storefront achieves perfect Lighthouse scores through aggressive caching, edge rendering, and optimized asset delivery. The admin panel provides comprehensive inventory management, order processing, and customer analytics.",
    techStack: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Tailwind CSS", "Vercel Edge", "Algolia"],
    features: [
      "Sub-100ms page loads with edge rendering",
      "Multi-currency and multi-language support",
      "Advanced inventory management with low-stock alerts",
      "Stripe integration with subscription support",
      "Algolia-powered instant search",
      "Automated tax calculation and compliance",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-orange-500 to-rose-600",
    featured: true,
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    description:
      "A telemedicine platform connecting patients with doctors for virtual consultations, prescriptions, and health tracking.",
    longDescription:
      "Pulse Health is a HIPAA-compliant telemedicine platform that makes healthcare accessible to everyone. Patients can book virtual consultations, receive digital prescriptions, and track their health metrics over time. Doctors get a streamlined workflow with integrated EHR, scheduling, and billing tools.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "Twilio", "AWS", "Docker"],
    features: [
      "HD video consultations with WebRTC",
      "HIPAA-compliant data storage and transmission",
      "Digital prescription management",
      "Health metrics tracking and visualization",
      "Insurance verification and billing integration",
      "Multi-provider scheduling system",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-emerald-500 to-teal-600",
    featured: false,
  },
  {
    slug: "orbit-crm",
    title: "Orbit CRM",
    description:
      "A lightweight CRM for freelancers and small agencies to manage clients, projects, invoices, and communications.",
    longDescription:
      "Orbit CRM is designed specifically for freelancers and small agencies who need a powerful yet simple tool to manage their business. It combines client management, project tracking, invoicing, and communication history in one clean interface without the complexity of enterprise CRMs.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "Inertia.js", "Stripe", "Mailgun"],
    features: [
      "Client and contact management with activity timeline",
      "Project pipeline with Kanban and list views",
      "Automated invoice generation and payment tracking",
      "Email integration with conversation history",
      "Time tracking with billable hours reporting",
      "Proposal and contract templates",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-violet-500 to-purple-600",
    featured: false,
  },
  {
    slug: "stacknotes",
    title: "StackNotes",
    description:
      "A developer-focused note-taking app with code syntax highlighting, markdown support, and GitHub Gist sync.",
    longDescription:
      "StackNotes is built by developers, for developers. It combines the simplicity of a note-taking app with powerful features like syntax-highlighted code blocks, Markdown rendering, and seamless GitHub Gist synchronization. Notes are organized with tags, notebooks, and a powerful full-text search.",
    techStack: ["Electron", "React", "TypeScript", "SQLite", "CodeMirror", "GitHub API", "Marked.js"],
    features: [
      "Syntax highlighting for 100+ programming languages",
      "Full Markdown support with live preview",
      "GitHub Gist sync for code snippets",
      "Offline-first with automatic cloud backup",
      "Full-text search across all notes",
      "Custom themes and keyboard shortcuts",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageColor: "from-yellow-500 to-orange-600",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "Vue.js", category: "Frontend", level: 4 },
  { name: "React Native", category: "Frontend", level: 4 },
  { name: "GraphQL", category: "Frontend", level: 4 },
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "PostgreSQL", category: "Backend", level: 5 },
  { name: "Prisma", category: "Backend", level: 4 },
  { name: "Redis", category: "Backend", level: 4 },
  { name: "REST APIs", category: "Backend", level: 5 },
  { name: "MongoDB", category: "Backend", level: 4 },
  { name: "Python", category: "Backend", level: 3 },
  { name: "Go", category: "Backend", level: 3 },
  // Tools & DevOps
  { name: "Git & GitHub", category: "Tools & DevOps", level: 5 },
  { name: "Docker", category: "Tools & DevOps", level: 4 },
  { name: "AWS", category: "Tools & DevOps", level: 4 },
  { name: "Vercel", category: "Tools & DevOps", level: 5 },
  { name: "CI/CD", category: "Tools & DevOps", level: 4 },
  { name: "Linux", category: "Tools & DevOps", level: 4 },
  // Design
  { name: "Figma", category: "Design", level: 4 },
  { name: "UI/UX Design", category: "Design", level: 4 },
  { name: "Design Systems", category: "Design", level: 4 },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@alexmorgan.dev",
};

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer",
  tagline: "I build fast, beautiful, and scalable web applications.",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting digital products that users love. I specialize in React and Node.js ecosystems, with a passion for performance optimization, clean architecture, and delightful user experiences.",
  bioExtended:
    "When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest in AI and developer tooling. I believe great software is built at the intersection of technical excellence and thoughtful design.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  yearsExperience: 6,
  projectsCompleted: 40,
  happyClients: 25,
};
