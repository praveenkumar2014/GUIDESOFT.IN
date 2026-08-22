import type { IconName } from '../components/ui'

export type CareerRole = {
  id: string
  title: string
  shortTitle: string
  icon: IconName
  description: string
  outcome: string
  focusTerms: string[]
  skills: string[]
}

export type ExploreCategory = {
  id: string
  title: string
  icon: IconName
  description: string
  courseCategoryId: string
  focusTerms: string[]
}

export type LearningPath = {
  id: string
  title: string
  eyebrow: string
  icon: IconName
  description: string
  outcome: string
  topics: string[]
}

export type OpenSourceLab = {
  id: string
  title: string
  eyebrow: string
  description: string
  stack: string[]
  license: string
  githubUrl: string
  icon: IconName
}

export const careerRoles: CareerRole[] = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    shortTitle: 'Data analytics',
    icon: 'chart',
    description: 'Turn messy questions into useful analysis, clear dashboards, and decisions people can act on.',
    outcome: 'Build a portfolio-ready analysis from raw data to recommendation.',
    focusTerms: ['data', 'analytics', 'sql', 'excel', 'power bi', 'python'],
    skills: ['SQL', 'Python', 'Excel', 'Power BI', 'Data storytelling'],
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    shortTitle: 'Project management',
    icon: 'briefcase',
    description: 'Learn to frame work, align people, and keep complex projects moving with calm, visible systems.',
    outcome: 'Create a practical delivery plan with milestones, risks, and stakeholder rituals.',
    focusTerms: ['project', 'business', 'agile', 'enterprise', 'professional'],
    skills: ['Planning', 'Agile delivery', 'Risk management', 'Communication', 'Reporting'],
  },
  {
    id: 'cyber-security-analyst',
    title: 'Cyber Security Analyst',
    shortTitle: 'Cybersecurity',
    icon: 'security',
    description: 'Develop the foundations for finding threats, protecting systems, and responding with discipline.',
    outcome: 'Document a security baseline and a response playbook for a small environment.',
    focusTerms: ['cyber', 'security', 'linux', 'network', 'testing'],
    skills: ['Threat awareness', 'Linux', 'Networking', 'Security controls', 'Incident response'],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    shortTitle: 'Data science',
    icon: 'ai',
    description: 'Move from a business question to a defensible model, useful experiment, and honest explanation.',
    outcome: 'Ship a small, explainable model with documented assumptions and evaluation.',
    focusTerms: ['data science', 'machine learning', 'python', 'analytics', 'ai'],
    skills: ['Python', 'Statistics', 'Machine learning', 'Experiment design', 'Model evaluation'],
  },
  {
    id: 'business-intelligence-analyst',
    title: 'Business Intelligence Analyst',
    shortTitle: 'Business intelligence',
    icon: 'chart',
    description: 'Connect operational data to the dashboards and narratives that help teams make better calls.',
    outcome: 'Design a decision-ready reporting workspace with clear metrics and definitions.',
    focusTerms: ['business intelligence', 'data', 'analytics', 'power bi', 'database'],
    skills: ['Data modeling', 'SQL', 'Power BI', 'KPI design', 'Stakeholder reporting'],
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    shortTitle: 'Digital marketing',
    icon: 'megaphone',
    description: 'Build a modern marketing practice around audience insight, content systems, and measurable experiments.',
    outcome: 'Plan a campaign with a real audience, channel mix, creative brief, and measurement loop.',
    focusTerms: ['marketing', 'digital marketing', 'content', 'business'],
    skills: ['Campaign planning', 'Content strategy', 'Analytics', 'SEO foundations', 'Experimentation'],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI / UX Designer',
    shortTitle: 'UI / UX design',
    icon: 'design',
    description: 'Turn user needs into clear flows, thoughtful interfaces, and prototypes that invite useful feedback.',
    outcome: 'Take one product problem from research to tested, high-fidelity prototype.',
    focusTerms: ['ux', 'ui', 'design', 'figma', 'product'],
    skills: ['UX research', 'Interaction design', 'Figma', 'Prototyping', 'Design systems'],
  },
  {
    id: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    shortTitle: 'Machine learning engineering',
    icon: 'ai',
    description: 'Learn the engineering discipline behind dependable data pipelines, models, evaluation, and deployment.',
    outcome: 'Design a small model service with an evaluation plan and deployment boundary.',
    focusTerms: ['machine learning', 'ai', 'python', 'cloud', 'devops'],
    skills: ['Python', 'ML systems', 'Model deployment', 'Cloud foundations', 'Evaluation'],
  },
  {
    id: 'social-media-specialist',
    title: 'Social Media Specialist',
    shortTitle: 'Social media',
    icon: 'megaphone',
    description: 'Create a consistent social system that connects voice, content production, community, and learning loops.',
    outcome: 'Build a four-week content system with reusable formats and measurable signals.',
    focusTerms: ['social', 'content', 'marketing', 'creative'],
    skills: ['Content planning', 'Creative direction', 'Community', 'Analytics', 'AI-assisted workflows'],
  },
  {
    id: 'computer-support-specialist',
    title: 'Computer Support Specialist',
    shortTitle: 'Computer support',
    icon: 'tools',
    description: 'Build practical troubleshooting, systems, networking, and service habits that make technology feel dependable.',
    outcome: 'Create a support runbook for diagnosing and resolving common user issues.',
    focusTerms: ['computer', 'support', 'linux', 'network', 'systems'],
    skills: ['Troubleshooting', 'Operating systems', 'Networking', 'Documentation', 'Service thinking'],
  },
]

