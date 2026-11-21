import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ArrowDown, Moon, Sun, Menu, X, Download, MapPin, Github, Mail, Code2, Database, PenTool, Check, Search, Copy, ExternalLink, ChevronLeft, Star, CircleCheck, Share2, Users, Target, ClipboardList, Phone, Contact as ContactIcon, ChevronsDown } from 'lucide-react';
import { projects, skillGroups } from './projects';
import repositories from './repositories.json';
import './styles.css';

const email = 'bunyimkong@gmail.com';
const cvUrl = `${import.meta.env.BASE_URL}Kong-Bunyim-CV.pdf`;

function useTheme() {
  const [preference, setPreference] = useState(() => { try { return localStorage.getItem('bunyim-theme'); } catch { return null; } });
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const dark = preference ? preference === 'dark' : systemDark;
  useEffect(() => { const media = window.matchMedia('(prefers-color-scheme: dark)'); const update = e => setSystemDark(e.matches); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; document.querySelector('meta[name="theme-color"]').content = dark ? '#141010' : '#fafafa'; }, [dark]);
  function toggle() { const value = dark ? 'light' : 'dark'; setPreference(value); try { localStorage.setItem('bunyim-theme', value); } catch { /* Theme still works when storage is unavailable. */ } }
  return [dark, toggle];
}

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = pathname === '/projects' ? 'Projects | Kong Bunyim' : 'Kong Bunyim | Full-Stack Developer';
    const timer = setTimeout(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); else window.scrollTo({ top: 0, behavior: 'instant' }); }, 30);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}
