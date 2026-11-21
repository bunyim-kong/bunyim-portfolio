import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { cvUrl } from '../profile';
import { ThemeButton } from './ThemeButton';

const navigationLinks = [
  { label: 'Home', pathname: '/', hash: '' },
  { label: 'Service', pathname: '/', hash: '#service' },
  { label: 'About', pathname: '/', hash: '#about' },
  { label: 'Projects', pathname: '/projects', hash: '' },
  { label: 'Contact', pathname: '/', hash: '#contact' },
];

export function Header({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const nav = useRef(null);
  const menuToggle = useRef(null);

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (open) nav.current.querySelector('a')?.focus();
  }, [open]);

  function closeMenu() {
    setOpen(false);
    if (menuToggle.current.getClientRects().length) menuToggle.current.focus();
  }

  function handleEscape(event) {
    if (open && event.key === 'Escape') closeMenu();
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Kong Bunyim, home">
          <span className="brand-mark">
            kb<span>.</span>
          </span>
          <span className="brand-name">
            Kong Bunyim<span>Full-Stack Developer</span>
          </span>
        </Link>
        <nav
          ref={nav}
          className={open ? 'nav open' : 'nav'}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, pathname, hash }) => {
            const current = location.pathname === pathname && location.hash === hash;
            return (
              <Link
                key={label}
                to={{ pathname, hash }}
                aria-current={current ? (hash ? 'location' : 'page') : undefined}
                onClick={open ? closeMenu : undefined}
              >
                {label}
              </Link>
            );
          })}
          <a className="header-cv mobile-cv" href={cvUrl} download onClick={closeMenu}>
            <Download size={16} aria-hidden="true" /> Download CV
          </a>
        </nav>
        <div className="header-actions">
          <ThemeButton dark={dark} onToggle={toggle} />
          <a className="header-cv desktop-cv" href={cvUrl} download>
            <Download size={16} aria-hidden="true" /> Resume
          </a>
          <button
            ref={menuToggle}
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="main-navigation"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