export const exploreCategories: ExploreCategory[] = [
  { id: 'artificial-intelligence', title: 'Artificial Intelligence', icon: 'ai', description: 'Understand and build with modern AI systems.', courseCategoryId: 'ai--generative-ai', focusTerms: ['ai', 'artificial intelligence', 'machine learning', 'generative'] },
  { id: 'business', title: 'Business', icon: 'briefcase', description: 'Build the operating and communication skills behind useful work.', courseCategoryId: 'business--entrepreneurship', focusTerms: ['business', 'project', 'enterprise', 'entrepreneur'] },
  { id: 'data-science', title: 'Data Science', icon: 'chart', description: 'Find patterns, communicate evidence, and build analysis.', courseCategoryId: 'data-science--analytics', focusTerms: ['data', 'analytics', 'machine learning', 'python', 'sql'] },
  { id: 'information-technology', title: 'Information Technology', icon: 'settings', description: 'Learn the systems, infrastructure, and support skills teams rely on.', courseCategoryId: 'enterprise--professional', focusTerms: ['it', 'cloud', 'devops', 'network', 'support', 'systems'] },
  { id: 'computer-science', title: 'Computer Science', icon: 'code', description: 'Strengthen programming foundations and software thinking.', courseCategoryId: 'full-stack-development', focusTerms: ['software', 'programming', 'developer', 'full-stack', 'computer'] },
  { id: 'healthcare', title: 'Healthcare technology', icon: 'badge', description: 'Explore digital workflows, data, and responsible technology in care.', courseCategoryId: 'enterprise--professional', focusTerms: ['technology', 'data', 'business', 'professional'] },
  { id: 'engineering', title: 'Physical science & engineering', icon: 'flask', description: 'Use technical thinking, systems, and computation to solve harder problems.', courseCategoryId: 'testing--quality', focusTerms: ['engineering', 'systems', 'testing', 'python', 'data'] },
  { id: 'personal-development', title: 'Personal development', icon: 'school', description: 'Build the habits and communication practices that make technical growth sustainable.', courseCategoryId: 'career--industry-programs', focusTerms: ['career', 'professional', 'communication', 'business'] },
  { id: 'social-sciences', title: 'Social sciences', icon: 'network', description: 'Understand people, teams, behavior, and the systems around technology.', courseCategoryId: 'business--entrepreneurship', focusTerms: ['business', 'product', 'research', 'communication'] },
  { id: 'language-learning', title: 'Language learning', icon: 'megaphone', description: 'Improve the communication layer behind collaboration and opportunity.', courseCategoryId: 'content--creative-ai', focusTerms: ['content', 'communication', 'creative'] },
  { id: 'arts-humanities', title: 'Arts & humanities', icon: 'design', description: 'Develop the creative, cultural, and critical thinking that give products meaning.', courseCategoryId: 'ux-ui--product-design', focusTerms: ['design', 'creative', 'content', 'ux'] },
]

export const certificateTracks: LearningPath[] = [
  { id: 'business', title: 'Business certificates', eyebrow: 'Professional certificate', icon: 'briefcase', description: 'Practical programs for planning, operations, communication, and modern business work.', outcome: 'Finish with a workplace-ready project and a clear evidence trail.', topics: ['Project delivery', 'Business intelligence', 'Digital marketing', 'Product thinking'] },
  { id: 'computer-science', title: 'Computer science certificates', eyebrow: 'Professional certificate', icon: 'code', description: 'Structured programs for developers who want foundations, projects, and stronger engineering habits.', outcome: 'Build and explain a working software project from brief to release.', topics: ['Programming', 'Full-stack development', 'Testing', 'Developer tools'] },
  { id: 'data-science', title: 'Data science certificates', eyebrow: 'Professional certificate', icon: 'chart', description: 'Practice the full data workflow: question, analysis, model, communication, and decision.', outcome: 'Create a portfolio piece grounded in real analysis and honest evaluation.', topics: ['Python', 'SQL', 'Analytics', 'Machine learning'] },
  { id: 'information-technology', title: 'Information technology certificates', eyebrow: 'Professional certificate', icon: 'settings', description: 'Learn the infrastructure, systems, security, and support layer behind dependable products.', outcome: 'Document, secure, and operate a small technical environment.', topics: ['Cloud', 'DevOps', 'Cybersecurity', 'Computer support'] },
]

