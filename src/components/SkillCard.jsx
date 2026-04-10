import FadeInSection from './FadeInSection';

const SkillCard = ({ icon: Icon, title, skills, delay }) => (
  <FadeInSection delay={delay}>
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group h-full">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white/90 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-white/60 text-sm flex items-center gap-2 group-hover:text-white/80 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </FadeInSection>
);

export default SkillCard;
