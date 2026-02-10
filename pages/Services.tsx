import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import { BarChart, Globe, Shield, Users, Zap, Briefcase, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  BarChart, Globe, Shield, Users, Zap, Briefcase
};

export const Services: React.FC = () => {
  return (
    <>
      <div className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-indigo-950"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">{content.services.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">{content.services.intro}</p>
        </div>
      </div>

      <Section background="gray">
        <div className="grid gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <div key={service.id} className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-card transition-all duration-500 border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 group-hover:bg-primary-50 transition-colors duration-500"></div>
                
                <div className="relative z-10 grid md:grid-cols-[80px_1fr] gap-8">
                   <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon size={40} />
                   </div>
                   
                   <div>
                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">{service.title}</h2>
                        <Link to="/contact">
                          <Button variant="ghost" size="sm" className="hidden md:inline-flex group-hover:text-primary-600">
                             Get Started <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </Link>
                     </div>
                     
                     <p className="text-lg text-slate-600 mb-8 max-w-3xl">{service.description}</p>
                     
                     {service.details && (
                       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                         {service.details.map((detail, idx) => (
                           <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                             <Check size={16} className="text-primary-500" />
                             {detail}
                           </div>
                         ))}
                       </div>
                     )}
                     
                     <div className="mt-8 md:hidden">
                        <Link to="/contact">
                           <Button variant="outline" size="sm" fullWidth>Get Started</Button>
                        </Link>
                     </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-primary-600 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need a custom solution?</h2>
             <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
               We understand that every business is unique. Let's discuss your specific requirements.
             </p>
             <Link to="/contact">
               <Button variant="white" size="lg" className="text-primary-700 shadow-xl">
                 Book a Free Strategy Call
               </Button>
             </Link>
         </div>
      </Section>
    </>
  );
};