export const degreePathways: LearningPath[] = [
  { id: 'bachelors', title: "Bachelor's pathway", eyebrow: 'Online degree pathway', icon: 'school', description: 'A flexible foundation for building breadth across software, data, design, and professional practice.', outcome: 'Build a durable foundation before choosing a deeper technical direction.', topics: ['Foundations', 'Projects', 'Communication', 'Career readiness'] },
  { id: 'masters', title: "Master's pathway", eyebrow: 'Online degree pathway', icon: 'badge', description: 'Advanced study for professionals ready to connect systems thinking, evidence, and leadership.', outcome: 'Turn experience into deeper specialization and higher-leverage work.', topics: ['Advanced practice', 'Research', 'Leadership', 'Applied systems'] },
  { id: 'university-certificates', title: 'University certificate pathway', eyebrow: 'University learning', icon: 'layers', description: 'Focused academic study for a specific skill area without committing to a full degree.', outcome: 'Add recognized depth to the direction you already have.', topics: ['Focused study', 'Applied projects', 'Assessment', 'Transferable credit'] },
]

export const trendingSkills = [
  { id: 'python', title: 'Python', icon: 'python' as IconName, query: 'Python' },
  { id: 'artificial-intelligence', title: 'Artificial Intelligence', icon: 'ai' as IconName, query: 'Artificial Intelligence' },
  { id: 'excel', title: 'Excel', icon: 'chart' as IconName, query: 'Excel' },
  { id: 'machine-learning', title: 'Machine Learning', icon: 'ai' as IconName, query: 'Machine Learning' },
  { id: 'sql', title: 'SQL', icon: 'database' as IconName, query: 'SQL' },
  { id: 'project-management', title: 'Project Management', icon: 'briefcase' as IconName, query: 'Project Management' },
  { id: 'power-bi', title: 'Power BI', icon: 'chart' as IconName, query: 'Power BI' },
  { id: 'marketing', title: 'Marketing', icon: 'megaphone' as IconName, query: 'Marketing' },
]

export const certificationPrep: LearningPath[] = [
  { id: 'cloud-foundations', title: 'Cloud foundations prep', eyebrow: 'Certification preparation', icon: 'cloud', description: 'Build the vocabulary and systems understanding needed before a cloud certification sprint.', outcome: 'Study with a practical lab plan instead of memorizing isolated terms.', topics: ['Cloud concepts', 'Security', 'Networking', 'Operations'] },
  { id: 'security-foundations', title: 'Security foundations prep', eyebrow: 'Certification preparation', icon: 'security', description: 'Create a disciplined study path across threats, controls, systems, and response.', outcome: 'Turn certification objectives into a working security notebook.', topics: ['Threats', 'Identity', 'Network security', 'Risk'] },
  { id: 'data-analytics-foundations', title: 'Data analytics prep', eyebrow: 'Certification preparation', icon: 'chart', description: 'Practice the analysis concepts, tools, and communication patterns behind data credentials.', outcome: 'Demonstrate the complete analysis workflow in a portfolio project.', topics: ['Data cleaning', 'SQL', 'Dashboards', 'Storytelling'] },
  { id: 'project-delivery-foundations', title: 'Project delivery prep', eyebrow: 'Certification preparation', icon: 'briefcase', description: 'Translate project frameworks into the everyday artifacts and conversations teams actually use.', outcome: 'Build a complete delivery kit with scope, plan, risks, and review.', topics: ['Scope', 'Planning', 'Risk', 'Stakeholders'] },
]

export const openSourceLabs: OpenSourceLab[] = [
  { id: 'learnhouse', title: 'Study a modern open-source LMS', eyebrow: 'Open-source learning lab', description: 'Explore how a course platform can bring together students, teachers, course editing, and learning progress.', stack: ['React', 'Python', 'Tiptap'], license: 'AGPL-3.0', githubUrl: 'https://github.com/learnhouse/learnhouse', icon: 'layers' },
  { id: 'lessonkit', title: 'Build trackable learning content', eyebrow: 'Open-source learning lab', description: 'Learn the ideas behind accessible course players, xAPI telemetry, and portable learning packages.', stack: ['React', 'xAPI', 'SCORM'], license: 'Open source', githubUrl: 'https://github.com/eddiethedean/lessonkit', icon: 'play' },
  { id: 'paideia', title: 'Understand a headless LMS stack', eyebrow: 'Open-source learning lab', description: 'Map a modular LMS architecture across content, course management, grading, and a learner experience.', stack: ['React', 'Payload CMS', 'Postgres'], license: 'Open source', githubUrl: 'https://github.com/paideia-lms/Paideia', icon: 'database' },
  { id: 'lms-front', title: 'Explore a multi-tenant school model', eyebrow: 'Open-source learning lab', description: 'Study how branded schools, course authors, learners, certificates, and permissions fit together.', stack: ['Next.js', 'Supabase', 'RLS'], license: 'Open source', githubUrl: 'https://github.com/guillermoscript/lms-front', icon: 'network' },
]
