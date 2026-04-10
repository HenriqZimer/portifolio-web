import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import FadeInSection from '../components/FadeInSection';

const certAssets = [
  {
    badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    link: 'https://www.credly.com/badges/c0a133ca-557a-4c9d-ba13-84b8c26e0a4f/public_url'
  },
  {
    badgeUrl: 'https://images.credly.com/images/daf528d2-2852-46f0-b7dc-0bab0cf84ae5/converted20251127-31-j96pic.png',
    link: 'https://learn.microsoft.com/pt-br/users/henrique-zimermann/credentials/4e876c99cc86288?ref=https%3A%2F%2Fwww.credly.com%2F'
  },
  {
    badgeUrl: 'https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png',
    link: 'https://www.credly.com/badges/8773fb0b-94a5-4a1e-9247-0a62cd83e954/public_url'
  },
  {
    badgeUrl: 'https://images.credly.com/images/6e546fd3-414b-4396-9b91-2b5cf7accedf/OCI25FNDCFAV1_cached_image_20250926-30-gc8qc8.png',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=940F36B32BA531E98EE8D9A5C1B99E42EC8B5AFDC558E21B20C31D9FC2E5D9FB'
  }
];

const Certifications = () => {
  const { t } = useTranslation();
  const certs = t('certifications.items', { returnObjects: true });

  return (
    <section id="certificacoes" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
      <FadeInSection>
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('certifications.title')}</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">{t('certifications.description')}</p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => (
          <FadeInSection key={cert.code} delay={idx * 150}>
            <a
              href={certAssets[idx].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group h-full"
            >
              <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={certAssets[idx].badgeUrl}
                  alt={t('certifications.badgeAlt', { code: cert.code })}
                  className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-24 h-24 rounded-full bg-white/5 border border-white/10 items-center justify-center relative z-10">
                  <Award className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <h3 className="text-center text-white/90 font-semibold text-sm mb-2 h-10 flex items-center justify-center">{cert.title}</h3>
              <span className="px-3 py-1 rounded-full bg-white/5 text-blue-400 text-xs font-mono border border-white/10 group-hover:bg-blue-500/10 transition-colors">
                {cert.code}
              </span>
            </a>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
