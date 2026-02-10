import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Shield, Users, Zap, Briefcase, Play, CheckCircle } from 'lucide-react';
import { content } from '../data/content';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

// Icon mapping helper
const iconMap = {
  BarChart, Globe, Shield, Users, Zap, Briefcase
};

export const Home: React.FC = () => {
  return (
    <>
      {/* Premium Split Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden pt-20">
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-600/10 rounded-full blur-[120px] animate-blob"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
           <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
               <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
               Reimagining Business
             </div>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
               Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Future</span> <br/>
               of Your Business
             </h1>
             <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
               {content.home.hero.subheadline}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" variant="primary" icon={<ArrowRight size={18} />} className="shadow-glow">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="secondary" className="bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white">
                    View Case Studies
                  </Button>
                </Link>
             </div>
             
             {/* Trust Indicator */}
             <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-center lg:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                          <img src={`https://picsum.photos/100/100?random=${i + 20}`} alt="User" />
                        </div>
                      ))}
                   </div>
                   <div className="text-sm text-slate-400">
                     <span className="text-white font-bold">500+</span> Clients Trusted
                   </div>
                </div>
             </div>
          </div>

          {/* Visual Content - Floating Cards Composition */}
          <div className="relative hidden lg:block h-[600px] perspective-1000">
             {/* Main Image Card */}
             <div className="absolute top-[10%] right-[5%] w-[80%] h-[70%] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out border border-slate-700/50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                   <div className="text-white font-bold text-lg">Strategic Growth</div>
                   <div className="text-slate-300 text-sm">Quarterly projections exceeded</div>
                </div>
             </div>

             {/* Floating UI Card 1 (Stats) */}
             <div className="absolute top-[50%] left-0 bg-white p-5 rounded-xl shadow-card border border-slate-100 animate-float w-64">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-slate-500 text-sm font-medium">Revenue Growth</span>
                   <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                   <div className="h-full bg-primary-600 w-[75%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                   <span>Jan</span>
                   <span>Dec</span>
                </div>
             </div>

             {/* Floating UI Card 2 (Badge) */}
             <div className="absolute top-[5%] right-[20%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg flex items-center gap-3 w-max animate-float" style={{animationDelay: '1s'}}>
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white">
                    <Zap size={20} fill="currentColor" />
                 </div>
                 <div>
                    <div className="text-white font-bold text-sm">Efficiency Boost</div>
                    <div className="text-white/60 text-xs">Optimized Workflows</div>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <Section background="gray" className="relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Expertise tailored to your needs</h2>
          <p className="text-slate-600 text-lg">
            We provide a comprehensive suite of services designed to help you navigate the complexities of the modern business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {content.services.items.slice(0, 6).map((item, idx) => {
            const Icon = iconMap[item.iconName];
            // Make some items span differently for "Bento" look
            const spanClass = idx === 0 || idx === 3 ? "lg:col-span-2" : "";
            
            return (
              <div 
                key={item.id} 
                className={`group bg-white p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-100 relative overflow-hidden ${spanClass}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] transition-colors group-hover:bg-primary-50"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6 max-w-sm">{item.description}</p>
                  <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Modern About Section with Overlapping Images */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="w-full" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block">
                 <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Meeting" />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-dots-pattern opacity-20"></div>
              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full -z-10 blur-3xl"></div>
           </div>
           
           <div className="order-1 lg:order-2">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">About Us</span>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">{content.home.aboutSnippet.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 {content.home.aboutSnippet.content} We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                 {[
                    { label: "Global Reach", desc: "Operations in 40+ countries" },
                    { label: "Proven Results", desc: "98% Client Satisfaction" },
                    { label: "Expert Team", desc: "Top-tier industry veterans" },
                    { label: "Innovation", desc: "Award-winning strategies" }
                 ].map((feat, i) => (
                    <div key={i} className="flex flex-col border-l-2 border-primary-100 pl-4">
                       <span className="font-bold text-slate-900">{feat.label}</span>
                       <span className="text-sm text-slate-500">{feat.desc}</span>
                    </div>
                 ))}
              </div>

              <Link to="/about">
                <Button variant="secondary">Discover Our Story</Button>
              </Link>
           </div>
        </div>
      </Section>

      {/* Stats Counter Section - Dark */}
      <div className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-screen-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {content.home.stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-primary-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Gradient */}
      <Section background="white" className="!py-0">
        <div className="relative bg-primary-600 rounded-3xl overflow-hidden mx-auto my-20 shadow-2xl shadow-primary-900/20">
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 px-8 py-20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to transform your business?</h2>
              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of industry leaders who have chosen Nexus to drive their growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact">
                   <Button size="lg" variant="white" className="text-primary-700">Get Started Now</Button>
                 </Link>
                 <Link to="/contact">
                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white">
                     Schedule Demo
                   </Button>
                 </Link>
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};