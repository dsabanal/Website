import profileImg from './assets/images/profile.jpg';
import kwartrackLogin from './assets/images/kwartrack_login.jpg';
import kwartrackLanding from './assets/images/kwartrack_landing.jpg';
import dashboardImg from './assets/images/dashboard.jpg';
import transactionsImg from './assets/images/transactions.jpg';
import budgetsImg from './assets/images/budgets.jpg';
import settingsImg from './assets/images/settings.jpg';

import React, { useState } from 'react';
import { Home, Mail, Phone, ArrowRight, X, ExternalLink, LucideIcon } from 'lucide-react';

/* ===================== TYPES ===================== */
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ViewType = 'home' | 'contact' | 'project';

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

/* ===================== BUTTON ===================== */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}) => {
  const baseStyles =
    'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105',
    secondary:
      'bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 hover:bg-white/20',
    ghost:
      'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400',
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

/* ===================== CARD ===================== */
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 ${className}`}
  >
    {children}
  </div>
);

/* ===================== CONTACT ===================== */
const ContactInfo: React.FC<ContactInfoProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
    <Card className="max-w-md w-full relative animate-slideUp">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
      >
        <X className="w-6 h-6" />
      </button>

      <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Get in Touch
      </h2>

      <div className="space-y-6">
        <div className="flex gap-4">
          <Phone className="text-emerald-600" />
          <span>09816223351</span>
        </div>
        <div className="flex gap-4">
          <Mail className="text-teal-600" />
          <span className="break-all">dsabanal@gmail.com</span>
        </div>
      </div>
    </Card>
  </div>
);

/* ===================== PROJECT ===================== */
const ProjectSection: React.FC<ProjectSectionProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto p-4 animate-fadeIn">
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-4xl w-full relative animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          KwarTrack
        </h2>

        <div className="grid gap-6">
          {[kwartrackLanding, kwartrackLogin, dashboardImg, transactionsImg, budgetsImg, settingsImg].map(
            (img, i) => (
              <img key={i} src={img} className="rounded-2xl shadow-xl w-full object-cover" />
            )
          )}
        </div>
      </Card>
    </div>
  </div>
);

/* ===================== MAIN ===================== */
const Portfolio: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden">

      {/* ✅ RESPONSIVE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 rounded-full blur-3xl animate-pulse bg-emerald-300/20 dark:bg-emerald-500/10"
          style={{
            width: 'clamp(300px, 50vw, 700px)',
            height: 'clamp(300px, 50vw, 700px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full blur-3xl animate-pulse bg-teal-300/20 dark:bg-teal-500/10"
          style={{
            width: 'clamp(300px, 50vw, 700px)',
            height: 'clamp(300px, 50vw, 700px)',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* CONTENT */}
      <main className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Welcome to my Site
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Hi, I am Dan Sabanal, a Web Developer.
          </p>
          <Button onClick={() => setView('project')} icon={ArrowRight}>
            My Project
          </Button>
        </div>

        <img
          src={profileImg}
          className="rounded-3xl shadow-2xl max-w-md w-full mx-auto object-cover"
        />
      </main>

      {view === 'contact' && <ContactInfo onClose={() => setView('home')} />}
      {view === 'project' && <ProjectSection onClose={() => setView('home')} />}
    </div>
  );
};

export default Portfolio;
