import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <section className="container empty-state">
      <h1>Page not found.</h1>
      <Link to="/" className="button">
        Back to home <ArrowRight size={18} />
      </Link>
    </section>
  );
}
