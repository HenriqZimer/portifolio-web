import { FolderGit2, Globe, Link2, Mail, Rocket } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const Footer = () => {
  const { mt } = useMountedTranslation();

  return (
    <footer id="contacto" className="relative z-10 border-t border-blue-500/20 bg-[#060c1a] pt-20 pb-10 px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <FadeInSection>
          <Rocket className="w-10 h-10 text-blue-400/50 mb-6 mx-auto animate-bounce" />
          <h2 className="text-3xl font-bold text-white/90 mb-6">{mt('footer.title', en.footer.title)}</h2>
          <p className="text-white/50 max-w-md mb-10 text-sm mx-auto">{mt('footer.description', en.footer.description)}</p>
        </FadeInSection>

        <div className="flex gap-4 mb-16">
          <FadeInSection delay={100}>
            <a href="mailto:henrique.zimermann@outlook.com" className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300" title={mt('footer.links.email', en.footer.links.email)} aria-label={mt('footer.links.email', en.footer.links.email)}>
              <Mail className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={200}>
            <a href="https://henriqzimer.com.br" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300" title={mt('footer.links.portfolio', en.footer.links.portfolio)} aria-label={mt('footer.links.portfolio', en.footer.links.portfolio)}>
              <Globe className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={300}>
            <a href="https://github.com/HenriqZimer" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300" title={mt('footer.links.github', en.footer.links.github)} aria-label={mt('footer.links.github', en.footer.links.github)}>
              <FolderGit2 className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={400}>
            <a href="https://linkedin.com/in/henrique-zimermann" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300" title={mt('footer.links.linkedin', en.footer.links.linkedin)} aria-label={mt('footer.links.linkedin', en.footer.links.linkedin)}>
              <Link2 className="w-5 h-5" />
            </a>
          </FadeInSection>
        </div>

        <FadeInSection delay={500}>
          <div className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Henrique Zimermann. {mt('footer.copyright', en.footer.copyright)}
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
};

export default Footer;
