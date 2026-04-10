import { Mail, Rocket } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0.5C5.649 0.5 0.5 5.649 0.5 12c0 5.084 3.293 9.398 7.865 10.92.575.105.785-.25.785-.555 0-.273-.01-.995-.016-1.954-3.2.695-3.876-1.542-3.876-1.542-.523-1.328-1.278-1.681-1.278-1.681-1.045-.714.079-.699.079-.699 1.155.081 1.763 1.186 1.763 1.186 1.026 1.758 2.691 1.251 3.348.957.104-.743.402-1.251.731-1.538-2.554-.291-5.238-1.277-5.238-5.683 0-1.255.448-2.281 1.183-3.084-.118-.291-.512-1.463.113-3.05 0 0 .965-.309 3.162 1.178a10.98 10.98 0 0 1 2.878-.387c.976.004 1.958.132 2.878.387 2.194-1.487 3.157-1.178 3.157-1.178.627 1.587.233 2.759.115 3.05.737.803 1.182 1.829 1.182 3.084 0 4.417-2.689 5.389-5.252 5.674.413.356.781 1.056.781 2.128 0 1.536-.014 2.774-.014 3.151 0 .308.207.665.79.553C20.21 21.395 23.5 17.082 23.5 12 23.5 5.649 18.351 0.5 12 0.5Z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.05c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126ZM7.114 20.452H3.56V9h3.554v11.452ZM22.225 0H1.771C.792 0 0 .773 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .773 23.2 0 22.222 0h.003Z" />
  </svg>
);

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
            <a href="mailto:henrique.zimermann@outlook.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/75 hover:text-white hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300" title={mt('footer.links.email', en.footer.links.email)} aria-label={mt('footer.links.email', en.footer.links.email)}>
              <Mail className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={200}>
            <a href="https://github.com/HenriqZimer" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#181717]/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300" title={mt('footer.links.github', en.footer.links.github)} aria-label={mt('footer.links.github', en.footer.links.github)}>
              <GithubIcon className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={300}>
            <a href="https://linkedin.com/in/henrique-zimermann" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#0077B5] hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,119,181,0.45)] transition-all duration-300" title={mt('footer.links.linkedin', en.footer.links.linkedin)} aria-label={mt('footer.links.linkedin', en.footer.links.linkedin)}>
              <LinkedinIcon className="w-5 h-5" />
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
