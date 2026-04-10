import { Award, Cloud, Globe } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const cardStyles = [
  {
    icon: Cloud,
    wrapper: 'bg-[#FF9900]/10',
    iconColor: 'text-[#FF9900]',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(255,153,0,0.2)]'
  },
  {
    icon: Award,
    wrapper: 'bg-green-500/10',
    iconColor: 'text-green-400',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]'
  },
  {
    icon: Globe,
    wrapper: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    shadow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
  }
];

const Community = () => {
  const { mt } = useMountedTranslation();
  const cards = mt('community.cards', en.community.cards, { returnObjects: true });

  return (
    <section id="comunidade" className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mt('community.title', en.community.title)}</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">{mt('community.description', en.community.description)}</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const style = cardStyles[idx];
            const Icon = style.icon;

            return (
              <FadeInSection key={card.title} delay={(idx + 1) * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 group h-full">
                  <div className={`w-14 h-14 rounded-full ${style.wrapper} flex items-center justify-center mb-6 group-hover:scale-110 ${style.shadow} transition-all duration-300`}>
                    <Icon className={`w-7 h-7 ${style.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white/90 mb-3">{card.title}</h3>
                  <p className="text-white/50 text-sm">{card.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