export function Header({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => { function close(e) { if (e.key === 'Escape') setOpen(false); } window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <header className="site-header"><div className="container header-inner">
    <Link to="/" className="brand" aria-label="Kong Bunyim, home"><span className="brand-mark">kb<span>.</span></span><span className="brand-name">Kong Bunyim<span>Full-Stack Developer</span></span></Link>
    <nav className={open ? 'nav open' : 'nav'} id="main-navigation" aria-label="Main navigation">
      <NavLink to="/" end className={({ isActive }) => isActive && !location.hash ? 'active' : ''}>Home</NavLink>
      <Link to="/#service">Service</Link><Link to="/#about">About</Link><NavLink to="/projects">Projects</NavLink><Link to="/#contact">Contact</Link>
      <Link to="/#contact" className="mobile-contact">Let’s talk <ArrowUpRight size={16}/></Link>
    </nav>
    <div className="header-actions"><button className="icon-button theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button><button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
function Eyebrow({ children, light = false }) { return <p className={`eyebrow${light ? ' light' : ''}`}><span/>{children}</p>; }
function ProjectCard({ project }) {
  const [failedImage, setFailedImage] = useState(false);
  return <article className="project-card"><a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} live website (opens in a new tab)`}>
    <div className="project-visual">
      {project.image && !failedImage ? <img src={project.image} alt={project.imageAlt} loading="lazy" onError={() => setFailedImage(true)}/> : <div className="project-placeholder"><Code2 size={54}/><span>{project.name}</span></div>}
    </div>
    <span className="live-pill"><span/> Live website</span>
    <div className="project-card-overlay"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><span className="project-open"><ArrowUpRight size={23}/></span></div>
  </a></article>;
}
function Hero() {
  return <section className="hero container" id="home">
    <div className="hero-copy"><span className="hello-badge"><Star size={18}/> Hello! I’m Bunyim</span>
      <h1>Transforming ideas into<br/>smooth and beautiful experiences.</h1>
      <p>I’m a full-stack developer based in Phnom Penh. I bring design and technology together to build thoughtful websites and applications—from the first interface to the systems behind it.</p>
      <div className="hero-buttons"><Link className="button" to="/#service">Explore <ArrowDown size={17}/></Link><Link className="button button-secondary" to="/#contact">Hire me! <ArrowUpRight size={17}/></Link></div>
    </div>
    <div className="hero-banner">
      <div className="banner-bookend"><strong>{projects.length}</strong><div className="banner-stars" aria-hidden="true">{[1,2,3,4,5].map(n => <Star size={14} key={n}/>)}</div><span>Live websites</span><Link to="/projects">Explore the work <ArrowUpRight size={15}/></Link></div>
      <div className="banner-feature"><span className="feature-icon"><CircleCheck size={22}/></span><h2>Clean Design</h2><p>Simple, responsive interfaces that feel natural to use.</p></div>
      <div className="banner-feature"><span className="feature-icon"><CircleCheck size={22}/></span><h2>Professional</h2><p>Thoughtful development, clear communication, and care in every detail.</p></div>
      <div className="banner-feature"><span className="feature-icon"><CircleCheck size={22}/></span><h2>Creative</h2><p>Bringing ideas to life through beautiful, functional web experiences.</p></div>
      <div className="banner-bookend"><Code2 size={43}/><strong className="stack-label">Full Stack</strong><span>From interface to database</span><a href={cvUrl} download>Download CV <Download size={15}/></a></div>
    </div>
  </section>;
}
function Services() {
  const services = [
    {title:'Mock up', icon:<PenTool size={29}/>, tool:'Figma', text:'I create clean, responsive interface mockups in Figma to explore ideas and shape the experience before development.'},
    {title:'Develop', icon:<Code2 size={29}/>, tool:'React.js & more', text:'I turn designs into responsive websites and dynamic applications with React, Next.js, Vue, and Nuxt.'},
    {title:'Integration', icon:<Share2 size={29}/>, tool:'APIs & databases', text:'I connect interfaces with backend services and data using Laravel, Spring Boot, Express, and SQL or NoSQL databases.'},
  ];
  return <section className="service-section container" id="service"><h2>Check out the easy<br/>way to bring your idea to life</h2><div className="service-grid">{services.map(service => <article className="service-card" key={service.title}><h3>{service.title}</h3><span className="service-icon">{service.icon}</span><span className="service-tool">— {service.tool}</span><p>{service.text}</p></article>)}</div><div className="promote-card"><div><h2>Have a website<br/><span>in mind?</span></h2><Link className="button button-white" to="/#contact">Contact me! <ArrowUpRight size={18}/></Link></div><p>Every good website starts with a conversation. Tell me about your idea, the people it’s for, and what you want it to do. Let’s turn it into a <strong>clear, useful, and enjoyable digital experience.</strong></p></div></section>;
}
function Work() {
  const featured = projects.filter(p => p.featured);
  return <section className="work-section" id="work"><h2>Project-focused<br/>experience</h2><p className="section-description">A selection of my work. Open a card to explore the finished website.</p><div className="project-grid">{featured.map(p => <ProjectCard project={p} key={p.id}/>)}</div><Link className="button button-secondary all-projects" to="/projects">View all projects <ArrowUpRight size={18}/></Link></section>;
}
function Skills() {
  return <section className="skills-section" id="skills"><h3 className="subheading">My technical toolkit</h3><div className="skills-content"><div className="skill-rows">{skillGroups.map(group => <div className="skill-row" key={group.title}><h4>{group.title} <ArrowRight size={17}/></h4><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div><div className="fullstack-panel"><div className="stack-ring"><div><Code2 size={44}/><span>Full-Stack</span></div></div><h4>Frontend to backend</h4><p>Design. Develop. Connect.</p></div></div><div className="soft-skills"><article><Users size={28}/><h4>Teamwork</h4><p>Different perspectives help us build stronger solutions together.</p></article><article><Target size={28}/><h4>Problem Solving</h4><p>Understanding real needs and turning them into practical solutions.</p></article><article><ClipboardList size={28}/><h4>Communication</h4><p>Clear documentation and shared understanding at every step.</p></article></div></section>;
}
function About() {
  return <section className="about-section container" id="about"><h2>Discover more about<br/>my journey</h2><div className="about-content"><div className="about-image"><img src={`${import.meta.env.BASE_URL}images/portrait-000.jpg`} alt="Kong Bunyim" loading="lazy"/><div className="portrait-name"><span><ArrowRight size={25}/></span><h3>Kong Bunyim</h3></div></div><div className="about-info"><h3>Full-Stack Developer based<br/>in <span>Phnom Penh</span></h3><strong>Thoughtful work, from design to deployment.</strong><p>I’m a Web & Mobile Application Development student at PSE Institute. I build responsive websites, full-stack applications, and management dashboards that connect useful interfaces with the systems behind them.</p><p>My experience with Samai Distillery and Natixis has strengthened my approach to teamwork, problem-solving, and technical documentation. I’m always curious about new technologies and better ways to build.</p><a className="text-link" href={cvUrl} download>Download my CV <Download size={17}/></a></div></div><Skills/><Work/></section>;
}
function Experience() { return <section className="section container experience-section" id="experience"><div className="experience-intro"><Eyebrow>LEARNING BY DOING</Eyebrow><h2>Experience &<br/>the journey so far<span className="blue-period">.</span></h2><p>Real projects, new perspectives,<br/>and something to learn every day.</p><a className="text-link" href={cvUrl} download>Get the full CV <Download size={17}/></a></div><div className="timeline"><article className="timeline-item"><div className="timeline-dot"/><div className="timeline-top"><span>EXPERIENCE</span><time>July 2026</time></div><h3>Full-Stack Developer</h3><h4>Samai Distillery</h4><p>Built an interactive product location map and admin dashboard, integrating responsive interfaces and database functionality. Created developer documentation and user instructions.</p><div className="tags"><span>Full-stack application</span><span>Interactive maps</span><span>Documentation</span></div></article><article className="timeline-item"><div className="timeline-dot"/><div className="timeline-top"><span>EXPERIENCE</span><time>June 2026</time></div><h3>Global Market</h3><h4>Natixis Corporate & Investment Banking</h4><p>Developed a client onboarding dashboard using data from Excel and SharePoint. Collaborated in an international banking environment and prepared instructions for the business management team.</p></article><article className="timeline-item"><div className="timeline-dot"/><div className="timeline-top"><span>EDUCATION</span><span>2025 — Present</span></div><h3>Web & Mobile Application Development</h3><h4>School of Business, PSE Institute</h4><p>Studying interface design, dynamic web development, relational databases, server-side business components, and deployment documentation.</p></article><article className="timeline-item"><div className="timeline-dot"/><div className="timeline-top"><span>EDUCATION</span><time>2024</time></div><h3>High School</h3><h4>Chea Sim Samaki High School</h4><p>Completed Grade 12.</p></article></div></section>; }
function Contact() {
  const [status, setStatus] = useState('');
  async function copyEmail() { try { await navigator.clipboard.writeText(email); setStatus('Email copied!'); } catch { setStatus('Please copy: ' + email); } }
  function composeEmail(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const body = `Hi Bunyim,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`; window.location.href = `mailto:${email}?subject=${encodeURIComponent('Portfolio enquiry from ' + data.get('name'))}&body=${encodeURIComponent(body)}`; setStatus('Your email app will open with your message. Send it there to get in touch.'); }
  return <><section className="promote-two container"><h2>Turning ideas into <span>interactive<br/>experiences</span> with me.</h2><a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); }} aria-label="Go to contact"><ChevronsDown size={30}/></a></section>
    <section className="contact-section container" id="contact"><span className="hello-badge"><ContactIcon size={18}/> Contact</span><h2>Let’s Build<br/>Something Together</h2><p className="section-description">Have a project or an opportunity in mind?<br/>Let’s work together to create something useful.</p><div className="contact-content"><div className="contact-info"><h3>Let’s Connect</h3><p>I’m interested in new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out.</p><a className="contact-detail" href={`mailto:${email}`}><span className="detail-icon"><Mail size={22}/></span><span><small>Email</small><strong>{email}</strong></span></a><a className="contact-detail" href="tel:+85517686388"><span className="detail-icon"><Phone size={22}/></span><span><small>Phone / Telegram</small><strong>+855 17 686 388</strong></span></a><div className="contact-detail"><span className="detail-icon"><MapPin size={22}/></span><span><small>Location</small><strong>Mean Chey, Phnom Penh</strong></span></div><div className="contact-socials"><a className="icon-button" href="https://github.com/bunyim-kong" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub"><Github size={21}/></a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{status === 'Email copied!' ? <Check size={20}/> : <Copy size={20}/>}</button><a href={cvUrl} download className="text-link">My CV <Download size={17}/></a></div></div><form className="contact-form" onSubmit={composeEmail}><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Your full name" required maxLength={100}/><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="your.email@example.com" required/><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Tell me about your project…" required maxLength={3000}/><button className="button button-blue" type="submit">Let’s start a conversation <ArrowUpRight size={18}/></button><p className="form-note">Opens your email app with your message ready to send.</p></form></div><p className="copy-status" role="status">{status}</p></section></>;
}
function Footer() { return <footer className="container footer"><Link className="footer-brand" to="/">kb<span>.</span></Link><p>© {new Date().getFullYear()} Kong Bunyim. Built with React & care.</p><Link className="text-link" to="/#home">Back to top <ArrowUpRight size={15}/></Link></footer>; }
export function Home() { return <><Hero/><Services/><About/><Experience/><Contact/></>; }
export function Projects() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const liveRepoNames = projects.map(p => p.repo?.split('/').pop()).filter(Boolean);
  const sourceRepos = repositories.filter(r => !liveRepoNames.includes(r.name) && r.name !== 'project-show');
  const matches = value => value.toLowerCase().includes(query.trim().toLowerCase());
  const shown = projects.filter(p => matches([p.name, p.category, ...p.tags].join(' ')));
  const sources = sourceRepos.filter(r => matches(r.name + ' ' + r.language));
  const count = (filter !== 'Source projects' ? shown.length : 0) + (filter !== 'Live websites' ? sources.length : 0);
  return <><section className="container projects-intro"><Link className="back-link" to="/"><ChevronLeft size={16}/> Back home</Link><Eyebrow>THE PROJECT COLLECTION</Eyebrow><h1>Ideas, brought to life<span className="blue-period">.</span></h1><p>Websites, applications, and experiments from my development journey.<br/>Open a live site, or take a look at the code behind the work.</p><div className="project-controls"><div className="filters" aria-label="Filter projects">{['All', 'Live websites', 'Source projects'].map(f => <button key={f} className={filter === f ? 'selected' : ''} onClick={() => setFilter(f)} aria-pressed={filter === f}>{f}</button>)}</div><label className="search"><Search size={18}/><input type="search" aria-label="Search projects" placeholder="Search projects or technology" value={query} onChange={e => setQuery(e.target.value)}/></label></div><p className="results-count" role="status">{count} {count === 1 ? 'project' : 'projects'}{query && ` matching “${query}”`}</p></section>
    <section className="container projects-collection" aria-label="Project results">{filter !== 'Source projects' && shown.length > 0 && <><h2 className="collection-title">Live websites <span>{shown.length}</span></h2><div className="project-grid">{shown.map(p => <ProjectCard project={p} key={p.id} index={projects.indexOf(p)}/>)}</div></>}{filter !== 'Live websites' && sources.length > 0 && <div className="source-section"><div className="section-heading"><div><Eyebrow>BEHIND THE INTERFACE</Eyebrow><h2>Applications & source projects</h2></div></div><p className="section-description">More from my GitHub collection. A public demo link isn’t listed for these projects; explore their source code below.</p><div className="source-list">{sources.map(repo => <article className="source-row" key={repo.name}><Code2 size={22}/><div><h3>{repo.name.replace(/[-_]+/g, ' ')}</h3><span>{repo.language}</span></div><a href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${repo.name} source on GitHub (opens in a new tab)`}>View source <Github size={16}/><ArrowUpRight size={15}/></a></article>)}</div></div>}{count === 0 && <div className="empty-state"><Search size={36}/><h2>No projects found</h2><p>Try another name or technology.</p><button className="button" onClick={() => { setQuery(''); setFilter('All'); }}>Reset filters</button></div>}</section><Contact/></>;
}
function NotFound() { return <section className="container empty-state"><h1>Page not found.</h1><Link to="/" className="button">Back to home <ArrowRight size={18}/></Link></section>; }
function App() { const [dark, toggle] = useTheme(); return <HashRouter><RouteEffects/><a className="skip-link" href="#main" onClick={e => { e.preventDefault(); document.getElementById('main').focus(); document.getElementById('main').scrollIntoView(); }}>Skip to content</a><Header dark={dark} toggle={toggle}/><main id="main" tabIndex={-1}><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></HashRouter>; }

if (typeof document !== 'undefined') createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
