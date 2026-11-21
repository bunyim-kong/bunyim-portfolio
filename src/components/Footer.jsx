import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="container footer">
      <Link className="footer-brand" to="/">
        kb<span>.</span>
      </Link>
      <p>© {new Date().getFullYear()} Kong Bunyim. Built with React & care.</p>
      <Link className="text-link" to="/#home">
        Back to top <ArrowUpRight size={15} />
      </Link>
    </footer>
  );
}
