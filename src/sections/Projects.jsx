import { ExternalLink, FolderGit2, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import FadeInSection from '../components/FadeInSection';

const Projects = () => {
  const { t } = useTranslation();
  const projectList = t('projects.items', { returnObjects: true });

  return (
    <section id="projetos" className="relative z-10 py-32 px-6 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-blue-400" />
            {t('projects.title')}
          </h2>
          <p className="text-white/50 max-w-xl text-sm md:text-base">{t('projects.description')}</p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <FadeInSection key={project.title} delay={idx * 150}>
            <div className="flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <a href="https://github.com/HenriqZimer" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Abrir projeto no GitHub">
                  <ExternalLink className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white/90 mb-3">{project.title}</h3>
              <p className="text-white/50 text-sm mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={`${project.title}-${tag}`} className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 text-xs font-mono border border-white/5 group-hover:border-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
