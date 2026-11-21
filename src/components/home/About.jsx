import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Code2,
  Download,
  Target,
  Users,
} from 'lucide-react';
import { cvUrl } from '../../profile';
import { projects, skillGroups } from '../../projects';
import { ProjectCard } from '../ProjectCard';

export function About() {
  return (
    <section className="about-section container" id="about">
      <h2>
        Discover more about
        <br />
        my journey
      </h2>
      <div className="about-content">
        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/portrait-000.jpg`}
            alt="Kong Bunyim"
            loading="lazy"
          />
          <div className="portrait-name">
            <span>
              <ArrowRight size={25} />
            </span>
            <h3>Kong Bunyim</h3>
          </div>
        </div>
        <div className="about-info">
          <h3>
            Full-Stack Developer based
            <br />
            in <span>Phnom Penh</span>
          </h3>
          <strong>Thoughtful work, from design to deployment.</strong>
          <p>
            I’m a Web & Mobile Application Development student at PSE Institute. I build responsive
            websites, full-stack applications, and management dashboards that connect useful
            interfaces with the systems behind them.
          </p>
          <p>
            My experience with Samai Distillery and Natixis has strengthened my approach to
            teamwork, problem-solving, and technical documentation. I’m always curious about new
            technologies and better ways to build.
          </p>
          <a className="text-link" href={cvUrl} download>
            Download my CV <Download size={17} />
          </a>
        </div>
      </div>
      <Skills />
      <Work />
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h3 className="subheading">My technical toolkit</h3>
      <div className="skills-content">
        <div className="skill-rows">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.title}>
              <h4>
                {group.title} <ArrowRight size={17} />
              </h4>
              <div className="tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="fullstack-panel">
          <div className="stack-ring">
            <div>
              <Code2 size={44} />
              <span>Full-Stack</span>
            </div>
          </div>
          <h4>Frontend to backend</h4>
          <p>Design. Develop. Connect.</p>
        </div>
      </div>
      <div className="soft-skills">
        <article>
          <Users size={28} />
          <h4>Teamwork</h4>
          <p>Different perspectives help us build stronger solutions together.</p>
        </article>
        <article>
          <Target size={28} />
          <h4>Problem Solving</h4>
          <p>Understanding real needs and turning them into practical solutions.</p>
        </article>
        <article>
          <ClipboardList size={28} />
          <h4>Communication</h4>
          <p>Clear documentation and shared understanding at every step.</p>
        </article>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="work-section" id="work">
      <h2>
        Project-focused
        <br />
        experience
      </h2>
      <p className="section-description">
        A selection of my work. Open a card to explore the finished website.
      </p>
      <div className="project-grid">
        {featured.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
      <Link className="button button-secondary all-projects" to="/projects">
        View all projects <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
