import React, { useState } from 'react';
import { ContentProvider, useContent } from './hooks/useContent';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview, Features, WhyChoose, Facilities, TowersExplorer } from './components/Sections';
import { Location, VisualGallery, CTA, Footer } from './components/ExtraSections';
import { AdminPanel, FloatingButtons } from './components/AdminPanel';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const LegalModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; content: React.ReactNode }> = ({ isOpen, onClose, title, content }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={onClose} 
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-none shadow-2xl p-8 md:p-16 border-t-4 border-oxley-gold"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-oxley-cream rounded-full transition-colors">
            <X className="w-6 h-6 text-oxley-green" />
          </button>
          <h2 className="text-4xl font-serif text-oxley-green mb-10 italic">{title}</h2>
          <div className="font-sans text-oxley-green/70 leading-relaxed space-y-6">
            {content}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

function LandingPage() {
  const { language } = useContent();
  const [modal, setModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const { content } = useContent();

  const policyContent = {
    privacy: {
      title: language === 'en' ? 'Privacy Policy' : '隐私政策',
      body: language === 'en' ? (
        <>
          <p>This Privacy Policy explains how IQI Holdings SDN BHD collects, uses, and protects your personal data in accordance with the Malaysian Personal Data Protection Act 2010 (PDPA).</p>
          <h3 className="font-bold text-black mt-4">1. Collection of Information</h3>
          <p>We may collect your name, email address, and phone number when you inquire via WhatsApp or our platform.</p>
          <h3 className="font-bold text-black mt-4">2. Use of Information</h3>
          <p>The information collected is used solely for responding to your inquiries about Oxley Towers KLCC and providing property updates.</p>
          <h3 className="font-bold text-black mt-4">3. Data Protection</h3>
          <p>We implement security measures to protect your data. We do not sell or share your data with third parties without your consent.</p>
        </>
      ) : (
        <>
          <p>本隐私政策说明了 IQI Holdings SDN BHD 如何根据 2010 年马来西亚个人数据保护法 (PDPA) 收集、使用和保护您的个人数据。</p>
          <h3 className="font-bold text-black mt-4">1. 信息收集</h3>
          <p>当您通过 WhatsApp 或我们的平台咨询时，我们可能会收集您的姓名、电子邮件地址和电话号码。</p>
          <h3 className="font-bold text-black mt-4">2. 信息用途</h3>
          <p>收集的信息仅用于回复您对 Oxley Towers KLCC 的咨询并提供房产更新信息。</p>
          <h3 className="font-bold text-black mt-4">3. 数据保护</h3>
          <p>我们实施安全措施来保护您的数据。未经您的同意，我们不会向第三方出售或共享您的数据。</p>
        </>
      )
    },
    terms: {
      title: language === 'en' ? 'Terms & Conditions' : '条款与细则',
      body: language === 'en' ? (
        <>
          <p>By using this website, you agree to the following terms:</p>
          <ul className="list-disc pl-5">
            <li>The information provided is for marketing purposes and is subject to change without notice.</li>
            <li>This is not the official developer website. It is managed by an authorized real estate agency.</li>
            <li>All architectural renderings are artist impressions only.</li>
          </ul>
        </>
      ) : (
        <>
          <p>使用本网站即表示您同意以下条款：</p>
          <ul className="list-disc pl-5">
            <li>所提供的信息仅用于营销目的，如有更改，恕不另行通知。</li>
            <li>这不是开发商的官方网站。它由授权的房地产公司管理。</li>
            <li>所有建筑渲染图仅为艺术家印象。</li>
          </ul>
        </>
      )
    },
    disclaimer: {
      title: language === 'en' ? 'Disclaimer' : '免责声明',
      body: (
        <div className="space-y-4">
          <p>{content.disclaimers.management[language]}</p>
          <p>{content.disclaimers.general[language]}</p>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-oxley-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <WhyChoose />
        <Features />
        <Location />
        <Facilities />
        <TowersExplorer />
        <VisualGallery />
        <CTA />
      </main>
      
      <Footer 
        onShowPrivacy={() => setModal('privacy')} 
        onShowTerms={() => setModal('terms')} 
        onShowDisclaimer={() => setModal('disclaimer')}
      />
      
      <AdminPanel />
      <FloatingButtons />

      <LegalModal 
        isOpen={!!modal} 
        onClose={() => setModal(null)} 
        title={modal ? policyContent[modal].title : ''}
        content={modal ? policyContent[modal].body : null}
      />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <LandingPage />
    </ContentProvider>
  );
}
