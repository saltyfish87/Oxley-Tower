import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../hooks/useContent';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content, language } = useContent();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-oxley-green">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={content.hero.image}
            alt="Oxley Towers KLCC"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-oxley-green/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-oxley-green via-transparent to-oxley-green/50" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="mb-16"
        >
          {/* Logo or Iconic text */}
          <h1 className="text-white font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter italic leading-none mb-8">
             Oxley<span className="text-oxley-gold not-italic">.</span>
          </h1>
          <div className="flex items-center justify-center gap-8">
            <div className="h-[1px] w-12 bg-oxley-gold/50" />
            <p className="text-oxley-gold font-sans text-[10px] md:text-sm tracking-[0.8em] uppercase font-bold">
              Kuala Lumpur
            </p>
            <div className="h-[1px] w-12 bg-oxley-gold/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <p className="text-white/90 font-serif italic text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
            &ldquo;{content.hero.subtitle[language]}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
             <button 
               onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
               className="oxley-gold-button px-20 group"
             >
                <span>{language === 'en' ? 'Explore Legacy' : '探索传承'}</span>
                <ArrowRight className="w-4 h-4 button-icon-animate" />
             </button>
             <a 
               href={`https://wa.me/${content.agent.phone}?text=${encodeURIComponent(
                 language === 'en'
                   ? `[OXLEY KLCC] Hello, I would like to schedule a private viewing/review of Oxley Towers KLCC.`
                   : `[OXLEY KLCC] 您好，我想预约私人看房并了解吉隆坡豪利大厦（Oxley Towers KLCC）。`
               )}`}
               target="_blank"
               rel="noopener noreferrer"
               className="text-white/40 hover:text-white font-sans text-[10px] uppercase tracking-[0.4em] transition-all duration-500 border-b border-white/20 hover:border-white pb-2 font-bold cursor-pointer"
             >
                {language === 'en' ? 'Private Viewing' : '预约私人看房'}
             </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-oxley-gold to-transparent" />
      </motion.div>

      {/* Side Label */}
      <div className="absolute left-12 bottom-12 hidden lg:block z-20">
         <p className="text-white/20 font-sans text-[10px] uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
            Signature Lifestyle
         </p>
      </div>
    </section>
  );
};
