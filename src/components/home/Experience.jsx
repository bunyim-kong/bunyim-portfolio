import { Download } from 'lucide-react';
import { cvUrl } from '../../profile';
import { Eyebrow } from '../Eyebrow';

export function Experience() {
  return (
    <section className="section container experience-section" id="experience">
      <div className="experience-intro">
        <Eyebrow>LEARNING BY DOING</Eyebrow>
        <h2>
          Experience &<br />
          the journey so far<span className="blue-period">.</span>
        </h2>
        <p>
          Real projects, new perspectives,
          <br />
          and something to learn every day.
        </p>
        <a className="text-link" href={cvUrl} download>
          Get the full CV <Download size={17} />
        </a>
      </div>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-top">
            <span>EXPERIENCE</span>
            <time>July 2026</time>
          </div>
          <h3>Full-Stack Developer</h3>
          <h4>Samai Distillery</h4>
          <p>
            Built an interactive product location map and admin dashboard, integrating responsive
            interfaces and database functionality. Created developer documentation and user
            instructions.
          </p>
          <div className="tags">
            <span>Full-stack application</span>
            <span>Interactive maps</span>
            <span>Documentation</span>
          </div>
        </article>
        <article className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-top">
            <span>EXPERIENCE</span>
            <time>June 2026</time>
          </div>
          <h3>Global Market</h3>
          <h4>Natixis Corporate & Investment Banking</h4>
          <p>
            Developed a client onboarding dashboard using data from Excel and SharePoint.
            Collaborated in an international banking environment and prepared instructions for the
            business management team.
          </p>
        </article>
        <article className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-top">
            <span>EDUCATION</span>
            <span>2025 — Present</span>
          </div>
          <h3>Web & Mobile Application Development</h3>
          <h4>School of Business, PSE Institute</h4>
          <p>
            Studying interface design, dynamic web development, relational databases, server-side
            business components, and deployment documentation.
          </p>
        </article>
        <article className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-top">
            <span>EDUCATION</span>
            <time>2024</time>
          </div>
          <h3>High School</h3>
          <h4>Chea Sim Samaki High School</h4>
          <p>Completed Grade 12.</p>
        </article>
      </div>
    </section>
  );
}
