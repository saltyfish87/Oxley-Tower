import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../hooks/useContent';
import * as Icons from 'lucide-react';
import { ArrowRight, Check, HelpCircle, Maximize2 } from 'lucide-react';
import { LayoutItem, FacilityItem, FeatureItem } from '../types';
import { ImageModal } from './ImageModal';

// Icon Renderer
const IconRenderer: React.FC<{ iconName: string; className?: string }> = ({ iconName, className }) => {
  const Icon = (Icons as any)[iconName] || HelpCircle;
  return <Icon className={className} />;
};

export const SectionHeader: React.FC<{ title: string; subtitle: string; centered?: boolean; dark?: boolean }> = ({ title, subtitle, centered = false, dark = false }) => {
  return (
    <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        <span className="text-oxley-gold font-sans tracking-[0.6em] text-[10px] font-extrabold uppercase">
          {subtitle}
        </span>
        <div className={`w-12 h-[1px] bg-oxley-gold/30`} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-5xl md:text-6xl font-serif tracking-tighter leading-[0.95] ${dark ? 'text-white' : 'text-oxley-green'}`}
      >
        {title}<span className="text-oxley-gold">.</span>
      </motion.h2>
    </div>
  );
};

export const Overview: React.FC = () => {
  const { content, language } = useContent();
  if (!content?.overview?.details) return null;

  return (
    <section id="overview" className="bg-white py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <SectionHeader 
              title={content.overview.title[language]} 
              subtitle={language === 'en' ? 'The Vision' : '宏伟蓝图'} 
            />
            <p className="text-2xl md:text-3xl text-oxley-green font-serif leading-relaxed mb-16 italic">
              &ldquo;{content.overview.content[language]}&rdquo;
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-12">
               {[
                 { label: 'Developer', value: content.overview.details.developer },
                 { label: 'Tenure', value: content.overview.details.tenure },
               ].map((item, idx) => (
                 <div key={idx} className="border-l border-oxley-gold/30 pl-8">
                   <p className="text-[9px] font-sans font-extrabold text-oxley-green/30 mb-3 uppercase tracking-widest">{item.label}</p>
                   <p className="text-xl font-serif text-oxley-green italic">{item.value[language]}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[3/4] bg-oxley-cream overflow-hidden">
               <img 
                 src={content.overview.image} 
                 alt="Oxley Towers Architecture" 
                 className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-oxley-gold p-8 hidden lg:flex flex-col justify-end">
               <p className="text-white text-[10px] font-sans uppercase tracking-widest font-bold mb-2">KLCC District</p>
               <p className="text-white text-2xl font-serif italic">Freehold.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChoose: React.FC = () => {
  const { content, language } = useContent();
  if (!content?.whyChoose) return null;

  return (
    <section className="py-48 bg-oxley-green relative overflow-hidden">
      {/* Decorative Brand Text */}
      <div className="absolute inset-x-0 top-0 text-[15vw] font-serif italic text-white/[0.015] whitespace-nowrap select-none pointer-events-none translate-y-[-10%] flex justify-center">
         OXLEY KLCC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <SectionHeader 
            title={content.whyChoose.title[language]} 
            subtitle={language === 'en' ? 'The Distinction' : '尊崇身份'} 
            centered
            dark
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {content.whyChoose.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="mb-8 text-oxley-gold border-b border-white/10 pb-8 flex items-end justify-between group-hover:border-oxley-gold transition-colors duration-700">
                <IconRenderer iconName={item.icon} className="w-8 h-8 stroke-[1px]" />
                <span className="text-[10px] font-sans font-bold text-white/10 tracking-tighter group-hover:text-oxley-gold/40 transition-colors">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6 italic">{item.title[language]}</h3>
              <p className="text-white/70 font-sans font-normal text-[13px] leading-relaxed tracking-wide">
                {item.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
  const { content, language } = useContent();

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={content.features.title[language]} 
          subtitle={language === 'en' ? 'Refined Living' : '定制生活'}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.items.map((feature: FeatureItem, idx: number) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-10 bg-oxley-cream/30 hover:bg-white border border-oxley-green/5 hover:border-oxley-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="mb-8 text-oxley-green group-hover:text-oxley-gold transition-colors">
                <IconRenderer iconName={feature.icon || 'HelpCircle'} className="w-8 h-8 stroke-[1px]" />
              </div>
              <h3 className="text-xl font-serif text-oxley-green mb-4">{feature.title[language]}</h3>
              <p className="text-oxley-green/70 text-[12px] leading-relaxed font-sans uppercase tracking-[0.15em] font-bold">{feature.description[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Facilities: React.FC = () => {
  const { content, language } = useContent();

  return (
    <section id="facilities" className="py-32 bg-oxley-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={content.facilities.title[language]} 
          subtitle={language === 'en' ? 'Bespoke Amenities' : '尊享配套'}
          centered
        />
        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
          {content.facilities.items.map((fac: FacilityItem, idx: number) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center gap-6 cursor-pointer"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-white border border-oxley-green/5 flex items-center justify-center text-oxley-green group-hover:bg-oxley-green group-hover:text-white transition-all duration-500 shadow-sm">
                  <IconRenderer iconName={fac.icon} className="w-8 h-8 stroke-[1px]" />
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold font-sans text-oxley-green/60 group-hover:text-oxley-green transition-colors">
                {fac.name[language]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TowersExplorer: React.FC = () => {
  const { content, language } = useContent();
  const [selectedTower, setSelectedTower] = React.useState<'so' | 'jewel'>('so');
  const [selectedLayoutImage, setSelectedLayoutImage] = React.useState<{ url: string, title: string } | null>(null);
  
  if (!content?.towers) return null;

  const activeTower = content.towers[selectedTower];
  if (!activeTower || !activeTower.layouts) return null;
  
  const [activeLayout, setActiveLayout] = React.useState(activeTower.layouts[0]?.id);

  React.useEffect(() => {
    if (activeTower.layouts[0]) {
      setActiveLayout(activeTower.layouts[0].id);
    }
  }, [selectedTower, activeTower]);

  return (
    <section id="residences" className="py-32 bg-white overflow-hidden relative border-t border-oxley-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-32 text-center">
          <SectionHeader 
            title={content.towers.title[language]} 
            subtitle={language === 'en' ? 'The Residences' : '尊极府邸'}
            centered
          />
          
          <div className="flex items-center gap-12 border-b border-oxley-green/10 pb-4">
            {(['so', 'jewel'] as const).map((towerKey) => (
              <button
                key={towerKey}
                onClick={() => setSelectedTower(towerKey)}
                className={`text-[11px] font-sans uppercase tracking-[0.4em] font-bold transition-all duration-500 relative py-2 ${
                  selectedTower === towerKey
                    ? 'text-oxley-gold'
                    : 'text-oxley-green/40 hover:text-oxley-green'
                }`}
              >
                {towerKey === 'so' ? (language === 'en' ? 'SO/ Residences' : 'SO/ 府邸') : (language === 'en' ? 'Jewel Residences' : '珍宝府邸')}
                {selectedTower === towerKey && (
                  <motion.div layoutId="towerUnderline" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-oxley-gold" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-2 space-y-4 lg:pr-12 lg:border-r border-oxley-green/5 lg:py-10">
            <p className="hidden lg:block text-[9px] font-sans font-bold text-oxley-green/30 uppercase tracking-[0.4em] mb-10">Select Suite</p>
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0">
              {activeTower.layouts.map((layout) => (
                <button
                  key={layout.id}
                  onClick={() => setActiveLayout(layout.id)}
                  className={`flex-shrink-0 lg:w-full text-left transition-all duration-700 relative group py-2 ${
                    activeLayout === layout.id
                      ? 'text-oxley-gold'
                      : 'text-oxley-green/30 hover:text-oxley-green/60'
                  }`}
                >
                  <p className="text-[10px] font-sans uppercase tracking-[0.15em] font-bold mb-1">
                    {layout.size[language].split(' ')[0]}
                  </p>
                  <p className={`text-base font-serif italic truncate ${activeLayout === layout.id ? 'opacity-100' : 'opacity-40'}`}>
                    {layout.type[language]}
                  </p>
                  {activeLayout === layout.id && (
                    <motion.div layoutId="layoutDot" className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-oxley-gold rounded-full hidden lg:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-10">
            <AnimatePresence mode="wait">
              {activeTower.layouts.map((layout) => (
                layout.id === activeLayout && (
                  <motion.div
                    key={layout.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-0"
                  >
                     {/* Image Container - Massively Expanded */}
                     <div 
                       className="lg:col-span-6 relative bg-oxley-cream/30 flex items-center justify-center p-8 lg:p-24 overflow-hidden group min-h-[500px] cursor-pointer"
                       onClick={() => setSelectedLayoutImage({ url: layout.image, title: layout.type[language] })}
                     >
                        <motion.div
                          layoutId={`img-${layout.id}`}
                          className="relative z-10 w-full flex justify-center"
                        >
                          <img 
                            src={layout.image} 
                            alt={layout.type[language]} 
                            className="w-full max-w-xl h-auto object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-transform duration-1000 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-oxley-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                           <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl">
                              <Maximize2 className="w-6 h-6 text-oxley-gold" />
                           </div>
                        </div>
                        
                        {/* Decorative Background Text */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                           <span className="text-[30vw] font-serif uppercase tracking-tighter leading-none">{layout.type[language].split(' ')[0]}</span>
                        </div>
                        
                        {/* Badge */}
                        <div className="absolute top-10 left-10 lg:left-20">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-[1px] bg-oxley-gold" />
                              <span className="text-[10px] font-sans font-bold text-oxley-gold uppercase tracking-[0.5em]">{layout.size[language]}</span>
                           </div>
                        </div>
                     </div>

                     {/* Content Container */}
                     <div className="lg:col-span-4 flex flex-col justify-center lg:pl-20 py-10 lg:py-0">
                        <div className="mb-12">
                          <h4 className="text-4xl lg:text-6xl font-serif text-oxley-green mb-8 italic leading-[1.1] tracking-tight">
                            {layout.type[language]}
                          </h4>
                          <p className="text-base lg:text-lg text-oxley-green/70 leading-relaxed font-serif italic mb-10 border-l-2 border-oxley-gold/20 pl-8">
                            {layout.description[language]}
                          </p>
                        </div>

                        {/* Dynamic Perks Section */}
                        <div className="space-y-6 mb-16">
                            <p className="text-[9px] font-sans font-bold text-oxley-green/30 uppercase tracking-[0.4em] mb-4">Refined Details</p>
                            {layout.perks.map((perk, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-center gap-6 group"
                              >
                                <div className="p-2 border border-oxley-gold/10 text-oxley-gold group-hover:bg-oxley-gold group-hover:text-white transition-all duration-500">
                                   <Check className="w-3 h-3" />
                                </div>
                                <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-oxley-green/60 group-hover:text-oxley-green transition-colors">{perk[language]}</span>
                              </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button className="oxley-gold-button flex-1 py-6 group">
                             <span>Private Viewing</span>
                             <ArrowRight className="w-4 h-4 button-icon-animate" />
                          </button>
                        </div>
                     </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={selectedLayoutImage !== null}
        onClose={() => setSelectedLayoutImage(null)}
        imageUrl={selectedLayoutImage?.url || ''}
        title={selectedLayoutImage?.title}
      />
    </section>
  );
};
