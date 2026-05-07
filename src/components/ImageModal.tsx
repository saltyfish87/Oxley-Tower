import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 cursor-pointer"
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-[105] max-w-full max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group">
              <img 
                src={imageUrl} 
                alt={title || "View Image"} 
                className="max-h-[80vh] w-auto object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white uppercase tracking-widest font-bold border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                High Resolution
              </div>
            </div>

            {title && (
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/5 backdrop-blur-md px-8 py-3 border border-white/10"
              >
                <p className="text-white text-xs uppercase tracking-[0.3em] font-medium">{title}</p>
              </motion.div>
            )}
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-widest flex items-center gap-2">
            <ZoomIn className="w-3 h-3" />
            <span>Click outside to close</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
