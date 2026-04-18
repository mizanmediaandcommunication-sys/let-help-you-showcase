import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import AdminLogin from './components/AdminLogin';
import { UserPlus, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Button } from './components/ui/button';

type ViewState = 'hero' | 'register' | 'admin' | 'success-user' | 'success-admin';

function App() {
  const [view, setView] = useState<ViewState>('hero');

  const handleStart = () => setView('register');
  const handleAdmin = () => setView('admin');
  const handleUserSuccess = () => {
    setView('success-user');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleAdminSuccess = () => {
    setView('success-admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCancel = () => setView('hero');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'hero' && (
            <motion.section
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mx-auto lg:mx-0">
                  <UserPlus className="w-4 h-4" />
                  <span>Join Siket Sacco Today</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Empower Your Financial <span className="text-green-700">Future</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                  Become a member of Siket Sacco and enjoy exclusive financial benefits, competitive interest rates, and a community dedicated to your growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    onClick={handleStart}
                    className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-6 text-lg shadow-xl shadow-green-100 transition-all hover:translate-y-[-2px]"
                  >
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleAdmin}
                    className="border-slate-300 text-slate-700 font-semibold px-8 py-6 text-lg transition-all hover:bg-slate-50"
                  >
                    Admin Access
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 pt-4 justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p>Joined by 10,000+ members this month</p>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/32ebbc17-a6bc-4375-94eb-14c3fd21098c/hero-bg-2-c1c575e6-1776523592190.webp" 
                    alt="Happy Members" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Secure & Reliable</p>
                      <p className="text-xs text-slate-500">Regulated Financial Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {view === 'success-user' && (
            <motion.section
              key="success-user"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 px-4 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Registration Successful!</h2>
              <p className="text-lg text-slate-600 mb-8">
                Your account has been created successfully. You can now log in to access your membership benefits.
              </p>
              <Button 
                onClick={() => setView('hero')} 
                className="bg-green-700 hover:bg-green-800 font-bold px-10 py-6"
              >
                Return Home
              </Button>
            </motion.section>
          )}

          {view === 'success-admin' && (
            <motion.section
              key="success-admin"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 px-4 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-slate-900 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <ShieldAlert className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Admin Authenticated</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                Welcome back, Administrator. You are now logged into the management console.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => setView('hero')} 
                  variant="outline"
                  className="font-bold px-10 py-6"
                >
                  Log Out
                </Button>
                <Button 
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-6"
                >
                  Go to Dashboard
                </Button>
              </div>
            </motion.section>
          )}

          {view === 'register' && (
            <motion.section
              key="form-register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="py-12 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <RegistrationForm 
                  onSuccess={handleUserSuccess} 
                  onCancel={handleCancel}
                  onSwitchToAdmin={handleAdmin}
                />
              </div>
            </motion.section>
          )}

          {view === 'admin' && (
            <motion.section
              key="form-admin"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="py-12 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto"
            >
              <AdminLogin 
                onSuccess={handleAdminSuccess} 
                onCancel={handleCancel} 
              />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;