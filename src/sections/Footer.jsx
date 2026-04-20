import { Mail, Rocket } from 'lucide-react';
import { FaAws, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

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

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <FadeInSection delay={100}>
            <a href="mailto:henrique.zimermann@outlook.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/75 hover:text-white hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300" title={mt('footer.links.email', en.footer.links.email)} aria-label={mt('footer.links.email', en.footer.links.email)}>
              <Mail className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={200}>
            <a href="https://github.com/HenriqZimer" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#181717]/45 hover:border-white/45 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300" title={mt('footer.links.github', en.footer.links.github)} aria-label={mt('footer.links.github', en.footer.links.github)}>
              <FaGithub className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={300}>
            <a href="https://linkedin.com/in/henrique-zimermann" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#0077B5] hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,119,181,0.45)] transition-all duration-300" title={mt('footer.links.linkedin', en.footer.links.linkedin)} aria-label={mt('footer.links.linkedin', en.footer.links.linkedin)}>
              <FaLinkedin className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={400}>
            <a href="https://www.youtube.com/@henriqzimer" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#FF0000] hover:bg-[#FF0000]/20 hover:border-[#FF0000]/55 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,0,0,0.45)] transition-all duration-300" title={mt('footer.links.youtube', en.footer.links.youtube)} aria-label={mt('footer.links.youtube', en.footer.links.youtube)}>
              <FaYoutube className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={500}>
            <a href="https://www.instagram.com/_henriqzimer/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#E1306C] hover:bg-[#E1306C]/20 hover:border-[#E1306C]/55 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(225,48,108,0.45)] transition-all duration-300" title={mt('footer.links.instagram', en.footer.links.instagram)} aria-label={mt('footer.links.instagram', en.footer.links.instagram)}>
              <FaInstagram className="w-5 h-5" />
            </a>
          </FadeInSection>
          <FadeInSection delay={600}>
            <a href="https://builder.aws.com/community/@henriqzimer" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-[#FF9900] hover:bg-[#FF9900]/20 hover:border-[#FF9900]/55 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,153,0,0.45)] transition-all duration-300" title={mt('footer.links.awsBuilder', en.footer.links.awsBuilder)} aria-label={mt('footer.links.awsBuilder', en.footer.links.awsBuilder)}>
              <FaAws className="w-5 h-5" />
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
