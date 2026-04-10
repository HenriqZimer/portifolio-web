import { Briefcase, Cloud, GraduationCap, Terminal } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';
import TimelineItem from '../components/TimelineItem';

const icons = [Cloud, Briefcase, GraduationCap, Terminal];

const Experience = () => {
  const { mt, i18n } = useMountedTranslation();
  const items = mt('experience.items', en.experience.items, { returnObjects: true });

  return (
    <section id="experiencia" className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mt('experience.title', en.experience.title)}</h2>
          <p className="text-white/50 text-sm md:text-base">{mt('experience.description', en.experience.description)}</p>
        </div>
      </FadeInSection>

      <div className="space-y-0">
        {items.map((item, idx) => {
          const Icon = icons[idx];
          const isFluidRow = idx === 1;
          const company = isFluidRow ? (
            <a href="https://fluidapi.io/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:underline">
              {item.company}
            </a>
          ) : (
            item.company
          );

          return (
            <TimelineItem
              key={`${item.year}-${item.title}`}
              delay={(idx + 1) * 100}
              year={item.year}
              title={item.title}
              company={company}
              description={item.description}
              isLast={idx === items.length - 1}
              icon={Icon}
              locale={i18n.resolvedLanguage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
