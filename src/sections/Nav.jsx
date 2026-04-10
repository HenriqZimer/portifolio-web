import { Rocket } from 'lucide-react';

import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const Nav = () => {
  const { mt, i18n, isMounted } = useMountedTranslation();

  const activeLang = i18n.resolvedLanguage === 'en' ? 'en' : 'pt';
  const nextLang = activeLang === 'pt' ? 'en' : 'pt';

  const handleLanguageToggle = () => {
    i18n.changeLanguage(nextLang);
    document.cookie = `i18next=${nextLang}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#03050a]/50 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-mono text-white/90 font-bold text-xl tracking-tighter group cursor-pointer">
          <Rocket className="w-5 h-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <span>
            HENRIQ<span className="text-blue-400">ZIMER</span>
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors duration-300">{mt('nav.links.home', en.nav.links.home)}</a>
          <a href="#skills" className="hover:text-white transition-colors duration-300">{mt('nav.links.skills', en.nav.links.skills)}</a>
          <a href="#certificacoes" className="hover:text-white transition-colors duration-300">{mt('nav.links.certs', en.nav.links.certs)}</a>
          <a href="#projetos" className="hover:text-white transition-colors duration-300">{mt('nav.links.projects', en.nav.links.projects)}</a>
          <a href="#comunidade" className="hover:text-white transition-colors duration-300">{mt('nav.links.community', en.nav.links.community)}</a>
          <a href="#contacto" className="hover:text-white transition-colors duration-300">{mt('nav.links.contact', en.nav.links.contact)}</a>
        </div>

        <button
          type="button"
          onClick={handleLanguageToggle}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs font-mono hover:bg-blue-500/20 hover:border-blue-300/60 transition-all duration-300"
          aria-label={mt('nav.language.switch', en.nav.language.switch)}
          title={mt('nav.language.switch', en.nav.language.switch)}
        >
          <span className={isMounted && activeLang === 'pt' ? 'text-white' : 'text-white/60'}>{mt('nav.language.pt', en.nav.language.pt)}</span>
          <span className="text-blue-300/70">/</span>
          <span className={isMounted && activeLang === 'en' ? 'text-white' : 'text-white/60'}>{mt('nav.language.en', en.nav.language.en)}</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
