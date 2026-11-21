import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, Code2, Github, Search } from 'lucide-react';
import { Contact } from '../components/Contact';
import { Eyebrow } from '../components/Eyebrow';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../projects';
import repositories from '../repositories.json';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const liveRepoNames = projects.map((p) => p.repo?.split('/').pop()).filter(Boolean);
  const sourceRepos = repositories.filter(
    (r) => !liveRepoNames.includes(r.name) && r.name !== 'project-show'
  );
  const matches = (value) => value.toLowerCase().includes(query.trim().toLowerCase());
  const shown = projects.filter((p) => matches([p.name, p.category, ...p.tags].join(' ')));
  const sources = sourceRepos.filter((r) => matches(r.name + ' ' + r.language));
  const count =
    (filter !== 'Source projects' ? shown.length : 0) +
    (filter !== 'Live websites' ? sources.length : 0);
  return (
    <>
      <section className="container projects-intro">
        <Link className="back-link" to="/">
          <ChevronLeft size={16} /> Back home
        </Link>
        <Eyebrow>THE PROJECT COLLECTION</Eyebrow>
        <h1>
          Ideas, brought to life<span className="blue-period">.</span>
        </h1>
        <p>
          Websites, applications, and experiments from my development journey.
          <br />
          Open a live site, or take a look at the code behind the work.
        </p>
        <div className="project-controls">
          <div className="filters" aria-label="Filter projects">
            {['All', 'Live websites', 'Source projects'].map((f) => (
              <button
                key={f}
                className={filter === f ? 'selected' : ''}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={18} />
            <input
              type="search"
              aria-label="Search projects"
              placeholder="Search projects or technology"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <p className="results-count" role="status">
          {count} {count === 1 ? 'project' : 'projects'}
          {query && ` matching “${query}”`}
        </p>
      </section>
      <section className="container projects-collection" aria-label="Project results">
        {filter !== 'Source projects' && shown.length > 0 && (
          <>
            <h2 className="collection-title">
              Live websites <span>{shown.length}</span>
            </h2>
            <div className="project-grid">
              {shown.map((p) => (
                <ProjectCard project={p} key={p.id} />
              ))}
            </div>
          </>
        )}
        {filter !== 'Live websites' && sources.length > 0 && (
          <div className="source-section">
            <div className="section-heading">
              <div>
                <Eyebrow>BEHIND THE INTERFACE</Eyebrow>
                <h2>Applications & source projects</h2>
              </div>
            </div>
            <p className="section-description">
              More from my GitHub collection. A public demo link isn’t listed for these projects;
              explore their source code below.
            </p>
            <div className="source-list">
              {sources.map((repo) => (
                <article className="source-row" key={repo.name}>
                  <Code2 size={22} />
                  <div>
                    <h3>{repo.name.replace(/[-_]+/g, ' ')}</h3>
                    <span>{repo.language}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} source on GitHub (opens in a new tab)`}
                  >
                    View source <Github size={16} />
                    <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
        {count === 0 && (
          <div className="empty-state">
            <Search size={36} />
            <h2>No projects found</h2>
            <p>Try another name or technology.</p>
            <button
              className="button"
              onClick={() => {
                setQuery('');
                setFilter('All');
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
      <Contact />
    </>
  );
}
