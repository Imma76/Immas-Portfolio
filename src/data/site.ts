import type { ImageMetadata } from 'astro';

import foodNinja1 from '../assets/projects/food_ninja-1.png';
import foodNinja2 from '../assets/projects/food_ninja-2.png';
import foodNinja3 from '../assets/projects/food_ninja-3.png';
import foodNinja4 from '../assets/projects/food_ninja-4.png';
import allNews1 from '../assets/projects/allnews-1.png';
import allNews2 from '../assets/projects/allnews-2.png';
import allNews3 from '../assets/projects/allnews-3.png';
import consult1 from '../assets/projects/consult-1.png';
import consult2 from '../assets/projects/consult-2.png';
import consult3 from '../assets/projects/consult-3.png';
import hideout1 from '../assets/projects/hideout-1.jpg';
import hideout2 from '../assets/projects/hideout-2.jpg';
import owed from '../assets/projects/owed-1.jpg';
import soctral from '../assets/projects/soctral-1.jpg';
import salon from '../assets/projects/salon_booking_app-1.png';
import nestTodo from '../assets/projects/nest_todo-1.png';
import sqlBlog from '../assets/projects/nest_blog-1.png';
import genesysBlog from '../assets/projects/genesys_blog-1.png';

export const profile = {
  name: 'Emmanuel Ugwueze',
  role: 'Software Engineer',
  headline: 'Software engineer.',
  tagline: 'I ship Flutter apps and the backends behind them.',
  summary:
    'Software engineer with 6+ years shipping production Flutter apps for Android and iOS across fintech, booking, travel and social products, plus the Node.js and NestJS services that power them. I work remotely with teams in the US, Europe and Nigeria.',
  location: 'Enugu, Nigeria · UTC+1',
  availability: 'Open to remote and contract work',
  email: 'emmanuelugwueze6@gmail.com',
  github: 'https://github.com/Imma76',
  linkedin: 'https://www.linkedin.com/in/emmanuel-ugwueze-8b5686168',
};

export const stats = [
  { value: '6+', label: 'years shipping production apps' },
  { value: 'iOS + Android', label: 'from one Flutter codebase' },
  { value: 'Full stack', label: 'Flutter front end, Node.js / NestJS back end' },
  { value: 'Remote', label: 'teams in the US, EU and Nigeria' },
];

type Link = { label: string; href: string };

export type Project = {
  title: string;
  kind: 'mobile' | 'web' | 'qr';
  summary: string;
  year?: string;
  role?: string;
  stack: string[];
  screens?: ImageMetadata[];
  links?: Link[];
};

export const projects: Project[] = [
  {
    title: 'Owed',
    kind: 'web',
    summary:
      'AI agent that gets freelancers paid, built for the PayPal AI Hackathon. Tell it who to bill by typing or by voice, and it sends real PayPal invoices, works out who is late, writes reminders in the right tone for each client and sets up installment plans. An OpenAI agent loop drives 11 Zod-validated tools that read and write PayPal directly.',
    year: '2026',
    role: 'Full-stack developer',
    stack: ['Next.js', 'React', 'TypeScript', 'OpenAI API', 'PayPal Invoicing API', 'SQLite', 'Zod'],
    screens: [owed],
    links: [{ label: 'GitHub', href: 'https://github.com/Imma76/owed' }],
  },
  {
    title: 'Food Ninja',
    kind: 'mobile',
    summary:
      'Food ordering app UI. Splash, onboarding and home screens built in Flutter from the design.',
    year: '2024',
    role: 'Flutter developer',
    stack: ['Flutter', 'Dart'],
    screens: [foodNinja1, foodNinja2, foodNinja3, foodNinja4],
  },
  {
    title: 'The Hideout QR Menu',
    kind: 'qr',
    summary:
      'QR code menu system for The Hideout, a restaurant and lakeside lounge. Guests scan a code at the table and get the full food and drinks menu on their phone, priced in naira. Built end to end: the guest menu, an admin dashboard for managing items, and a NestJS API, so unavailable items are hidden automatically and nothing needs reprinting.',
    role: 'Full-stack developer',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Cloudinary', 'JavaScript'],
    screens: [hideout1, hideout2],
    links: [{ label: 'Live site', href: 'https://www.thehideoutrestroandlakesidelounge.com/' }],
  },
  {
    title: 'Soctral',
    kind: 'web',
    summary:
      'Escrow marketplace for buying and selling social media accounts with crypto. I built the backend outside the blockchain integrations: a NestJS and MongoDB API for escrow deals, buy and sell orders, disputes and appeals, KYC, admin tools, and email and SMS verification. I also built encrypted wallet storage with transaction PINs, live balance updates over WebSockets, trade and support chat on Stream Chat, web push notifications, and OpenTelemetry tracing with logs shipped to DigitalOcean Spaces.',
    role: 'Backend developer',
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Socket.IO', 'Stream Chat', 'Twilio', 'OpenTelemetry', 'Docker'],
    screens: [soctral],
    links: [{ label: 'Live site', href: 'https://soctral.com' }],
  },
  {
    title: 'All News',
    kind: 'mobile',
    summary:
      'News app that pulls the latest stories from multiple sources, with search across about 64 countries and category tabs for business, health, sport and tech.',
    year: '2023',
    role: 'Flutter developer',
    stack: ['Flutter', 'Dart', 'REST APIs'],
    screens: [allNews2, allNews1, allNews3],
    links: [{ label: 'GitHub', href: 'https://github.com/Imma76/allNews' }],
  },
  {
    title: 'Consult',
    kind: 'mobile',
    summary:
      'Teamed up with a designer to bring to life an app for getting professional consultation from the best consultants near you, with patient sign-up and sign-in flows.',
    year: '2023',
    role: 'Flutter developer',
    stack: ['Flutter', 'Dart'],
    screens: [consult1, consult2, consult3],
    links: [{ label: 'GitHub', href: 'https://github.com/Imma76/consult_patient' }],
  },
  {
    title: 'Salon Booking Web App',
    kind: 'web',
    summary:
      'Web app that lets salons book customers into appointments online, with service menus, pricing and scheduling.',
    year: '2023',
    role: 'Flutter developer',
    stack: ['Flutter Web', 'Dart', 'Express.js', 'Node.js'],
    screens: [salon],
    links: [
      { label: 'View site', href: 'https://timmytestdomain123.co/home/salon?id=65d54949997b1934f6a46580' },
    ],
  },
];

