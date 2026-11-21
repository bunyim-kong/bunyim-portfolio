import { useState } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';

export function ProjectCard({ project }) {
  const [failedImage, setFailedImage] = useState(false);
  return (
    <article className="project-card">
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} live website (opens in a new tab)`}
      >
        <div className="project-visual">
          {project.image && !failedImage ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              onError={() => setFailedImage(true)}
            />
          ) : (
            <div className="project-placeholder">
              <Code2 size={54} />
              <span>{project.name}</span>
            </div>
          )}
        </div>
        <span className="live-pill">
          <span /> Live website
        </span>
        <div className="project-card-overlay">
          <span className="project-category">{project.category}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span className="project-open">
            <ArrowUpRight size={23} />
          </span>
        </div>
      </a>
    </article>
  );
}
