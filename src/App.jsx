import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useTheme } from './hooks/useTheme';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Projects } from './pages/Projects';

export function App() {
  const [dark, toggle] = useTheme();
  return (
    <HashRouter>
      <RouteEffects />
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main').focus();
          document.getElementById('main').scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <Header dark={dark} toggle={toggle} />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === '/projects' ? 'Projects | Kong Bunyim' : 'Kong Bunyim | Full-Stack Developer';
    const timer = setTimeout(() => {
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'instant'
              : 'smooth',
          });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    }, 30);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}
