import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../hooks/useContent';
import { Settings, X, Save, Plus, Trash2, Image, Type, MessageSquare, Layout as LayoutIcon, ChevronRight, ChevronDown } from 'lucide-react';
import { SiteContent, LayoutItem } from '../types';
import { normalizeDriveUrl } from '../lib/utils';
import { INITIAL_CONTENT } from '../constants';

export const AdminPanel: React.FC = () => {
  const { content, updateContent, isEditing, setIsEditing } = useContent();
  const [tempContent, setTempContent] = React.useState<SiteContent>(content);

  React.useEffect(() => {
    if (isEditing) setTempContent(content);
  }, [isEditing, content]);

  const handleSave = () => {
    updateContent(tempContent);
    setIsEditing(false);
  };

  const updateField = (path: string, value: any) => {
    const keys = path.split('.');
    const newContent = JSON.parse(JSON.stringify(tempContent));
    let current: any = newContent;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setTempContent(newContent);
  };

  const handleImageUpdate = (path: string, value: string) => {
    updateField(path, normalizeDriveUrl(value));
  };

  return (
    <AnimatePresence>
      {isEditing && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsEditing(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center space-x-3">
                <Settings className="w-6 h-6 text-black" />
                <h2 className="text-xl font-bold">Content Manager</h2>
              </div>
              <button 
                onClick={() => setIsEditing(false)}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-12 pb-32">
              {/* Project Info */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Project Basics</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Name (EN)</label>
                    <input 
                      type="text" 
                      value={tempContent.project.name.en} 
                      onChange={(e) => updateField('project.name.en', e.target.value)}
                      className="w-full p-3 border rounded-xl focus:ring-2 ring-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Name (ZH)</label>
                    <input 
                      type="text" 
                      value={tempContent.project.name.zh} 
                      onChange={(e) => updateField('project.name.zh', e.target.value)}
                      className="w-full p-3 border rounded-xl focus:ring-2 ring-black outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Hero Section */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Hero Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Hero Image URL</label>
                    <input 
                      type="text" 
                      value={tempContent.hero.image} 
                      onChange={(e) => handleImageUpdate('hero.image', e.target.value)}
                      className="w-full p-3 border rounded-xl text-xs font-mono"
                      placeholder="Paste Image or Google Drive URL"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Headline (EN)</label>
                    <textarea 
                      value={tempContent.hero.title.en} 
                      onChange={(e) => updateField('hero.title.en', e.target.value)}
                      className="w-full p-3 border rounded-xl h-24"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Headline (ZH)</label>
                    <textarea 
                      value={tempContent.hero.title.zh} 
                      onChange={(e) => updateField('hero.title.zh', e.target.value)}
                      className="w-full p-3 border rounded-xl h-24"
                    />
                  </div>
                </div>
              </section>

              {/* Overview Section */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Overview & Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Overview Image</label>
                    <input 
                      type="text" 
                      value={tempContent.overview.image} 
                      onChange={(e) => handleImageUpdate('overview.image', e.target.value)}
                      className="w-full p-3 border rounded-xl text-xs font-mono"
                      placeholder="Paste Image or Google Drive URL"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {(['developer', 'towers', 'location', 'tenure', 'completion'] as const).map((field) => (
                      <div key={field} className="col-span-2 sm:col-span-1">
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">{field}</label>
                        <input 
                          type="text" 
                          value={(tempContent as any).overview.details[field]?.en || ''} 
                          onChange={(e) => {
                            const newDetails = { ...tempContent.overview.details };
                            (newDetails as any)[field].en = e.target.value;
                            updateField('overview.details', newDetails);
                          }}
                          className="w-full p-2 border rounded-lg text-sm"
                          placeholder="English"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Section */}
              <section>
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Why Choose Items</h3>
                </div>
                <div className="space-y-4">
                  {tempContent.whyChoose?.items.map((item, idx) => (
                    <div key={idx} className="p-4 border rounded-2xl bg-gray-50">
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          value={item.title.en} 
                          placeholder="Title"
                          onChange={(e) => {
                            const newItems = [...tempContent.whyChoose.items];
                            newItems[idx].title.en = e.target.value;
                            updateField('whyChoose.items', newItems);
                          }}
                          className="p-2 border rounded-lg text-sm col-span-2"
                        />
                        <textarea 
                          value={item.description.en} 
                          placeholder="Description"
                          onChange={(e) => {
                            const newItems = [...tempContent.whyChoose.items];
                            newItems[idx].description.en = e.target.value;
                            updateField('whyChoose.items', newItems);
                          }}
                          className="p-2 border rounded-lg text-sm col-span-2 h-20"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

               {/* Towers Section */}
              {tempContent.towers && (
                <section>
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Towers & Floor Plans</h3>
                  <div className="space-y-12">
                    {(['so', 'jewel'] as const).map((towerKey) => (
                      <div key={towerKey} className="p-6 border rounded-3xl bg-gray-50/50">
                        <div className="flex items-center gap-3 mb-6">
                           <LayoutIcon className="w-5 h-5 text-oxley-gold" />
                           <p className="text-sm font-bold text-gray-900 uppercase">{towerKey === 'so' ? 'SO/ Residences' : 'Jewel Residences'}</p>
                        </div>
                        
                        <div className="space-y-4 mb-8">
                          <div className="flex gap-4">
                            <div className="w-1/2">
                              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Tower Image URL</label>
                              <input 
                                type="text" 
                                value={tempContent.towers[towerKey].image || ''} 
                                placeholder="Tower Image URL"
                                onChange={(e) => {
                                  const newTowers = { ...tempContent.towers };
                                  newTowers[towerKey].image = normalizeDriveUrl(e.target.value);
                                  updateField('towers', newTowers);
                                }}
                                className="w-full p-2 border rounded-lg text-sm font-mono"
                              />
                            </div>
                            <div className="w-1/2">
                              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Tower Name (EN)</label>
                              <input 
                                type="text" 
                                value={tempContent.towers[towerKey].name.en} 
                                placeholder="Tower Name (EN)"
                                onChange={(e) => {
                                  const newTowers = { ...tempContent.towers };
                                  newTowers[towerKey].name.en = e.target.value;
                                  updateField('towers', newTowers);
                                }}
                                className="w-full p-2 border rounded-lg text-sm"
                              />
                            </div>
                          </div>
                          <textarea 
                            value={tempContent.towers[towerKey].description.en} 
                            placeholder="Tower Description"
                            onChange={(e) => {
                              const newTowers = { ...tempContent.towers };
                              newTowers[towerKey].description.en = e.target.value;
                              updateField('towers', newTowers);
                            }}
                            className="w-full p-3 border rounded-xl h-20 text-sm"
                          />
                        </div>

                        {/* Layouts Section */}
                        <div className="space-y-4">
                           <div className="flex justify-between items-center px-1">
                              <div className="flex flex-col">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Unit Layouts ({tempContent.towers[towerKey].layouts.length})</p>
                                <button 
                                  onClick={() => {
                                    if (confirm('Reset layouts to defaults for this tower? This will replace your current current changes for these units.')) {
                                      const newTowers = { ...tempContent.towers };
                                      newTowers[towerKey].layouts = JSON.parse(JSON.stringify(INITIAL_CONTENT.towers[towerKey].layouts));
                                      updateField('towers', newTowers);
                                    }
                                  }}
                                  className="text-[9px] text-oxley-gold font-bold uppercase mt-1 hover:underline"
                                >
                                  Reset to Defaults
                                </button>
                              </div>
                              <button 
                                onClick={() => {
                                  const newTowers = { ...tempContent.towers };
                                  const newLayout: LayoutItem = {
                                    id: Date.now().toString(),
                                    type: { en: 'New Layout', zh: '新户型' },
                                    size: { en: '000 sq.ft', zh: '000 平方英尺' },
                                    description: { en: 'Layout description', zh: '户型描述' },
                                    image: 'https://images.unsplash.com/photo-1545324418-f1d3ac1ef250?q=80&w=1000',
                                    perks: []
                                  };
                                  newTowers[towerKey].layouts.push(newLayout);
                                  updateField('towers', newTowers);
                                }}
                                className="text-[10px] bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-1.5"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add Layout</span>
                              </button>
                           </div>

                           <div className="space-y-4">
                              {tempContent.towers[towerKey].layouts.map((layout, lIdx) => (
                                <div key={layout.id} className="bg-white border rounded-2xl p-4 shadow-sm relative group">
                                   <button 
                                      onClick={() => {
                                        const newTowers = { ...tempContent.towers };
                                        newTowers[towerKey].layouts = newTowers[towerKey].layouts.filter(l => l.id !== layout.id);
                                        updateField('towers', newTowers);
                                      }}
                                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                   >
                                      <Trash2 className="w-4 h-4" />
                                   </button>
                                   
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="space-y-3">
                                         <div>
                                            <label className="text-[9px] uppercase font-bold text-gray-400 ml-1">Type & Size</label>
                                            <div className="flex gap-2">
                                               <div className="w-1/2 space-y-1">
                                                  <input 
                                                     type="text" 
                                                     value={layout.type.en} 
                                                     placeholder="Type EN"
                                                     onChange={(e) => {
                                                       const newTowers = { ...tempContent.towers };
                                                       newTowers[towerKey].layouts[lIdx].type.en = e.target.value;
                                                       updateField('towers', newTowers);
                                                     }}
                                                     className="w-full p-2 border rounded-lg text-sm"
                                                  />
                                                  <input 
                                                     type="text" 
                                                     value={layout.type.zh} 
                                                     placeholder="Type ZH"
                                                     onChange={(e) => {
                                                       const newTowers = { ...tempContent.towers };
                                                       newTowers[towerKey].layouts[lIdx].type.zh = e.target.value;
                                                       updateField('towers', newTowers);
                                                     }}
                                                     className="w-full p-2 border rounded-lg text-sm"
                                                  />
                                               </div>
                                               <div className="w-1/2 space-y-1">
                                                  <input 
                                                     type="text" 
                                                     value={layout.size.en} 
                                                     placeholder="Size EN"
                                                     onChange={(e) => {
                                                       const newTowers = { ...tempContent.towers };
                                                       newTowers[towerKey].layouts[lIdx].size.en = e.target.value;
                                                       updateField('towers', newTowers);
                                                     }}
                                                     className="w-full p-2 border rounded-lg text-sm"
                                                  />
                                                  <input 
                                                     type="text" 
                                                     value={layout.size.zh} 
                                                     placeholder="Size ZH"
                                                     onChange={(e) => {
                                                       const newTowers = { ...tempContent.towers };
                                                       newTowers[towerKey].layouts[lIdx].size.zh = e.target.value;
                                                       updateField('towers', newTowers);
                                                     }}
                                                     className="w-full p-2 border rounded-lg text-sm"
                                                  />
                                               </div>
                                            </div>
                                         </div>
                                         <div className="space-y-1">
                                            <textarea 
                                               value={layout.description.en} 
                                               placeholder="Description EN"
                                               onChange={(e) => {
                                                 const newTowers = { ...tempContent.towers };
                                                 newTowers[towerKey].layouts[lIdx].description.en = e.target.value;
                                                 updateField('towers', newTowers);
                                               }}
                                               className="w-full p-2 border rounded-lg text-sm h-12"
                                            />
                                            <textarea 
                                               value={layout.description.zh} 
                                               placeholder="Description ZH"
                                               onChange={(e) => {
                                                 const newTowers = { ...tempContent.towers };
                                                 newTowers[towerKey].layouts[lIdx].description.zh = e.target.value;
                                                 updateField('towers', newTowers);
                                               }}
                                               className="w-full p-2 border rounded-lg text-sm h-12"
                                            />
                                         </div>
                                      </div>
                                      <div className="space-y-3">
                                         <div>
                                            <label className="text-[9px] uppercase font-bold text-gray-400 ml-1">Floor Plan Image (G-Drive Supported)</label>
                                            <input 
                                               type="text" 
                                               value={layout.image} 
                                               placeholder="URL"
                                               onChange={(e) => {
                                                 const newTowers = { ...tempContent.towers };
                                                 newTowers[towerKey].layouts[lIdx].image = normalizeDriveUrl(e.target.value);
                                                 updateField('towers', newTowers);
                                               }}
                                               className="w-full p-2 border rounded-lg text-xs font-mono"
                                            />
                                         </div>
                                         <div className="h-20 border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                                            <img src={layout.image} alt="Preview" className="h-full object-contain" />
                                         </div>
                                      </div>
                                   </div>
                                </div>
                              ))}
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">CTA & Lead Form</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">CTA Title (EN)</label>
                    <input 
                      type="text" 
                      value={tempContent.cta.title.en} 
                      onChange={(e) => updateField('cta.title.en', e.target.value)}
                      className="w-full p-3 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Lead Collection Type</label>
                    <select 
                      value={tempContent.cta.formType || 'whatsapp'} 
                      onChange={(e) => updateField('cta.formType', e.target.value)}
                      className="w-full p-3 border rounded-xl"
                    >
                      <option value="whatsapp">WhatsApp Button Only</option>
                      <option value="built-in">Built-in Contact Form (Email to {tempContent.agent.email || 'saltyfish1987@gmail.com'})</option>
                      <option value="embed">Custom Embed (Briksfunnel etc.)</option>
                    </select>
                  </div>
                  {tempContent.cta.formType === 'embed' && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Briksfunnel Embed Code</label>
                      <textarea 
                        value={tempContent.cta.embedCode || ''} 
                        onChange={(e) => updateField('cta.embedCode', e.target.value)}
                        className="w-full p-3 border rounded-xl h-32 font-mono text-xs"
                        placeholder="Paste your code from briksfunnel here."
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* Location Section */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Location & Map</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Map Image URL (G-Drive Supported)</label>
                        <input 
                          type="text" 
                          value={tempContent.location.mapImage} 
                          onChange={(e) => handleImageUpdate('location.mapImage', e.target.value)}
                          className="w-full p-3 border rounded-xl text-xs font-mono"
                          placeholder="Paste Image or Google Drive URL"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Location Title</label>
                        <input 
                          type="text" 
                          value={tempContent.location.title.en} 
                          onChange={(e) => updateField('location.title.en', e.target.value)}
                          className="w-full p-3 border rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="h-full min-h-[140px] border rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center relative group">
                      <img 
                        src={tempContent.location.mapImage} 
                        alt="Map Preview" 
                        className="w-full h-full object-cover transition-all" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200';
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 py-2 bg-black/40 text-white text-[8px] text-center font-bold tracking-widest uppercase">Live Map Preview</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location Description (EN)</label>
                    <textarea 
                      value={tempContent.location.description.en} 
                      onChange={(e) => updateField('location.description.en', e.target.value)}
                      className="w-full p-3 border rounded-xl h-24"
                    />
                  </div>
                </div>
              </section>

              {/* Agent Details */}
              <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Agent & Compliance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Agent Name</label>
                    <input 
                      type="text" 
                      value={tempContent.agent.name} 
                      onChange={(e) => updateField('agent.name', e.target.value)}
                      className="w-full p-3 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">REN Number</label>
                    <input 
                      type="text" 
                      value={tempContent.agent.ren} 
                      onChange={(e) => updateField('agent.ren', e.target.value)}
                      className="w-full p-3 border rounded-xl"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                    <input 
                      type="text" 
                      value={tempContent.agent.phone} 
                      onChange={(e) => updateField('agent.phone', e.target.value)}
                      className="w-full p-3 border rounded-xl"
                    />
                  </div>
                </div>
              </section>

              {/* Features List (Simple Example of Array Edit) */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Key Features</h3>
                  <button 
                    onClick={() => {
                      const newItems = [...tempContent.features.items, {
                        id: Date.now().toString(),
                        title: { en: 'New Feature', zh: '新亮点' },
                        description: { en: 'Description', zh: '描述' },
                        icon: 'Home'
                      }];
                      updateField('features.items', newItems);
                    }}
                    className="flex items-center space-x-1 text-xs bg-black text-white px-3 py-1.5 rounded-full"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Item</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {tempContent.features.items.map((item, idx) => (
                    <div key={item.id} className="p-4 border rounded-2xl bg-gray-50 relative group">
                      <button 
                         onClick={() => {
                           const newItems = tempContent.features.items.filter(i => i.id !== item.id);
                           updateField('features.items', newItems);
                         }}
                         className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          value={item.title.en} 
                          placeholder="Title (EN)"
                          onChange={(e) => {
                            const newItems = [...tempContent.features.items];
                            newItems[idx].title.en = e.target.value;
                            updateField('features.items', newItems);
                          }}
                          className="p-2 border rounded-lg text-sm"
                        />
                        <input 
                          type="text" 
                          value={item.title.zh} 
                          placeholder="Title (ZH)"
                           onChange={(e) => {
                            const newItems = [...tempContent.features.items];
                            newItems[idx].title.zh = e.target.value;
                            updateField('features.items', newItems);
                          }}
                          className="p-2 border rounded-lg text-sm"
                        />
                         <input 
                          type="text" 
                          value={item.icon || ''} 
                          placeholder="Icon Name"
                           onChange={(e) => {
                            const newItems = [...tempContent.features.items];
                            newItems[idx].icon = e.target.value;
                            updateField('features.items', newItems);
                          }}
                          className="p-2 border rounded-lg text-sm col-span-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Photo Gallery */}
               <section>
                 <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Visual Gallery</h3>
                 <div className="grid grid-cols-2 gap-4">
                   {tempContent.gallery.items.map((item, idx) => (
                     <div key={item.id} className="relative group rounded-xl overflow-hidden aspect-video border bg-gray-50">
                       <img src={item.url} alt="" className="w-full h-full object-cover opacity-50" />
                       <div className="absolute inset-0 p-2 flex flex-col justify-end">
                         <input 
                           type="text"
                           value={item.url}
                           onChange={(e) => {
                             const newItems = [...tempContent.gallery.items];
                             newItems[idx].url = normalizeDriveUrl(e.target.value);
                             updateField('gallery.items', newItems);
                           }}
                           className="w-full text-[10px] bg-white/90 p-1 rounded outline-none border mb-1"
                         />
                         <input 
                           type="text"
                           value={item.title}
                           onChange={(e) => {
                             const newItems = [...tempContent.gallery.items];
                             newItems[idx].title = e.target.value;
                             updateField('gallery.items', newItems);
                           }}
                           className="w-full text-[10px] bg-white/90 p-1 rounded outline-none border"
                         />
                       </div>
                       <button 
                         onClick={() => {
                           const newItems = tempContent.gallery.items.filter(i => i.id !== item.id);
                           updateField('gallery.items', newItems);
                         }}
                         className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full"
                       >
                         <Trash2 className="w-3 h-3" />
                       </button>
                     </div>
                   ))}
                    <button 
                      onClick={() => {
                        const newItems = [...tempContent.gallery.items, {
                          id: Date.now().toString(),
                          url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
                          title: 'New Image'
                        }];
                        updateField('gallery.items', newItems);
                      }}
                      className="border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-4 hover:border-black transition-colors"
                    >
                      <Plus className="w-6 h-6 text-gray-400" />
                      <span className="text-xs text-gray-400 mt-2">Add Image</span>
                    </button>
                 </div>
               </section>
            </div>

            <div className="p-8 border-t border-gray-100 bg-white">
              <button 
                onClick={handleSave}
                className="w-full bg-black text-white p-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-gray-900 transition-all shadow-xl shadow-black/10"
              >
                <Save className="w-5 h-5" />
                <span>Publish Changes</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const FloatingButtons: React.FC = () => {
  const { content, setIsEditing } = useContent();
  const whatsappUrl = `https://wa.me/${content.agent.phone}?text=${encodeURIComponent(content.agent.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col space-y-4">
      {/* CMS Trigger */}
      <button
        onClick={() => setIsEditing(true)}
        className="w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all border border-gray-100"
        title="Admin Panel"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
