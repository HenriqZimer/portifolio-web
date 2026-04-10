'use client';

import './i18n';

import StarryBackground from './components/StarryBackground';
import Certifications from './sections/Certifications';
import Community from './sections/Community';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Languages from './sections/Languages';
import Nav from './sections/Nav';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-[#03050a] text-white selection:bg-blue-500/30 selection:text-white font-sans overflow-x-hidden scroll-smooth">
      <StarryBackground />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Community />
        <Experience />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}
