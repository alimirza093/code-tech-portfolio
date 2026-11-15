import {
  BriefcaseBusiness,
  ShoppingCart,
  Bot,
  Blocks,
  Search,
  Megaphone,
  ArrowRight,
  Sparkles,
  Gauge,
  Users,
  Handshake,
} from 'lucide-react';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const serviceHighlights = [
  {
    title: 'Website Development',
    description:
      'Modern, responsive, high-performance websites designed to represent your business professionally.',
    icon: BriefcaseBusiness,
    link: '/services',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Scalable online stores and shopping experiences that make selling products easier.',
    icon: ShoppingCart,
    link: '/services',
  },
  {
    title: 'AI Agents & Automation',
    description:
      'Intelligent automation systems that reduce repetitive tasks and improve business workflows.',
    icon: Bot,
    link: '/services',
  },
  {
    title: 'Custom Software & Web Applications',
    description:
      'Purpose-built software and web applications designed around your business requirements.',
    icon: Blocks,
    link: '/services',
  },
  {
    title: 'SEO & Digital Solutions',
    description:
      'Digital strategies and optimization that improve online visibility and support business growth.',
    icon: Search,
    link: '/services',
  },
  {
    title: 'Social Media Management',
    description:
      'Strategic content and digital presence management to help businesses connect with their audience.',
    icon: Megaphone,
    link: '/services',
  },
];

export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'We build modern, responsive, and high-performance websites that communicate your brand and create meaningful user experiences.',
    points: [
      'Business Websites',
      'Corporate Websites',
      'Portfolio Websites',
      'Landing Pages',
      'Custom Website Development',
      'Responsive Web Design',
    ],
    accent: 'from-blue-600/15 via-blue-500/5 to-transparent',
    icon: Sparkles,
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    description:
      'We develop professional online stores designed to simplify selling, improve customer experiences, and support business growth.',
    points: [
      'E-commerce Websites',
      'Product Catalogues',
      'Shopping Cart Systems',
      'Payment Integration',
      'Order Management',
      'Custom Storefronts',
    ],
    accent: 'from-sky-600/20 via-indigo-500/10 to-transparent',
    icon: ShoppingCart,
  },
  {
    id: 'ai-agents-automation',
    title: 'AI Agents & Automation',
    description:
      'We create intelligent automation systems that help businesses save time, improve efficiency, and simplify repetitive operations.',
    points: [
      'AI Chatbots',
      'AI Agents',
      'Workflow Automation',
      'n8n Automation',
      'Business Process Automation',
      'Customer Support Automation',
    ],
    accent: 'from-indigo-600/20 via-violet-500/10 to-transparent',
    icon: Bot,
  },
  {
    id: 'custom-software-web-apps',
    title: 'Custom Software & Web Applications',
    description:
      'We develop tailored digital applications and software solutions to solve specific business problems.',
    points: [
      'Custom Web Applications',
      'Business Management Systems',
      'Admin Dashboards',
      'Internal Business Tools',
      'Database-Driven Applications',
      'API Integrations',
    ],
    accent: 'from-blue-600/15 via-sky-500/10 to-transparent',
    icon: Blocks,
  },
  {
    id: 'seo-digital-solutions',
    title: 'SEO & Digital Solutions',
    description:
      'We help businesses improve their digital presence and make their websites more discoverable.',
    points: [
      'Technical SEO',
      'On-Page SEO',
      'Website Optimization',
      'Search Visibility',
      'Digital Strategy',
    ],
    accent: 'from-cyan-600/20 via-blue-500/10 to-transparent',
    icon: Search,
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description:
      'We help brands build consistent online identities and communicate effectively with their audiences.',
    points: [
      'Social Media Strategy',
      'Content Planning',
      'Creative Content',
      'Social Media Management',
      'Brand Communication',
    ],
    accent: 'from-indigo-500/15 via-blue-500/10 to-transparent',
    icon: Megaphone,
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your goals, requirements, and challenges.',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Plan the right digital solution.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design, develop, test, and refine.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Launch and support your digital solution.',
  },
];

export const valuePropositions = [
  {
    number: '01',
    title: 'Custom-Built Solutions',
    description: 'We focus on solutions that match your business goals.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'We use modern development tools and technologies.',
    icon: Gauge,
  },
  {
    number: '03',
    title: 'User-Centered Design',
    description: 'We create experiences that prioritize usability and clarity.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Long-Term Partnership',
    description: 'We believe in building lasting relationships with our clients.',
    icon: Handshake,
  },
];

export const aboutValues = [
  'Innovation',
  'Integrity',
  'Quality',
  'Creativity',
  'Collaboration',
  'Continuous Improvement',
];

export const footerServices = [
  'Website Development',
  'E-commerce Solutions',
  'AI Agents & Automation',
  'Custom Software',
  'SEO & Digital Solutions',
  'Social Media Management',
];

export const contactOptions = [
  'Website Development',
  'E-commerce Solutions',
  'AI Agents & Automation',
  'Custom Software & Web Applications',
  'SEO & Digital Solutions',
  'Social Media Management',
  'Other',
];

export const arrowIcon = ArrowRight;
