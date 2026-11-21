import { Contact } from '../components/Contact';
import { About } from '../components/home/About';
import { Experience } from '../components/home/Experience';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
