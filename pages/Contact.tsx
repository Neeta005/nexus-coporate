import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { content } from '../data/content';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
        
        {/* Floating Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
           
           {/* Dark Info Side */}
           <div className="lg:w-5/12 bg-slate-900 text-white p-10 md:p-16 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                 <h2 className="text-3xl font-display font-bold mb-6">Let's talk business.</h2>
                 <p className="text-slate-400 text-lg mb-12">
                   Whether you have a question or want to discuss a new project, our team is here to help.
                 </p>

                 <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400 font-medium mb-1">Our Office</div>
                          <div className="font-semibold">{content.company.address}</div>
                       </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                          <Mail size={24} />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400 font-medium mb-1">Email Us</div>
                          <a href={`mailto:${content.company.email}`} className="font-semibold hover:text-primary-400 transition-colors">{content.company.email}</a>
                       </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                       <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400 font-medium mb-1">Call Us</div>
                          <a href={`tel:${content.company.phone}`} className="font-semibold hover:text-primary-400 transition-colors">{content.company.phone}</a>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative z-10 pt-12 mt-12 border-t border-white/10">
                 <div className="text-sm text-slate-400 mb-4">Connect with us</div>
                 <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                       <span className="font-bold">in</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                       <span className="font-bold">tw</span>
                    </a>
                 </div>
              </div>
           </div>

           {/* Light Form Side */}
           <div className="lg:w-7/12 p-10 md:p-16 bg-white relative">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">Send us a message</h2>
              
              {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                       <Send size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                    <p className="text-slate-600 max-w-xs mx-auto mb-8">We've got your details and will get back to you within 24 hours.</p>
                    <Button onClick={() => setStatus('idle')} variant="outline">Send another</Button>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                          <input
                             type="text"
                             id="name"
                             required
                             value={formState.name}
                             onChange={(e) => setFormState({...formState, name: e.target.value})}
                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                             placeholder="John Doe"
                          />
                       </div>
                       <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                          <input
                             type="email"
                             id="email"
                             required
                             value={formState.email}
                             onChange={(e) => setFormState({...formState, email: e.target.value})}
                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                             placeholder="john@example.com"
                          />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                       <textarea
                          id="message"
                          required
                          rows={6}
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                          placeholder="Tell us about your project..."
                       ></textarea>
                    </div>

                    <div className="pt-4">
                       <Button 
                          type="submit" 
                          size="lg"
                          isLoading={status === 'submitting'}
                          icon={<ArrowRight size={18} />}
                          className="w-full md:w-auto"
                       >
                          Send Message
                       </Button>
                    </div>
                 </form>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};