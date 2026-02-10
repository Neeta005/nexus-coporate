import React from 'react';
import { Section } from '../components/ui/Section';
import { content } from '../data/content';

export const About: React.FC = () => {
  return (
    <>
      {/* Modern Header */}
      <div className="bg-slate-50 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/50 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">{content.about.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">{content.about.intro}</p>
        </div>
      </div>

      {/* Sticky Scroll Section for Mission/Vision */}
      <Section className="!py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start py-20">
           <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Driven by purpose,<br/>defined by values.</h2>
              <p className="text-lg text-slate-600 mb-8">
                 We exist to help organizations find their path in a chaotic world. Our north star is clarity, efficiency, and human-centric progress.
              </p>
              <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
           </div>
           
           <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100">
                 <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Our Mission</h3>
                 <p className="text-slate-600 leading-relaxed">{content.about.mission}</p>
              </div>
              
              <div className="bg-slate-900 p-8 rounded-2xl shadow-card text-white">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 </div>
                 <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
                 <p className="text-slate-300 leading-relaxed">{content.about.vision}</p>
              </div>
           </div>
        </div>
      </Section>

      {/* Values Cards */}
      <Section background="gray">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Core Principles</h2>
          <p className="text-slate-600">The foundation upon which we build every partnership and project.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {content.about.values.map((val, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="text-5xl font-display font-bold text-slate-100 mb-4 group-hover:text-primary-100 transition-colors">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600">{val.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team - Image Reveal */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Meet the Leadership</h2>
          <p className="text-slate-600">The minds shaping the future of Nexus.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {content.about.team.map((member) => (
            <div key={member.id} className="group relative">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-200 aspect-[3/4]">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <div className="text-primary-600 font-medium">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};