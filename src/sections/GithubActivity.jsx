import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const GithubActivity = () => {
  const { mt } = useMountedTranslation();

  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <FaGithub className="w-8 h-8 text-blue-400" />
            {mt('githubActivity.title', en.githubActivity.title)}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">{mt('githubActivity.description', en.githubActivity.description)}</p>
        </div>
      </FadeInSection>

      <FadeInSection delay={150}>
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm p-4 flex items-center justify-center overflow-hidden">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=HenriqZimer&show_icons=true&hide_border=true&bg_color=00000000&title_color=38bdf8&icon_color=3b82f6&text_color=cbd5e1"
              alt={mt('githubActivity.statsAlt', en.githubActivity.statsAlt)}
              width={495}
              height={195}
              unoptimized
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm p-4 flex items-center justify-center overflow-hidden">
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=HenriqZimer&layout=compact&hide_border=true&bg_color=00000000&title_color=38bdf8&text_color=cbd5e1"
              alt={mt('githubActivity.langsAlt', en.githubActivity.langsAlt)}
              width={350}
              height={195}
              unoptimized
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={300}>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/HenriqZimer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            {mt('githubActivity.cta', en.githubActivity.cta)}
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default GithubActivity;
