import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../hooks/useContent';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { content, language, setLanguage } = useContent();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: { en: 'Inspiration', zh: '项目故事' }, href: '#overview' },
    { name: { en: 'Location', zh: '地理位置' }, href: '#location' },
    { name: { en: 'Signature', zh: '配套设施' }, href: '#facilities' },
    { name: { en: 'Residences', zh: '户型设计' }, href: '#residences' },
    { name: { en: 'Visuals', zh: '视觉画廊' }, href: '#gallery' },
  ];

  const whatsappUrl = `https://wa.me/${content.agent.phone}?text=${encodeURIComponent(content.agent.whatsappMessage)}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-oxley-green/5 shadow-sm font-light' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <div 
            className="cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={`text-lg md:text-xl font-serif tracking-[0.4em] uppercase italic transition-colors duration-500 ${scrolled ? 'text-oxley-green' : 'text-white'}`}>
               OXLEY KLCC<span className="text-oxley-gold not-italic">.</span>
            </span>
          </div>

          {/* Core Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[9px] uppercase tracking-[0.4em] font-sans font-semibold transition-all duration-500 ${scrolled ? 'text-oxley-green/60 hover:text-oxley-green' : 'text-white/70 hover:text-white'}`}
              >
                {item.name[language]}
              </a>
            ))}
          </div>

          {/* Action Tools */}
          <div className="hidden md:flex items-center gap-8">
            <button
               onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
               className={`text-[9px] font-sans tracking-[0.3em] font-extrabold transition-colors uppercase border px-3 py-1 ${scrolled ? 'text-oxley-green/60 border-oxley-green/20 hover:text-oxley-green' : 'text-white/60 border-white/20 hover:text-white'}`}
            >
               {language === 'en' ? 'ZH' : 'EN'}
            </button>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 text-[9px] font-sans uppercase tracking-[0.3em] font-bold transition-all duration-500 border flex items-center gap-2 group ${scrolled ? 'bg-oxley-green text-white border-oxley-green hover:bg-oxley-gold hover:border-oxley-gold' : 'bg-white text-oxley-green border-white hover:bg-oxley-gold hover:text-white hover:border-oxley-gold'}`}
            >
              <span>{language === 'en' ? 'Inquiry' : '立即咨询'}</span>
              <ArrowRight className="w-3 h-3 button-icon-animate" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-luxury-gold transition-colors">
              {isOpen ? <X className="w-8 h-8 stroke-[1px]" /> : <Menu className="w-8 h-8 stroke-[1px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-oxley-green/98 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white">
               <X className="w-8 h-8 stroke-[1px]" />
            </button>
            <div className="flex flex-col items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif italic text-white hover:text-oxley-gold transition-all"
                >
                  {item.name[language]}
                </a>
              ))}
              <div className="mt-12 flex flex-col items-center gap-8 w-full">
                 <button
                    onClick={() => {
                      setLanguage(language === 'en' ? 'zh' : 'en');
                      setIsOpen(false);
                    }}
                    className="text-xs font-sans tracking-[0.3em] text-white/60 hover:text-white uppercase"
                 >
                    {language === 'en' ? 'Switch to Chinese' : '切换至 EN'}
                 </button>
                 <a
                   href={whatsappUrl}
                   className="oxley-gold-button w-full py-5 text-center justify-center"
                 >
                    {language === 'en' ? 'Schedule a Tour' : '预约导览'}
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
