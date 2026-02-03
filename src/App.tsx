import profileImg from './assets/images/profile.jpg';
import kwartrackLogin from './assets/images/kwartrack_login.jpg';
import kwartrackLanding from './assets/images/kwartrack_landing.jpg';
import dashboardImg from './assets/images/dashboard.jpg';
import transactionsImg from './assets/images/transactions.jpg';
import budgetsImg from './assets/images/budgets.jpg';
import settingsImg from './assets/images/settings.jpg';

import React, { useState } from 'react';
import { Home, Mail, Phone, ArrowRight, X, ExternalLink, LucideIcon } from 'lucide-react';


// Type Definitions
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface ContactInfoProps {
  onClose: () => void;
}

interface ProjectSectionProps {
  onClose: () => void;
}

type ViewType = 'home' | 'contact' | 'project';

// Reusable Button Component
const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  icon: Icon, 
  className = '' 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105',
    secondary: 'bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 hover:bg-white/20 hover:border-slate-300',
    ghost: 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

// Reusable Card Component
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 ${className}`}>
      {children}
    </div>
  );
};

// Contact Info Component
const ContactInfo: React.FC<ContactInfoProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <Card className="max-w-md w-full relative animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Get in Touch
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</p>
              <p className="text-lg text-slate-900 dark:text-white font-semibold">09816223351</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
              <p className="text-lg text-slate-900 dark:text-white font-semibold break-all">dsabanal@gmail.com</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Project Section Component
const ProjectSection: React.FC<ProjectSectionProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto p-4 animate-fadeIn">
      <div className="min-h-screen flex items-center justify-center py-8">
        <Card className="max-w-4xl w-full relative animate-slideUp">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            KwarTrack
          </h2>
          
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-8">Budget & Financial Tracking System</p>
          
          {/* Project Screenshots */}
          <div className="grid gap-6 mb-8">
            {[
              kwartrackLanding,
              kwartrackLogin,
              dashboardImg,
              transactionsImg,
              budgetsImg,
              settingsImg,
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`KwarTrack Screenshot ${index + 1}`}
                className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 w-full object-cover"
              />
            ))}
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">About the Project</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              KwarTrack is a simple, user-friendly budget and financial tracking system that helps individuals and students monitor their income, expenses, and savings in real time through desktop. Many individuals, especially students and young professionals, struggle with managing their finances due to a lack of proper tools, discipline, and visibility into their spending habits.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
              Budget Tracking
            </span>
            <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
              Financial Management
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Desktop Application
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>


      {/* Header / Navigation */}
      <header className="relative z-10 p-6 md:p-8">
        <nav className="flex justify-end gap-3">
          <Button 
            variant="secondary" 
            onClick={() => setView('contact')}
            icon={Mail}
          >
            Contact Me
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center max-w-[1600px] mx-auto">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-slideInLeft lg:pl-8 xl:pl-16">
            <div>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Welcome to my Site
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                Hi, I am Dan Sabanal, a Web Developer.
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a focused and talented BS-CS student currently pursuing my bachelor degree from Ateneo de Davao University
              </p>
            </div>
            
            <Button 
              onClick={() => setView('project')}
              icon={ArrowRight}
              className="text-lg"
            >
              My Project
            </Button>
          </div>
          
          {/* Right Side - Profile Picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start animate-slideInRight w-full lg:pr-8 xl:pr-16">
            <div className="relative group max-w-full">
              {/* Decorative border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl p-4 shadow-2xl max-w-full">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] max-w-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Profile picture placeholder */}
                  <img
                    src={profileImg}
                    alt="Dan Sabanal"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Modals */}
      {view === 'contact' && <ContactInfo onClose={() => setView('home')} />}
      {view === 'project' && <ProjectSection onClose={() => setView('home')} />}
      
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
