import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useContent } from '../hooks/useContent';

export const ContactForm: React.FC = () => {
  const { language } = useContent();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using FormSubmit AJAX as it allows direct email targeting without pre-registration
      const response = await fetch('https://formsubmit.co/ajax/saltyfish1987@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Lead: ${formData.name} - Oxley KLCC`,
          _template: 'box'
        })
      });

      const result = await response.json();
      if (result.success === 'true' || response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const t = {
    name: language === 'en' ? 'Full Name' : '姓名',
    email: language === 'en' ? 'Email Address' : '电子邮件',
    phone: language === 'en' ? 'Phone Number' : '电话号码',
    message: language === 'en' ? 'Inquiry / Message' : '咨询信息',
    submit: language === 'en' ? 'Request Presentation' : '预约礼宾讲解',
    submitting: language === 'en' ? 'Sending...' : '发送中...',
    success: language === 'en' ? 'Thank you. Our ambassador will contact you shortly.' : '谢谢您的咨询。我们的礼宾大使将尽快与您联系。',
    error: language === 'en' ? 'Something went wrong. Please try WhatsApp.' : '发生错误。请通过 WhatsApp 联系我们。'
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white/5 backdrop-blur-xl border border-oxley-gold/30 p-12 rounded-3xl text-center"
          >
            <div className="w-20 h-20 bg-oxley-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-oxley-gold" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 italic">Message Received</h3>
            <p className="text-white/60 font-sans tracking-wide leading-relaxed">
              {t.success}
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-10 text-[10px] uppercase tracking-[0.3em] text-oxley-gold border-b border-oxley-gold/30 pb-1 hover:border-oxley-gold transition-all"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  required
                  type="text"
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:border-oxley-gold/50 focus:bg-white/10 transition-all outline-none"
                />
              </div>
              <div className="relative">
                <input
                  required
                  type="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:border-oxley-gold/50 focus:bg-white/10 transition-all outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <input
                required
                type="tel"
                placeholder={t.phone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:border-oxley-gold/50 focus:bg-white/10 transition-all outline-none"
              />
            </div>

            <div className="relative">
              <textarea
                placeholder={t.message}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-5 rounded-xl text-white placeholder:text-white/20 focus:border-oxley-gold/50 focus:bg-white/10 transition-all outline-none resize-none"
              />
            </div>

            <button
              disabled={status === 'loading'}
              type="submit"
              className="w-full oxley-gold-button py-6 group flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.submitting}</span>
                </>
              ) : (
                <>
                  <span>{t.submit}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </>
              )}
            </button>

            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                {t.error}
              </motion.p>
            )}

            <p className="text-[10px] text-white/20 text-center uppercase tracking-widest leading-relaxed">
              By submitting, you agree to our privacy policy and consent to be contacted by our representative.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
