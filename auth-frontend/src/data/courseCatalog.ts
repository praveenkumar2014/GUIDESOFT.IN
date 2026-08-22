// Generated from the supplied GuideSoft 2026 course catalog. Keep this file as the CMS seed dataset.

export type CatalogCategory = {
  id: string
  title: string
  icon: string
}

export type CatalogCourse = {
  id: string
  title: string
  categoryId: string
  category: string
  icon: string
}

export const courseCategories: CatalogCategory[] = [
  {
    "id": "ai--generative-ai",
    "title": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ux-ui--product-design",
    "title": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "full-stack-development",
    "title": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "frontend-development",
    "title": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "python--backend",
    "title": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "mobile-app-development",
    "title": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "cloud-computing",
    "title": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "devops--infrastructure",
    "title": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "data-science--analytics",
    "title": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "machine-learning",
    "title": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "database--data-engineering",
    "title": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "cybersecurity",
    "title": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "networking",
    "title": "Networking",
    "icon": "🌐"
  },
  {
    "id": "linux--systems",
    "title": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "blockchain--web3",
    "title": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "ar--vr--spatial-computing",
    "title": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "digital-marketing",
    "title": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "content--creative-ai",
    "title": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "business--entrepreneurship",
    "title": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "enterprise--professional",
    "title": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "testing--quality",
    "title": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "no-code--low-code",
    "title": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "developer-tools--ai-coding",
    "title": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "career--industry-programs",
    "title": "Career & Industry Programs",
    "icon": "🎓"
  }
]

