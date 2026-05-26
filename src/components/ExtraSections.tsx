import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../hooks/useContent';
import { MapPin, Instagram, Facebook, Send, Phone, ArrowRight, Maximize2 } from 'lucide-react';
import { SectionHeader } from './Sections';
import { ImageModal } from './ImageModal';
import { ContactForm } from './ContactForm';

export const Location: React.FC = () => {
  const { content, language } = useContent();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="location" className="bg-white relative overflow-hidden border-t border-oxley-green/5">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Left Side Content */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white border-r border-oxley-green/5">
          <div className="relative z-10">
            <SectionHeader 
              title={content.location.title[language]} 
              subtitle={language === 'en' ? 'The Latitude' : '地理坐标'} 
            />
            
            <p className="text-xl md:text-2xl text-oxley-green/70 font-serif italic mb-16 max-w-xl leading-relaxed">
              &ldquo;{content.location.description[language]}&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-oxley-green/10 border border-oxley-green/10 overflow-hidden">
               {content.location.highlights.map((point, idx) => (
                <div key={idx} className="p-10 bg-white group hover:bg-oxley-cream transition-all duration-500">
                  <div className="text-oxley-gold mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 stroke-[1px]" />
                  </div>
                  <span className="text-[10px] font-sans text-oxley-green/80 uppercase tracking-[0.2em] leading-relaxed group-hover:text-oxley-green transition-colors font-bold">{point[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Map */}
        <div 
          className="lg:w-1/2 relative bg-oxley-cream overflow-hidden group cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={content.location.mapImage} 
            alt="Map" 
            className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
          
          <div className="absolute inset-0 bg-oxley-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="p-4 bg-white/90 backdrop-blur-md rounded-full shadow-2xl">
                <Maximize2 className="w-6 h-6 text-oxley-gold" />
             </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-10 h-10 border border-oxley-gold/30 rounded-full animate-ping" />
             <div className="w-2.5 h-2.5 bg-oxley-gold rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-oxley-gold" />
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={content.location.mapImage}
        title={content.location.title[language]}
      />
    </section>
  );
};

export const VisualGallery: React.FC = () => {
  const { content, language } = useContent();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={content.gallery.title[language]} 
          subtitle={language === 'en' ? 'Artistry' : '视觉艺术'} 
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.gallery.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden group bg-oxley-cream cursor-pointer"
              onClick={() => setSelectedImage(item.url)}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-oxley-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                 <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2 className="w-8 h-8 text-white/50 mb-4" />
                    <p className="text-white text-xl font-serif italic mb-2 tracking-tight">{item.title}</p>
                    <div className="w-8 h-[1px] bg-oxley-gold" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal 
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
      />
    </section>
  );
};


export const CTA: React.FC = () => {
  const { content, language } = useContent();
  const whatsappUrl = `https://wa.me/${content.agent.phone}?text=${encodeURIComponent(content.agent.whatsappMessage)}`;

  return (
    <section className="py-48 bg-oxley-green relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight">
            {content.cta.title[language]}<span className="text-oxley-gold">.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 font-serif italic mb-16 px-4">
            &ldquo;{content.cta.subtitle[language]}&rdquo;
          </p>

          {content.cta.formType === 'built-in' ? (
            <ContactForm />
          ) : content.cta.formType === 'embed' && content.cta.embedCode ? (
            <div className="mb-16 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <div 
                dangerouslySetInnerHTML={{ __html: content.cta.embedCode }} 
                className="w-full flex justify-center"
              />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="oxley-gold-button px-16 py-5 group"
              >
                <span>{content.cta.buttonText[language]}</span>
                <ArrowRight className="w-5 h-5 button-icon-animate" />
              </a>

              <a 
                href={`tel:${content.agent.phone}`}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-16 h-16 border border-white/20 flex items-center justify-center text-white group-hover:border-oxley-gold group-hover:text-oxley-gold transition-all duration-500">
                  <Phone className="w-5 h-5 stroke-[1px]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/40 mb-1">Direct Liaison</p>
                  <p className="text-xl font-serif italic text-white group-hover:text-oxley-gold transition-colors">{content.agent.phone}</p>
                </div>
              </a>
            </div>
          )}
        </motion.div>
      </div>

       {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
         <span className="text-[25vw] font-serif uppercase tracking-tighter text-white">Oxley</span>
      </div>
    </section>
  );
};

export const Footer: React.FC<{ 
  onShowPrivacy: () => void; 
  onShowTerms: () => void;
  onShowDisclaimer: () => void;
}> = ({ onShowPrivacy, onShowTerms, onShowDisclaimer }) => {
  const { content, language } = useContent();
  return (
    <footer className="bg-oxley-green-dark pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-full md:col-span-1">
             <h3 className="text-2xl font-serif text-white italic mb-8">
                Oxley KLCC<span className="text-oxley-gold">.</span>
             </h3>
             <div className="flex gap-6 mb-8">
                <a href="#" className="text-white/20 hover:text-white transition-colors"><Facebook className="w-5 h-5 stroke-[1px]" /></a>
                <a href="#" className="text-white/20 hover:text-white transition-colors"><Instagram className="w-5 h-5 stroke-[1px]" /></a>
             </div>
             <div className="flex flex-col gap-3">
                <button 
                  onClick={onShowPrivacy}
                  className="text-left text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </button>
                <button 
                  onClick={onShowTerms}
                  className="text-left text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'Terms & Conditions' : '条款与细则'}
                </button>
                <button 
                  onClick={onShowDisclaimer}
                  className="text-left text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'Disclaimer' : '免责声明'}
                </button>
             </div>
          </div>
          
          <div>
             <h4 className="text-[10px] font-sans text-white/60 uppercase tracking-[0.3em] mb-8 font-bold">Ambassador</h4>
             <p className="text-white/90 text-sm mb-2 font-serif italic">{content.agent.name}</p>
             {content.agent.ren && <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">REN {content.agent.ren}</p>}
          </div>

          <div>
             <h4 className="text-[10px] font-sans text-white/60 uppercase tracking-[0.3em] mb-8 font-bold">Partnership</h4>
             <p className="text-white/90 text-sm mb-2 font-serif italic">{content.agent.agency}</p>
             <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">{content.agent.agencyReg}</p>
          </div>

          <div>
             <h4 className="text-[10px] font-sans text-white/60 uppercase tracking-[0.3em] mb-8 font-bold">Correspondence</h4>
             <p className="text-white/90 text-sm mb-2 font-serif italic">{content.agent.phone}</p>
             <p className="text-white/30 text-[9px] lowercase tracking-widest">{content.agent.email || `inquiry@${content.project.name.en.toLowerCase().replace(/\s/g, '')}.com`}</p>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 text-center">
           <p className="text-[10px] text-white/20 leading-relaxed max-w-4xl mx-auto font-sans uppercase tracking-[0.2em]">
              {content.disclaimers.general[language]}
           </p>
           <p className="text-[8px] font-sans text-white/10 mt-12 uppercase tracking-[0.6em] font-bold">
             © 2026 {content.project.name.en} • EMINENCE AT EVERY LEVEL
           </p>
        </div>
      </div>
    </footer>
  );
};
