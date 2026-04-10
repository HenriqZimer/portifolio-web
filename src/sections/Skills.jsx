import { Activity, Cloud, Container, GitBranch, ShieldCheck, Terminal } from 'lucide-react';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';
import SkillCard from '../components/SkillCard';

const iconMap = {
  cloud: Cloud,
  containers: Container,
  observability: Activity,
  os: Terminal,
  cicd: GitBranch,
  security: ShieldCheck
};

const Skills = () => {
  const { mt } = useMountedTranslation();
  const cards = mt('skills.cards', en.skills.cards, { returnObjects: true });
  const cardKeys = ['cloud', 'containers', 'observability', 'os', 'cicd', 'security'];

  return (
    <section id="skills" className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mt('skills.title', en.skills.title)}</h2>
          <p className="text-white/50 max-w-xl text-sm md:text-base">{mt('skills.description', en.skills.description)}</p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardKeys.map((key, idx) => (
          <SkillCard
            key={key}
            delay={(idx + 1) * 100}
            icon={iconMap[key]}
            title={cards[key].title}
            skills={cards[key].items}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
