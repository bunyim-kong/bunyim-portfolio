import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, CircleCheck, Code2, Download, Star } from 'lucide-react';
import { cvUrl } from '../../profile';
import { projects } from '../../projects';

export function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <span className="hello-badge">
          <Star size={18} /> Hello! I’m Bunyim
        </span>
        <h1>
          Transforming ideas into
          <br />
          smooth and beautiful experiences.
        </h1>
        <p>
          I’m a full-stack developer based in Phnom Penh. I bring design and technology together to
          build thoughtful websites and applications—from the first interface to the systems behind
          it.
        </p>
        <div className="hero-buttons">
          <Link className="button" to="/#service">
            Explore <ArrowDown size={17} />
          </Link>
          <Link className="button button-secondary" to="/#contact">
            Hire me! <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="hero-banner">
        <div className="banner-bookend">
          <strong>{projects.length}</strong>
          <div className="banner-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star size={14} key={n} />
            ))}
          </div>
          <span>Live websites</span>
          <Link to="/projects">
            Explore the work <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="banner-feature">
          <span className="feature-icon">
            <CircleCheck size={22} />
          </span>
          <h2>Clean Design</h2>
          <p>Simple, responsive interfaces that feel natural to use.</p>
        </div>
        <div className="banner-feature">
          <span className="feature-icon">
            <CircleCheck size={22} />
          </span>
          <h2>Professional</h2>
          <p>Thoughtful development, clear communication, and care in every detail.</p>
        </div>
        <div className="banner-feature">
          <span className="feature-icon">
            <CircleCheck size={22} />
          </span>
          <h2>Creative</h2>
          <p>Bringing ideas to life through beautiful, functional web experiences.</p>
        </div>
        <div className="banner-bookend">
          <Code2 size={43} />
          <strong className="stack-label">Full Stack</strong>
          <span>From interface to database</span>
          <a href={cvUrl} download>
            Download CV <Download size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
