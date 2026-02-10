import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { content } from '../data/content';
import { X, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openLightbox = (item: PortfolioItem) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  return (
    <>
      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">Selected Work</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">{content.portfolio.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl">{content.portfolio.intro}</p>
        </div>
      </div>

      <Section>
        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {content.portfolio.items.map((item, index) => (
            <div 
              key={item.id} 
              className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden bg-slate-900"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                       View Case Study <ArrowUpRight size={16} />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="md:w-2/3 bg-slate-100 relative group">
               <img 
                 src={selectedItem.imageUrl} 
                 alt={selectedItem.title} 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="md:w-1/3 p-8 md:p-10 overflow-y-auto bg-white flex flex-col justify-between">
               <div>
                  <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{selectedItem.category}</div>
                  <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">{selectedItem.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {selectedItem.description}
                  </p>
                  
                  <div className="space-y-4 py-6 border-t border-slate-100">
                     <div>
                       <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Client</div>
                       <div className="font-medium text-slate-900">Confidential Partner</div>
                     </div>
                     <div>
                       <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Services</div>
                       <div className="font-medium text-slate-900">Strategy, Implementation</div>
                     </div>
                     <div>
                       <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Year</div>
                       <div className="font-medium text-slate-900">2023</div>
                     </div>
                  </div>
               </div>
               
               <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                 Visit Live Site <ArrowUpRight size={18} />
               </button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};