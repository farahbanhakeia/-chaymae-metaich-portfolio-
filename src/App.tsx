import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { LazyFinance } from './components/LazyFinance';
import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Method } from './sections/Method';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export default function App() {
  return (
    <>
      <a
        href="#apropos"
        className="sr-only z-[60] rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Method />
        <Skills />
        <Projects />
        <LazyFinance />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
