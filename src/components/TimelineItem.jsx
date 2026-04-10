import FadeInSection from './FadeInSection';

const TimelineItem = ({ year, title, company, description, isLast, icon: Icon, delay }) => (
  <FadeInSection delay={delay}>
    <div className="relative pl-8 md:pl-0 group">
      <div className={`md:hidden absolute left-[11px] top-2 bottom-0 w-px bg-white/10 ${isLast ? 'hidden' : ''}`} />

      <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
        <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
          <span className="text-blue-400 font-mono text-sm group-hover:text-cyan-400 transition-colors">{year}</span>
        </div>

        <div className="absolute left-0 md:relative md:col-span-1 flex justify-center mt-1.5 md:mt-0">
          <div className="w-6 h-6 rounded-full bg-[#03050a] border-2 border-white/20 flex items-center justify-center z-10 group-hover:border-blue-400 transition-colors duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {Icon ? <Icon className="w-3 h-3 text-blue-400 group-hover:text-cyan-400" /> : <div className="w-2 h-2 rounded-full bg-blue-400" />}
          </div>
          {!isLast && <div className="hidden md:block absolute top-6 bottom-[-3rem] left-1/2 w-px bg-white/10 transform -translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-500" />}
        </div>

        <div className="md:col-span-3 pb-12 group-hover:translate-x-2 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white/90">{title}</h3>
          <h4 className="text-white/60 text-sm mb-4">{company}</h4>
          <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </FadeInSection>
);

export default TimelineItem;
