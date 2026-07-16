export type NavigationItem = {
  label: string;
  href: string;
};

export type BuildItem = {
  title: string;
  description: string;
  icon: 'systems' | 'platform' | 'automation' | 'dashboard' | 'data' | 'ai';
};

export type Project = {
  name: string;
  role: string;
  tools: string;
  problem: string;
  solution: string;
  features: string[];
  link?: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Experience = {
  title: string;
  organization: string;
  dateRange: string;
  highlights: string[];
};

export type PortfolioData = {
  navigation: NavigationItem[];
  buildItems: BuildItem[];
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
};

export const portfolioData: PortfolioData = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Builds', href: '#build' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  buildItems: [
    { title: 'Internal Systems', description: 'Tools for operations, approvals, records, and teams.', icon: 'systems' },
    { title: 'Power Platform', description: 'Apps, flows, dashboards, and low-code business tools.', icon: 'platform' },
    { title: 'Automations', description: 'Cleaner handoffs and fewer repetitive updates.', icon: 'automation' },
    { title: 'Dashboards', description: 'Readable views for status, performance, and decisions.', icon: 'dashboard' },
    { title: 'Data & Docs', description: 'Structured records, reporting, KBs, and document control.', icon: 'data' },
    { title: 'AI-Assisted Apps', description: 'Rapid prototypes, agents, and practical web tools built faster.', icon: 'ai' },
  ],
  projects: [
    {
      name: 'LVJR Toolkit',
      role: 'AI-Assisted Internal Tools Builder',
      tools: 'AI-assisted development, web utilities, QR generation, image utilities, PDF utilities, internal productivity workflows',
      problem: 'LVJR needed quick internal utilities for recurring admin and content tasks without building one large formal system.',
      solution: 'Created an internal productivity toolkit composed of small practical tools for QR generation, image utilities, PDF utilities, and related office workflows.',
      features: ['QR generator', 'Image utilities', 'PDF utilities', 'Internal tools', 'Admin workflows', 'AI-assisted build'],
    },
    {
      name: 'Amazing Stories',
      role: 'Internal Tools Developer / Power Apps Builder',
      tools: 'Power Apps Canvas, Power BI, Azure, Microsoft Graph APIs, SharePoint APIs, OpenAI integration, traditional web development prototype',
      problem: 'Employee commendations needed a more structured way to be submitted, reviewed, tracked, and reported.',
      solution: 'Built the original prototype with traditional coding and Microsoft cloud integrations, then recreated the tool as a Power Apps Canvas app with Power BI reporting support.',
      features: ['Commendation management', 'Power Apps Canvas rebuild', 'Power BI integration', 'Microsoft Graph APIs', 'SharePoint APIs', 'OpenAI prototype integration'],
    },
    {
      name: 'Mailing Assistant',
      role: 'Automation Tool Developer',
      tools: 'Python, Flask, email workflows, ticket-state logic, follow-up automation',
      problem: 'External communication, follow-ups, and ticket states needed a more organized way to be monitored and acted on.',
      solution: 'Created a Flask-based automation tool to support outbound communication, follow-up tracking, and workflow state management.',
      features: ['External communication', 'Follow-up automation', 'Ticket-state tracking', 'Python backend', 'Flask app', 'Workflow support'],
    },
    {
      name: 'LVJR Service Solutions Website',
      role: 'Website, Systems & Digital Operations Support',
      tools: 'Website updates, content structure, professional social media, Microsoft 365 admin, internal tools, Notion KB',
      problem: 'LVJR needed a stronger professional web presence for facility maintenance services, service requests, and multi-trade positioning.',
      solution: 'Supported the company\'s digital presence and operations through website support, internal tools, documentation, social media management, and Microsoft 365 administration.',
      features: ['Facility services site', 'Service request flow', 'Social media presence', 'M365 admin', 'Internal tools', 'Knowledge base'],
      link: 'https://lvjrservicesolutions.com/',
    },
    {
      name: 'TESDA CAR Website',
      role: 'Web Developer',
      tools: 'Responsive web, content updates, maintenance',
      problem: 'Public information and online service access needed to be easier to navigate.',
      solution: 'A maintained agency website with clearer pages, responsive layout, and content support.',
      features: ['Responsive UI', 'Public content', 'Maintenance', 'Service access'],
    },
    {
      name: 'LTWD Billing System',
      role: 'Web Developer / Database Support',
      tools: 'PHP, database management, web forms',
      problem: 'Billing records needed a more structured system for day-to-day operations.',
      solution: 'A database-backed billing tool for customer records, admin workflows, and reporting support.',
      features: ['Billing records', 'Database work', 'Admin workflows', 'Reports'],
    },
    {
      name: 'DRRMIS CLEARS',
      role: 'Web Developer',
      tools: 'Web systems, responsive UI, bug fixes, API deployment support',
      problem: 'An existing disaster risk management system needed maintenance and reliability improvements.',
      solution: 'System updates, bug fixes, responsive improvements, and API deployment support.',
      features: ['System fixes', 'Responsive updates', 'API support', 'Maintenance'],
    },
    {
      name: 'E-Tag Mo',
      role: 'Solutions Developer',
      tools: 'Web app concepts, forms, database records',
      problem: 'Tagging and record lookup needed a cleaner digital workflow.',
      solution: 'A web-based concept for capturing, tagging, and finding records faster.',
      features: ['Tagging flow', 'Record forms', 'Searchable data', 'Admin view'],
    },
    {
      name: 'Bulsa Wallet',
      role: 'Application Developer',
      tools: 'Web app, database design, account-style records',
      problem: 'Wallet-style records needed a simple interface for tracking activity.',
      solution: 'A practical account-style app focused on structured data and clear user flows.',
      features: ['Wallet UI', 'Record tracking', 'Database design', 'User flows'],
    },
  ],
  skills: [
    { title: 'Power Platform', skills: ['Power Apps', 'Power Automate', 'Power BI'] },
    { title: 'Web Tools', skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Vue.js', 'Next.js', 'Python', 'Flask'] },
    { title: 'Data & Documentation', skills: ['SQL', 'Database Design', 'Reporting', 'Data Management', 'Document Controller', 'KB Creation', 'Notion'] },
    { title: 'Microsoft Cloud & APIs', skills: ['Azure', 'Microsoft Graph APIs', 'SharePoint APIs', 'Microsoft 365 Admin'] },
    { title: 'AI Workflow', skills: ['Prompting', 'Rapid Prototyping', 'Debugging', 'Documentation', 'AI Agent Creation', 'Amazon Quick', 'OpenAI Integration', 'Notion AI Workflows'] },
    { title: 'Business Systems', skills: ['Internal Tools', 'Forms', 'Dashboards', 'Admin Panels', 'Workflow Mapping', 'Ticket-State Logic'] },
    { title: 'Digital Operations', skills: ['Professional Social Media Management', 'Content Planning', 'Project Management', 'UI/UX', 'Agile/Scrum', 'SEO'] },
  ],
  experience: [
    {
      title: 'Analyst II – Cloud Engineering',
      organization: 'DXC',
      dateRange: 'April 2023 – Present',
      highlights: [
        'Build automation and data-processing tools for internal workflows.',
        'Work with developers and stakeholders across design, testing, and delivery.',
      ],
    },
    {
      title: 'Web Developer',
      organization: 'DOST CAR',
      dateRange: 'October 2022 – March 2023',
      highlights: [
        'Maintained DRRMIS web systems with bug fixes, UI updates, and responsive improvements.',
        'Supported documented code updates and cloud API deployment work.',
      ],
    },
    {
      title: 'Web Developer',
      organization: 'Grin-I-Tech',
      dateRange: 'January 2022 – December 2022',
      highlights: [
        'Developed and maintained the La Trinidad Water District Billing System.',
        'Supported database management and operational system improvements.',
      ],
    },
  ],
  contact: {
    email: 'jsgalaus@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/jayrod-galaus',
    github: 'https://github.com/jayrodgalaus',
  },
};
