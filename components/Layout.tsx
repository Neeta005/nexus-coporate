import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { content } from '../data/content';
import { Button } from './ui/Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-600 antialiased">
      {/* Glassmorphism Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-600 rounded-xl rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-xl -rotate-3 transition-transform group-hover:-rotate-6"></div>
              <span className="relative text-white font-display font-bold text-xl">N</span>
            </div>
            <span className={`text-xl font-display font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-900'}`}>
              {content.company.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full p-1 border border-white/20 mr-4 shadow-sm">
              {content.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'bg-slate-900 text-white shadow-md' 
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link to="/contact">
              <Button size="sm" variant="primary">Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-700 bg-white/80 rounded-full hover:bg-slate-100 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl py-6 px-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
            {content.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
               <Link to="/contact" className="block w-full">
                  <Button fullWidth size="lg">Get Started</Button>
               </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="lg:pr-8">
              <Link to="/" className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-white">N</div>
                <span className="text-xl font-display font-bold">{content.company.name}</span>
              </Link>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                {content.company.tagline}. <br/>
                Empowering visionary companies to build the future through strategic innovation.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: content.company.social.linkedin },
                  { icon: Twitter, href: content.company.social.twitter },
                  { icon: Facebook, href: content.company.social.facebook }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-display font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                {content.navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                {content.services.items.slice(0, 5).map((s) => (
                   <li key={s.id}>
                     <Link to="/services" className="hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-200">
                       {s.title}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-display font-semibold mb-6">Stay Updated</h4>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest insights.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg w-full text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button className="bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-lg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <div>&copy; {new Date().getFullYear()} {content.company.name}. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};