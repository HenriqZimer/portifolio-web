import Image from 'next/image';
import { ChevronDown, FolderGit2, Rocket } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const Hero = () => {
  const { mt, isMounted } = useMountedTranslation();
  const defaultHeroImage = 'https://henriqzimer.s3.sa-east-1.amazonaws.com/foto-perfil.jpg';
  const heroImageSrc = isMounted ? mt('hero.image', defaultHeroImage) : defaultHeroImage;

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <FadeInSection delay={100}>
        <div className="relative mb-8 group flex items-center justify-center">
          <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-blue-500/20 border-t-blue-400/60 animate-[spin_8s_linear_infinite]" />
          <div className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full border border-cyan-500/20 border-b-cyan-400/60 animate-[spin_12s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-b from-blue-400/30 to-transparent backdrop-blur-sm z-10 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Image
              src={heroImageSrc}
              alt={mt('hero.photoAlt', en.hero.photoAlt)}
              width={160}
              height={160}
              priority
              unoptimized
              sizes="(max-width: 768px) 128px, 160px"
              className="w-full h-full object-cover rounded-full border border-blue-900/50"
            />
            <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#060c1a] border border-blue-500/40 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={200}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
          {mt('hero.badge', en.hero.badge)}
        </div>
      </FadeInSection>

      <FadeInSection delay={300}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl">
          {mt('hero.titlePrefix', en.hero.titlePrefix)}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">{mt('hero.titleName', en.hero.titleName)}</span>.
        </h1>
      </FadeInSection>

      <FadeInSection delay={400}>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 font-light">
          {mt('hero.descriptionBefore', en.hero.descriptionBefore)}{' '}
          <strong className="text-white/90">{mt('hero.descriptionStrong', en.hero.descriptionStrong)}</strong>.{' '}
          {mt('hero.descriptionAfter', en.hero.descriptionAfter)}
        </p>
      </FadeInSection>

      <FadeInSection delay={500}>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#experiencia" className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300 text-sm hover:scale-105 active:scale-95">
            {mt('hero.ctaHighlights', en.hero.ctaHighlights)}
          </a>
          <a href="https://github.com/HenriqZimer" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 hover:border-blue-500/50" aria-label={mt('hero.ctaGithub', en.hero.ctaGithub)}>
            <FolderGit2 className="w-4 h-4 group-hover:text-blue-400" /> {mt('hero.ctaGithub', en.hero.ctaGithub)}
          </a>
          <a href="#contacto" className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm hover:scale-105 active:scale-95" aria-label={mt('hero.ctaContact', en.hero.ctaContact)}>
            {mt('hero.ctaContact', en.hero.ctaContact)}
          </a>
        </div>
      </FadeInSection>

      <div className="absolute bottom-10 animate-bounce text-white/30 hover:text-white transition-colors cursor-pointer">
        <a href="#skills" aria-label={mt('nav.links.skills', en.nav.links.skills)}>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
