import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, PenTool, Share2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Mock up',
      icon: <PenTool size={29} />,
      tool: 'Figma',
      text: 'I create clean, responsive interface mockups in Figma to explore ideas and shape the experience before development.',
    },
    {
      title: 'Develop',
      icon: <Code2 size={29} />,
      tool: 'React.js & more',
      text: 'I turn designs into responsive websites and dynamic applications with React, Next.js, Vue, and Nuxt.',
    },
    {
      title: 'Integration',
      icon: <Share2 size={29} />,
      tool: 'APIs & databases',
      text: 'I connect interfaces with backend services and data using Laravel, Spring Boot, Express, and SQL or NoSQL databases.',
    },
  ];
  return (
    <section className="service-section container" id="service">
      <h2>
        Check out the easy
        <br />
        way to bring your idea to life
      </h2>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <span className="service-icon">{service.icon}</span>
            <span className="service-tool">— {service.tool}</span>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <div className="promote-card">
        <div>
          <h2>
            Have a website
            <br />
            <span>in mind?</span>
          </h2>
          <Link className="button button-white" to="/#contact">
            Contact me! <ArrowUpRight size={18} />
          </Link>
        </div>
        <p>
          Every good website starts with a conversation. Tell me about your idea, the people it’s
          for, and what you want it to do. Let’s turn it into a{' '}
          <strong>clear, useful, and enjoyable digital experience.</strong>
        </p>
      </div>
    </section>
  );
}