export const courseCatalog: CatalogCourse[] = [
  {
    "id": "ai--generative-ai-artificial-intelligence--machine-learning",
    "title": "Artificial Intelligence & Machine Learning",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-generative-ai",
    "title": "Generative AI",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-generative-ai-engineering",
    "title": "Generative AI Engineering",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-prompt-engineering",
    "title": "Prompt Engineering",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-advanced-prompt-engineering",
    "title": "Advanced Prompt Engineering",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-agent-development",
    "title": "AI Agent Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-agentic-ai",
    "title": "Agentic AI",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-multi-agent-ai-systems",
    "title": "Multi-Agent AI Systems",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-automation",
    "title": "AI Automation",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-workflow-automation",
    "title": "AI Workflow Automation",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-copilot-development",
    "title": "AI Copilot Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-llm-engineering",
    "title": "LLM Engineering",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-large-language-model-development",
    "title": "Large Language Model Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-rag-application-development",
    "title": "RAG Application Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-chatbot-development",
    "title": "AI Chatbot Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-api-integration",
    "title": "AI API Integration",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-saas-development",
    "title": "AI SaaS Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-product-development",
    "title": "AI Product Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-application-development",
    "title": "AI Application Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-powered-software-development",
    "title": "AI-Powered Software Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-coding",
    "title": "AI Coding",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-assisted-programming",
    "title": "AI-Assisted Programming",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-model-deployment",
    "title": "AI Model Deployment",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-model-fine-tuning",
    "title": "AI Model Fine-Tuning",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-open-source-llm-engineering",
    "title": "Open-Source LLM Engineering",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-local-ai-development",
    "title": "Local AI Development",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-infrastructure",
    "title": "AI Infrastructure",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-security",
    "title": "AI Security",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-responsible-ai",
    "title": "Responsible AI",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ai--generative-ai-ai-evaluation--testing",
    "title": "AI Evaluation & Testing",
    "categoryId": "ai--generative-ai",
    "category": "AI & Generative AI",
    "icon": "🤖"
  },
  {
    "id": "ux-ui--product-design-ux-ui-design",
    "title": "UX/UI Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ux-ui-design-with-ai",
    "title": "UX/UI Design with AI",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-advanced-ux-ui-design",
    "title": "Advanced UX/UI Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-product-design",
    "title": "Product Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-product-design-with-ai",
    "title": "Product Design with AI",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ux-research",
    "title": "UX Research",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ux-research-with-ai",
    "title": "UX Research with AI",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-user-centered-design",
    "title": "User-Centered Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-design-thinking",
    "title": "Design Thinking",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-interaction-design",
    "title": "Interaction Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-visual-design",
    "title": "Visual Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-information-architecture",
    "title": "Information Architecture",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-design-systems",
    "title": "Design Systems",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ai-design-systems",
    "title": "AI Design Systems",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-figma-masterclass",
    "title": "Figma Masterclass",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-figma--ai",
    "title": "Figma + AI",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-prototyping",
    "title": "Prototyping",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ai-prototyping",
    "title": "AI Prototyping",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-design-to-code",
    "title": "Design-to-Code",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-figma-to-react",
    "title": "Figma-to-React",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-web-design",
    "title": "Web Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-mobile-app-design",
    "title": "Mobile App Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-responsive-design",
    "title": "Responsive Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ux-strategy",
    "title": "UX Strategy",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-product-strategy",
    "title": "Product Strategy",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-usability-testing",
    "title": "Usability Testing",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-accessibility-design",
    "title": "Accessibility Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ux-writing",
    "title": "UX Writing",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-motion--interaction-design",
    "title": "Motion & Interaction Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "ux-ui--product-design-ai-powered-product-design",
    "title": "AI-Powered Product Design",
    "categoryId": "ux-ui--product-design",
    "category": "UX/UI & Product Design",
    "icon": "🎨"
  },
  {
    "id": "full-stack-development-full-stack-development",
    "title": "Full-Stack Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-full-stack-development-with-ai",
    "title": "Full-Stack Development with AI",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-mern-stack-development",
    "title": "MERN Stack Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-mern--ai",
    "title": "MERN + AI",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-mean-stack-development",
    "title": "MEAN Stack Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-pern-stack-development",
    "title": "PERN Stack Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-java-full-stack",
    "title": "Java Full Stack",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-python-full-stack",
    "title": "Python Full Stack",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-php-full-stack",
    "title": "PHP Full Stack",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-next-js-full-stack",
    "title": "Next.js Full Stack",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-react-full-stack",
    "title": "React Full Stack",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-ai-web-application-development",
    "title": "AI Web Application Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-saas-application-development",
    "title": "SaaS Application Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-enterprise-application-development",
    "title": "Enterprise Application Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-microservices-development",
    "title": "Microservices Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-api-development",
    "title": "API Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-rest-api-development",
    "title": "REST API Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-graphql-development",
    "title": "GraphQL Development",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-backend-engineering",
    "title": "Backend Engineering",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "full-stack-development-frontend-engineering",
    "title": "Frontend Engineering",
    "categoryId": "full-stack-development",
    "category": "Full-Stack Development",
    "icon": "💻"
  },
  {
    "id": "frontend-development-html5",
    "title": "HTML5",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-css3",
    "title": "CSS3",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-javascript",
    "title": "JavaScript",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-advanced-javascript",
    "title": "Advanced JavaScript",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-typescript",
    "title": "TypeScript",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-react-js",
    "title": "React.js",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-advanced-react-js",
    "title": "Advanced React.js",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-next-js",
    "title": "Next.js",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-vue-js",
    "title": "Vue.js",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-angular",
    "title": "Angular",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-svelte",
    "title": "Svelte",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-tailwind-css",
    "title": "Tailwind CSS",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-bootstrap",
    "title": "Bootstrap",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-frontend-architecture",
    "title": "Frontend Architecture",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-web-performance-optimization",
    "title": "Web Performance Optimization",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-progressive-web-apps",
    "title": "Progressive Web Apps",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-web-components",
    "title": "Web Components",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-frontend-testing",
    "title": "Frontend Testing",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-react--ai",
    "title": "React + AI",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "frontend-development-next-js--ai",
    "title": "Next.js + AI",
    "categoryId": "frontend-development",
    "category": "Frontend Development",
    "icon": "⚛️"
  },
  {
    "id": "python--backend-python-programming",
    "title": "Python Programming",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-advanced-python",
    "title": "Advanced Python",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-python-for-ai",
    "title": "Python for AI",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-python-for-data-science",
    "title": "Python for Data Science",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-python-automation",
    "title": "Python Automation",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-python-web-development",
    "title": "Python Web Development",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-fastapi",
    "title": "FastAPI",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-django",
    "title": "Django",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-flask",
    "title": "Flask",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-node-js",
    "title": "Node.js",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-express-js",
    "title": "Express.js",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-nestjs",
    "title": "NestJS",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-backend-with-node-js",
    "title": "Backend with Node.js",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-backend-with-python",
    "title": "Backend with Python",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-golang",
    "title": "Golang",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-rust-programming",
    "title": "Rust Programming",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-java-programming",
    "title": "Java Programming",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-spring-boot",
    "title": "Spring Boot",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-c-programming",
    "title": "C Programming",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "python--backend-c--programming",
    "title": "C++ Programming",
    "categoryId": "python--backend",
    "category": "Python & Backend",
    "icon": "🐍"
  },
  {
    "id": "mobile-app-development-android-development",
    "title": "Android Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-android--ai",
    "title": "Android + AI",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-kotlin",
    "title": "Kotlin",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-jetpack-compose",
    "title": "Jetpack Compose",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-ios-development",
    "title": "iOS Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-swift",
    "title": "Swift",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-swiftui",
    "title": "SwiftUI",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-flutter",
    "title": "Flutter",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-flutter--ai",
    "title": "Flutter + AI",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-react-native",
    "title": "React Native",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-react-native--ai",
    "title": "React Native + AI",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-cross-platform-app-development",
    "title": "Cross-Platform App Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-mobile-ui-ux",
    "title": "Mobile UI/UX",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-mobile-app-architecture",
    "title": "Mobile App Architecture",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-mobile-app-security",
    "title": "Mobile App Security",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-app-store-deployment",
    "title": "App Store Deployment",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-google-play-store-deployment",
    "title": "Google Play Store Deployment",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-ai-mobile-app-development",
    "title": "AI Mobile App Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-super-app-development",
    "title": "Super App Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "mobile-app-development-enterprise-mobile-app-development",
    "title": "Enterprise Mobile App Development",
    "categoryId": "mobile-app-development",
    "category": "Mobile App Development",
    "icon": "📱"
  },
  {
    "id": "cloud-computing-cloud-computing",
    "title": "Cloud Computing",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-aws",
    "title": "AWS",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-aws-solutions-architect",
    "title": "AWS Solutions Architect",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-aws-developer",
    "title": "AWS Developer",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-aws-cloud-practitioner",
    "title": "AWS Cloud Practitioner",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-aws--ai",
    "title": "AWS + AI",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-microsoft-azure",
    "title": "Microsoft Azure",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-azure-ai",
    "title": "Azure AI",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-google-cloud-platform",
    "title": "Google Cloud Platform",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-google-cloud-ai",
    "title": "Google Cloud AI",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-architecture",
    "title": "Cloud Architecture",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-native-development",
    "title": "Cloud-Native Development",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-serverless-computing",
    "title": "Serverless Computing",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-security",
    "title": "Cloud Security",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-multi-cloud-architecture",
    "title": "Multi-Cloud Architecture",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-cost-optimization",
    "title": "Cloud Cost Optimization",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-migration",
    "title": "Cloud Migration",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-infrastructure",
    "title": "Cloud Infrastructure",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-cloud-engineering",
    "title": "Cloud Engineering",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "cloud-computing-ai-cloud-infrastructure",
    "title": "AI Cloud Infrastructure",
    "categoryId": "cloud-computing",
    "category": "Cloud Computing",
    "icon": "☁️"
  },
  {
    "id": "devops--infrastructure-devops",
    "title": "DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-advanced-devops",
    "title": "Advanced DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-aws-devops",
    "title": "AWS DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-azure-devops",
    "title": "Azure DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-ci-cd",
    "title": "CI/CD",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-docker",
    "title": "Docker",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-kubernetes",
    "title": "Kubernetes",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-docker--kubernetes",
    "title": "Docker + Kubernetes",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-terraform",
    "title": "Terraform",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-ansible",
    "title": "Ansible",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-jenkins",
    "title": "Jenkins",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-github-actions",
    "title": "GitHub Actions",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-gitops",
    "title": "GitOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-infrastructure-as-code",
    "title": "Infrastructure as Code",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-platform-engineering",
    "title": "Platform Engineering",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-site-reliability-engineering",
    "title": "Site Reliability Engineering",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-devsecops",
    "title": "DevSecOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-cloud-native-devops",
    "title": "Cloud-Native DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-ai-assisted-devops",
    "title": "AI-Assisted DevOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "devops--infrastructure-mlops",
    "title": "MLOps",
    "categoryId": "devops--infrastructure",
    "category": "DevOps & Infrastructure",
    "icon": "⚙️"
  },
  {
    "id": "data-science--analytics-data-science",
    "title": "Data Science",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-data-science-with-ai",
    "title": "Data Science with AI",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-data-analytics",
    "title": "Data Analytics",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-data-analytics-with-ai",
    "title": "Data Analytics with AI",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-python-data-analytics",
    "title": "Python Data Analytics",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-sql",
    "title": "SQL",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-advanced-sql",
    "title": "Advanced SQL",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-power-bi",
    "title": "Power BI",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-power-bi--ai",
    "title": "Power BI + AI",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-tableau",
    "title": "Tableau",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-excel-advanced",
    "title": "Excel Advanced",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-excel--ai",
    "title": "Excel + AI",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-business-intelligence",
    "title": "Business Intelligence",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-data-visualization",
    "title": "Data Visualization",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-statistics-for-data-science",
    "title": "Statistics for Data Science",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-predictive-analytics",
    "title": "Predictive Analytics",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-big-data-analytics",
    "title": "Big Data Analytics",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-data-storytelling",
    "title": "Data Storytelling",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-ai-analytics",
    "title": "AI Analytics",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "data-science--analytics-generative-ai-for-data-analysts",
    "title": "Generative AI for Data Analysts",
    "categoryId": "data-science--analytics",
    "category": "Data Science & Analytics",
    "icon": "🧠"
  },
  {
    "id": "machine-learning-machine-learning",
    "title": "Machine Learning",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-machine-learning-engineering",
    "title": "Machine Learning Engineering",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-advanced-machine-learning",
    "title": "Advanced Machine Learning",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-deep-learning",
    "title": "Deep Learning",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-neural-networks",
    "title": "Neural Networks",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-computer-vision",
    "title": "Computer Vision",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-natural-language-processing",
    "title": "Natural Language Processing",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-reinforcement-learning",
    "title": "Reinforcement Learning",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-generative-ai--ml",
    "title": "Generative AI & ML",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-tensorflow",
    "title": "TensorFlow",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-pytorch",
    "title": "PyTorch",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-scikit-learn",
    "title": "Scikit-learn",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-ml-model-deployment",
    "title": "ML Model Deployment",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-ml-pipelines",
    "title": "ML Pipelines",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-mlops",
    "title": "MLOps",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-ai-research",
    "title": "AI Research",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-applied-ai",
    "title": "Applied AI",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-ai-engineering",
    "title": "AI Engineering",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-edge-ai",
    "title": "Edge AI",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "machine-learning-ai-robotics",
    "title": "AI Robotics",
    "categoryId": "machine-learning",
    "category": "Machine Learning",
    "icon": "🤖"
  },
  {
    "id": "database--data-engineering-mysql",
    "title": "MySQL",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-postgresql",
    "title": "PostgreSQL",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-mongodb",
    "title": "MongoDB",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-redis",
    "title": "Redis",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-firebase",
    "title": "Firebase",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-supabase",
    "title": "Supabase",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-database-administration",
    "title": "Database Administration",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-database-design",
    "title": "Database Design",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-sql-development",
    "title": "SQL Development",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-nosql-development",
    "title": "NoSQL Development",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-data-engineering",
    "title": "Data Engineering",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-big-data-engineering",
    "title": "Big Data Engineering",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-apache-spark",
    "title": "Apache Spark",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-apache-kafka",
    "title": "Apache Kafka",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-data-warehousing",
    "title": "Data Warehousing",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-etl-elt",
    "title": "ETL/ELT",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-snowflake",
    "title": "Snowflake",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-databricks",
    "title": "Databricks",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-vector-databases",
    "title": "Vector Databases",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "database--data-engineering-ai-data-engineering",
    "title": "AI Data Engineering",
    "categoryId": "database--data-engineering",
    "category": "Database & Data Engineering",
    "icon": "🗄️"
  },
  {
    "id": "cybersecurity-cybersecurity",
    "title": "Cybersecurity",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-cybersecurity-with-ai",
    "title": "Cybersecurity with AI",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-ethical-hacking",
    "title": "Ethical Hacking",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-ethical-hacking-with-ai",
    "title": "Ethical Hacking with AI",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-penetration-testing",
    "title": "Penetration Testing",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-network-security",
    "title": "Network Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-web-application-security",
    "title": "Web Application Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-cloud-security",
    "title": "Cloud Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-application-security",
    "title": "Application Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-devsecops",
    "title": "DevSecOps",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-soc-analyst",
    "title": "SOC Analyst",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-security-operations",
    "title": "Security Operations",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-digital-forensics",
    "title": "Digital Forensics",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-incident-response",
    "title": "Incident Response",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-malware-analysis",
    "title": "Malware Analysis",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-threat-intelligence",
    "title": "Threat Intelligence",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-zero-trust-security",
    "title": "Zero Trust Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-identity--access-management",
    "title": "Identity & Access Management",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-api-security",
    "title": "API Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "cybersecurity-ai--llm-security",
    "title": "AI & LLM Security",
    "categoryId": "cybersecurity",
    "category": "Cybersecurity",
    "icon": "🔐"
  },
  {
    "id": "networking-computer-networking",
    "title": "Computer Networking",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-ccna",
    "title": "CCNA",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-advanced-networking",
    "title": "Advanced Networking",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-network-security",
    "title": "Network Security",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-cisco-networking",
    "title": "Cisco Networking",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-linux-networking",
    "title": "Linux Networking",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-cloud-networking",
    "title": "Cloud Networking",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-sd-wan",
    "title": "SD-WAN",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-network-automation",
    "title": "Network Automation",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "networking-network-engineering",
    "title": "Network Engineering",
    "categoryId": "networking",
    "category": "Networking",
    "icon": "🌐"
  },
  {
    "id": "linux--systems-linux-administration",
    "title": "Linux Administration",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-advanced-linux",
    "title": "Advanced Linux",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-linux-server-administration",
    "title": "Linux Server Administration",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-shell-scripting",
    "title": "Shell Scripting",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-bash-automation",
    "title": "Bash Automation",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-system-administration",
    "title": "System Administration",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-server-management",
    "title": "Server Management",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-nginx",
    "title": "Nginx",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-apache",
    "title": "Apache",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "linux--systems-high-availability-systems",
    "title": "High-Availability Systems",
    "categoryId": "linux--systems",
    "category": "Linux & Systems",
    "icon": "🐧"
  },
  {
    "id": "blockchain--web3-blockchain-development",
    "title": "Blockchain Development",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-web3-development",
    "title": "Web3 Development",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-ethereum-development",
    "title": "Ethereum Development",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-smart-contract-development",
    "title": "Smart Contract Development",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-solidity",
    "title": "Solidity",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-dapp-development",
    "title": "DApp Development",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-blockchain-security",
    "title": "Blockchain Security",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-web3-ui-ux",
    "title": "Web3 UI/UX",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-decentralized-applications",
    "title": "Decentralized Applications",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "blockchain--web3-blockchain-architecture",
    "title": "Blockchain Architecture",
    "categoryId": "blockchain--web3",
    "category": "Blockchain & Web3",
    "icon": "⛓️"
  },
  {
    "id": "ar--vr--spatial-computing-ar-development",
    "title": "AR Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-vr-development",
    "title": "VR Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-xr-development",
    "title": "XR Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-unity-development",
    "title": "Unity Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-unreal-engine",
    "title": "Unreal Engine",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-3d-development",
    "title": "3D Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-spatial-computing",
    "title": "Spatial Computing",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-apple-vision-pro-development",
    "title": "Apple Vision Pro Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-metaverse-development",
    "title": "Metaverse Development",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "ar--vr--spatial-computing-ai--ar-vr",
    "title": "AI + AR/VR",
    "categoryId": "ar--vr--spatial-computing",
    "category": "AR / VR / Spatial Computing",
    "icon": "🥽"
  },
  {
    "id": "digital-marketing-digital-marketing",
    "title": "Digital Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-digital-marketing-with-ai",
    "title": "Digital Marketing with AI",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-ai-marketing",
    "title": "AI Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-seo",
    "title": "SEO",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-ai-seo",
    "title": "AI SEO",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-generative-engine-optimization-geo",
    "title": "Generative Engine Optimization (GEO)",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-search-engine-marketing",
    "title": "Search Engine Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-social-media-marketing",
    "title": "Social Media Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-instagram-marketing",
    "title": "Instagram Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-youtube-marketing",
    "title": "YouTube Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-linkedin-marketing",
    "title": "LinkedIn Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-performance-marketing",
    "title": "Performance Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-google-ads",
    "title": "Google Ads",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-meta-ads",
    "title": "Meta Ads",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-email-marketing",
    "title": "Email Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-content-marketing",
    "title": "Content Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-affiliate-marketing",
    "title": "Affiliate Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-influencer-marketing",
    "title": "Influencer Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-marketing-automation",
    "title": "Marketing Automation",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "digital-marketing-ai-content-marketing",
    "title": "AI Content Marketing",
    "categoryId": "digital-marketing",
    "category": "Digital Marketing",
    "icon": "📈"
  },
  {
    "id": "content--creative-ai-ai-content-creation",
    "title": "AI Content Creation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-copywriting",
    "title": "AI Copywriting",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-graphic-design",
    "title": "AI Graphic Design",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-video-generation",
    "title": "AI Video Generation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-video-editing",
    "title": "AI Video Editing",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-image-generation",
    "title": "AI Image Generation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-presentation-design",
    "title": "AI Presentation Design",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-voice-generation",
    "title": "AI Voice Generation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-music-generation",
    "title": "AI Music Generation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-animation",
    "title": "AI Animation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-3d-generation",
    "title": "AI 3D Generation",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-photography",
    "title": "AI Photography",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-branding",
    "title": "AI Branding",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-advertising-creative",
    "title": "AI Advertising Creative",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "content--creative-ai-ai-social-media-content",
    "title": "AI Social Media Content",
    "categoryId": "content--creative-ai",
    "category": "Content & Creative AI",
    "icon": "🎬"
  },
  {
    "id": "business--entrepreneurship-ai-for-business",
    "title": "AI for Business",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-ai-business-automation",
    "title": "AI Business Automation",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-ai-startup-builder",
    "title": "AI Startup Builder",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-ai-entrepreneurship",
    "title": "AI Entrepreneurship",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-startup-development",
    "title": "Startup Development",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-product-management",
    "title": "Product Management",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-product-management-with-ai",
    "title": "Product Management with AI",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-business-analysis",
    "title": "Business Analysis",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-business-intelligence",
    "title": "Business Intelligence",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-digital-transformation",
    "title": "Digital Transformation",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-technology-consulting",
    "title": "Technology Consulting",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-it-project-management",
    "title": "IT Project Management",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-agile",
    "title": "Agile",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-scrum",
    "title": "Scrum",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "business--entrepreneurship-ai-powered-project-management",
    "title": "AI-Powered Project Management",
    "categoryId": "business--entrepreneurship",
    "category": "Business & Entrepreneurship",
    "icon": "🏢"
  },
  {
    "id": "enterprise--professional-generative-ai-for-professionals",
    "title": "Generative AI for Professionals",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-hr",
    "title": "AI for HR",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-finance",
    "title": "AI for Finance",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-sales",
    "title": "AI for Sales",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-marketing",
    "title": "AI for Marketing",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-customer-support",
    "title": "AI for Customer Support",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-education",
    "title": "AI for Education",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-healthcare",
    "title": "AI for Healthcare",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-legal-teams",
    "title": "AI for Legal Teams",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-operations",
    "title": "AI for Operations",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-for-managers",
    "title": "AI for Managers",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-leadership",
    "title": "AI Leadership",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-transformation-strategy",
    "title": "AI Transformation Strategy",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-enterprise-ai-architecture",
    "title": "Enterprise AI Architecture",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "enterprise--professional-ai-governance",
    "title": "AI Governance",
    "categoryId": "enterprise--professional",
    "category": "Enterprise / Professional",
    "icon": "🧑‍💼"
  },
  {
    "id": "testing--quality-software-testing",
    "title": "Software Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-manual-testing",
    "title": "Manual Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-automation-testing",
    "title": "Automation Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-selenium",
    "title": "Selenium",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-playwright",
    "title": "Playwright",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-cypress",
    "title": "Cypress",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-api-testing",
    "title": "API Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-performance-testing",
    "title": "Performance Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-mobile-app-testing",
    "title": "Mobile App Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-security-testing",
    "title": "Security Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-ai-powered-testing",
    "title": "AI-Powered Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-ai-test-automation",
    "title": "AI Test Automation",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-qa-engineering",
    "title": "QA Engineering",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-devops-testing",
    "title": "DevOps Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "testing--quality-continuous-testing",
    "title": "Continuous Testing",
    "categoryId": "testing--quality",
    "category": "Testing & Quality",
    "icon": "🧪"
  },
  {
    "id": "no-code--low-code-no-code-development",
    "title": "No-Code Development",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-low-code-development",
    "title": "Low-Code Development",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-ai-no-code-app-development",
    "title": "AI No-Code App Development",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-ai-website-building",
    "title": "AI Website Building",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-ai-saas-builder",
    "title": "AI SaaS Builder",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-ai-automation-with-n8n",
    "title": "AI Automation with n8n",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-workflow-automation",
    "title": "Workflow Automation",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-zapier-automation",
    "title": "Zapier Automation",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-make-automation",
    "title": "Make Automation",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "no-code--low-code-ai--no-code-business-automation",
    "title": "AI + No-Code Business Automation",
    "categoryId": "no-code--low-code",
    "category": "No-Code / Low-Code",
    "icon": "🧩"
  },
  {
    "id": "developer-tools--ai-coding-ai-coding-masterclass",
    "title": "AI Coding Masterclass",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-cursor-ai-development",
    "title": "Cursor AI Development",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-claude-code-development",
    "title": "Claude Code Development",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-github-copilot",
    "title": "GitHub Copilot",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-ide-masterclass",
    "title": "AI IDE Masterclass",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-assisted-github-development",
    "title": "AI-Assisted GitHub Development",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-code-review",
    "title": "AI Code Review",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-debugging",
    "title": "AI Debugging",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-software-architecture",
    "title": "AI Software Architecture",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "developer-tools--ai-coding-ai-developer-productivity",
    "title": "AI Developer Productivity",
    "categoryId": "developer-tools--ai-coding",
    "category": "Developer Tools & AI Coding",
    "icon": "🛠️"
  },
  {
    "id": "career--industry-programs-ai-engineer-career-program",
    "title": "AI Engineer Career Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-full-stack-ai-engineer-program",
    "title": "Full-Stack AI Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-product-designer-program",
    "title": "AI Product Designer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-ux-ui-designer-program",
    "title": "AI UX/UI Designer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-automation-engineer-program",
    "title": "AI Automation Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-agent-engineer-program",
    "title": "AI Agent Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-generative-ai-engineer-program",
    "title": "Generative AI Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-data-scientist-career-program",
    "title": "Data Scientist Career Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-cloud-engineer-program",
    "title": "Cloud Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-devops-engineer-program",
    "title": "DevOps Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-cybersecurity-engineer-program",
    "title": "Cybersecurity Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-machine-learning-engineer-program",
    "title": "Machine Learning Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-mlops-engineer-program",
    "title": "MLOps Engineer Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-product-manager-program",
    "title": "AI Product Manager Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-digital-marketing-specialist",
    "title": "AI Digital Marketing Specialist",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-business-analyst-program",
    "title": "AI Business Analyst Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-software-engineer-with-ai",
    "title": "Software Engineer with AI",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ai-startup-founder-program",
    "title": "AI Startup Founder Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-full-stack--cloud--ai-program",
    "title": "Full-Stack + Cloud + AI Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  },
  {
    "id": "career--industry-programs-ultimate-ai-technology-master-program",
    "title": "Ultimate AI Technology Master Program",
    "categoryId": "career--industry-programs",
    "category": "Career & Industry Programs",
    "icon": "🎓"
  }
]

export const flagshipPrograms = [
  "UX/UI + AI + Product Design",
  "Full Stack + AI + Cloud",
  "AI Agent + Automation Engineering",
  "Generative AI + Prompt Engineering + LLM",
  "Python + Data Science + AI",
  "Machine Learning + Deep Learning + GenAI",
  "AWS + DevOps + AI",
  "Cybersecurity + AI",
  "MERN + Next.js + AI",
  "React + Node.js + AI",
  "AI SaaS Development",
  "AI Mobile App Development",
  "AI Digital Marketing + SEO + GEO",
  "AI Coding + Cursor + Claude Code",
  "AI Startup & Product Development"
]

export const catalogStats = {
  totalCourses: courseCatalog.length,
  totalCategories: courseCategories.length,
  flagshipPrograms: flagshipPrograms.length,
}

export function createTranscriptCoursePrompt(course: Pick<CatalogCourse, 'title' | 'category'>, transcript: string) {
  return [
    'You are the GuideSoft course architect. Turn the supplied training transcript into a production-ready online course.',
    '',
    'COURSE CONTEXT',
    'Course title: ' + course.title,
    'Category: ' + course.category,
    'Audience: beginners to working professionals; infer the likely level from the transcript.',
    '',
    'TRANSCRIPT',
    transcript.trim() || '[Paste transcript here]',
    '',
    'RETURN STRICT JSON WITH THIS SHAPE',
    JSON.stringify({
      title: course.title,
      positioning: 'One sentence course promise',
      level: 'Beginner | Intermediate | Advanced',
      durationHours: 0,
      learningOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
      modules: [{ title: 'Module 1', lessons: ['Lesson 1'], project: 'Applied project' }],
      tools: ['Tools and technologies mentioned in the transcript'],
      assessment: 'Assessment plan',
      certificateCriteria: 'Completion criteria',
      missingContent: ['Important gaps to fill before publishing'],
    }, null, 2),
    '',
    'CONTENT RULES',
    '- Preserve the instructor\'s meaning, but remove repetition and filler.',
    '- Never invent certifications, placements, instructors, durations, outcomes, or tools not supported by the transcript; mark unknown values as null or add them to missingContent.',
    '- Break long sessions into lessons of 8–18 minutes with a practical checkpoint.',
    '- Include an applied project that can be completed online and reviewed by a mentor.',
    '- Write for a human learner: clear, specific, encouraging, and free of hype.',
  ].join('\\n')
}

