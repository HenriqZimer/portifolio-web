import { Layers, Network, RefreshCw, Server, Vault } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import FadeInSection from '../components/FadeInSection';
import useMountedTranslation from '../hooks/useMountedTranslation';
import en from '../locales/en.json';

const pointIcons = [Server, Layers, Vault, Network, RefreshCw];

const CaseStudy = () => {
  const { mt } = useMountedTranslation();
  const points = mt('caseStudy.points', en.caseStudy.points, { returnObjects: true });

  return (
    <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mt('caseStudy.title', en.caseStudy.title)}</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">{mt('caseStudy.description', en.caseStudy.description)}</p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {points.map((point, idx) => {
          const Icon = pointIcons[idx];
          return (
            <FadeInSection key={point.title} delay={idx * 100}>
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  {Icon && <Icon className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                  <h3 className="text-white/90 font-semibold mb-1.5">{point.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>

      <FadeInSection delay={500}>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/HenriqZimer/argocd-k8s-homelab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            {mt('caseStudy.cta', en.caseStudy.cta)}
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default CaseStudy;
