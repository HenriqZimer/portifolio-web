import { Languages as LangIcon } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const Languages = () => {
  const { mt } = useMountedTranslation();
  const items = mt('languages.items', en.languages.items, { returnObjects: true });

  return (
    <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <LangIcon className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mt('languages.title', en.languages.title)}</h2>
          <p className="text-white/50 text-sm md:text-base">{mt('languages.description', en.languages.description)}</p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <FadeInSection key={item.code} delay={(idx + 1) * 150}>
            <div className="flex items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 rounded-full bg-[#03050a] border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white/80 font-bold group-hover:text-white transition-colors">{item.code}</span>
              </div>
              <div>
                <h3 className="text-white/90 font-bold text-lg">{item.name}</h3>
                <div className={`inline-block mt-1 px-2.5 py-0.5 rounded-full ${idx === 0 ? 'bg-blue-500/10 border-blue-500/20' : 'bg-cyan-500/10 border-cyan-500/20'} border`}>
                  <span className={`${idx === 0 ? 'text-blue-400' : 'text-cyan-400'} text-xs font-mono`}>{item.level}</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Languages;