export const backendProjects: Project[] = [
  {
    title: 'Todo API',
    kind: 'web',
    summary: 'CRUD API for todos with typed data access and documented endpoints.',
    year: '2023',
    stack: ['NestJS', 'Prisma', 'PostgreSQL'],
    screens: [nestTodo],
    links: [
      { label: 'GitHub', href: 'https://github.com/Imma76/nest_todo' },
      { label: 'API docs', href: 'https://documenter.getpostman.com/view/30310602/2sA3XJjQ7z' },
    ],
  },
  {
    title: 'Blog API',
    kind: 'web',
    summary: 'Blog backend for creating, reading, updating and deleting posts, backed by SQL.',
    year: '2023',
    stack: ['Express.js', 'Node.js', 'PostgreSQL'],
    screens: [sqlBlog],
    links: [{ label: 'GitHub', href: 'https://github.com/Imma76/sql_blog' }],
  },
  {
    title: 'Genesys Blog',
    kind: 'web',
    summary: "Genesys Tech Hub's in-house blog backend, built and maintained during my internship.",
    year: '2023',
    stack: ['Express.js', 'Node.js', 'MongoDB'],
    screens: [genesysBlog],
    links: [
      { label: 'GitHub', href: 'https://github.com/Genesys-interns/Genesys-blog-backend/tree/develop' },
      { label: 'API docs', href: 'https://documenter.getpostman.com/view/21945976/UzQuQmPL' },
    ],
  },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'Glamiris',
    where: 'US · Remote',
    current: true,
    points: [
      'Build and ship backend features across every customer-facing platform of a salon-booking product used by salons, stylists and customers.',
      'Maintain and scale booking operations as the platform grows.',
      'Wrote integration tests for the booking app, improving stability and helping resolve critical bugs.',
    ],
  },
  {
    role: 'Lead Mobile Developer',
    company: 'Orbtech Professional Services',
    where: 'Nigeria',
    points: [
      'Led mobile development projects, delivering client Flutter apps built to best practices.',
      'Owned architecture, code review and API integration for complex features.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Uridium Technologies',
    where: 'Nigeria',
    points: [
      'Built the send-money, transaction-history and bill-payment flows for a live banking app.',
      'Helped rebuild the app from scratch and bring the new version live for users.',
      'Worked with the backend team to define API contracts so transaction data matched end to end.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'GreenArt House',
    where: 'Nigeria',
    points: ['Shipped two apps from design to release with Flutter and Firebase: a lifestyle travel app and a dating app.'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Genesys Tech Hub',
    where: 'Nigeria',
    points: ["Built and maintained Genesys Blog, the company's in-house blog, with Node.js, Express and REST APIs."],
  },
];

export const skills = [
  { group: 'Languages', items: ['Dart', 'TypeScript', 'JavaScript'] },
  { group: 'Mobile', items: ['Flutter', 'iOS', 'Android', 'Material', 'Cupertino', 'Google ML Kit'] },
  { group: 'State and architecture', items: ['Riverpod', 'Provider', 'GetX', 'MobX', 'get_it'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST', 'GraphQL', 'JWT auth', 'Zod'] },
  { group: 'Web', items: ['Next.js', 'React', 'HTML', 'CSS'] },
  { group: 'Data and storage', items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'SQLite', 'Firebase', 'Cloudinary'] },
  { group: 'Cloud and deployment', items: ['AWS (EC2, S3)', 'Heroku', 'Vercel', 'Firebase Hosting'] },
  { group: 'AI', items: ['OpenAI API', 'Claude', 'Cursor', 'GitHub Copilot'] },
  { group: 'Testing and tools', items: ['Integration testing', 'Firebase Test Lab', 'Postman', 'Git', 'GitHub', 'Bitbucket', 'Android Studio', 'VS Code'] },
];

export const education = {
  degree: 'B.Sc. Computer Science',
  school: 'Coal City University, Enugu',
  year: '2023',
};
