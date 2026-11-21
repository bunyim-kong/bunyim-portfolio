import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronsDown,
  Contact as ContactIcon,
  Copy,
  Download,
  Github,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { cvUrl, email } from '../profile';

export function Contact() {
  const [status, setStatus] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('Email copied!');
    } catch {
      setStatus('Please copy: ' + email);
    }
  }
  function composeEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hi Bunyim,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Portfolio enquiry from ' + data.get('name'))}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app will open with your message. Send it there to get in touch.');
  }
  return (
    <>
      <section className="promote-two container">
        <h2>
          Turning ideas into{' '}
          <span>
            interactive
            <br />
            experiences
          </span>{' '}
          with me.
        </h2>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('contact')
              .scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                  ? 'instant'
                  : 'smooth',
              });
          }}
          aria-label="Go to contact"
        >
          <ChevronsDown size={30} />
        </a>
      </section>
      <section className="contact-section container" id="contact">
        <span className="hello-badge">
          <ContactIcon size={18} /> Contact
        </span>
        <h2>
          Let’s Build
          <br />
          Something Together
        </h2>
        <p className="section-description">
          Have a project or an opportunity in mind?
          <br />
          Let’s work together to create something useful.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let’s Connect</h3>
            <p>
              I’m interested in new opportunities and exciting projects. Whether you have a question
              or just want to say hello, feel free to reach out.
            </p>
            <a className="contact-detail" href={`mailto:${email}`}>
              <span className="detail-icon">
                <Mail size={22} />
              </span>
              <span>
                <small>Email</small>
                <strong>{email}</strong>
              </span>
            </a>
            <a className="contact-detail" href="tel:+85517686388">
              <span className="detail-icon">
                <Phone size={22} />
              </span>
              <span>
                <small>Phone / Telegram</small>
                <strong>+855 17 686 388</strong>
              </span>
            </a>
            <div className="contact-detail">
              <span className="detail-icon">
                <MapPin size={22} />
              </span>
              <span>
                <small>Location</small>
                <strong>Mean Chey, Phnom Penh</strong>
              </span>
            </div>
            <div className="contact-socials">
              <a
                className="icon-button"
                href="https://github.com/bunyim-kong"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
              >
                <Github size={21} />
              </a>
              <button className="icon-button" onClick={copyEmail} aria-label="Copy email address">
                {status === 'Email copied!' ? <Check size={20} /> : <Copy size={20} />}
              </button>
              <a href={cvUrl} download className="text-link">
                My CV <Download size={17} />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={composeEmail}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              required
              maxLength={100}
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your.email@example.com"
              required
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project…"
              required
              maxLength={3000}
            />
            <button className="button button-blue" type="submit">
              Let’s start a conversation <ArrowUpRight size={18} />
            </button>
            <p className="form-note">Opens your email app with your message ready to send.</p>
          </form>
        </div>
        <p className="copy-status" role="status">
          {status}
        </p>
      </section>
    </>
  );
}
