import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, Language } from '../types';
import { INITIAL_CONTENT } from '../constants';

interface ContentContextType {
  content: SiteContent;
  language: Language;
  setLanguage: (lang: Language) => void;
  updateContent: (newContent: SiteContent) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  t: (key: string, section?: keyof SiteContent) => string;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('oxley_content_v3');
    if (!saved) return INITIAL_CONTENT;
    try {
      const parsed = JSON.parse(saved);
      // Migration: Ensure formType is present and defaulted to built-in for existing users
      if (parsed.cta && !parsed.cta.formType) {
        parsed.cta.formType = 'built-in';
      }
      return parsed;
    } catch (e) {
      return INITIAL_CONTENT;
    }
  });
  const [language, setLanguage] = useState<Language>('en');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('oxley_content_v3', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  // Simple helper to get text based on current language
  const t = (key: string, section?: keyof SiteContent): string => {
    // This is a simplified translator for deep objects
    // In a real app we might use a more robust path-based getter
    return ""; // Actual implementation will be more specific in components
  };

  return (
    <ContentContext.Provider value={{
      content,
      language,
      setLanguage,
      updateContent,
      isEditing,
      setIsEditing,
      t
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
