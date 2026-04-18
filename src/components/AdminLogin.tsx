import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  Loader2,
  ArrowLeft
} from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const adminSchema = z.object({
  adminUsername: z.string().min(1, "Admin username is required"),
  adminPassword: z.string().min(6, "Password must be at least 6 characters"),
});

type AdminFormData = z.infer<typeof adminSchema>;

interface AdminLoginProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onCancel }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminFormData>({
    resolver: zodResolver(adminSchema),
  });

  const onSubmit = async (data: AdminFormData) => {
    setIsSubmitting(true);
    try {
      console.log('Admin Login Attempt:', data.adminUsername);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, any login works
      toast.success('Admin authentication successful! Redirecting to dashboard...');
      onSuccess();
    } catch (error) {
      toast.error('Invalid credentials. Access denied.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-10 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-slate-800 p-4 rounded-2xl mb-4 border border-slate-700">
          <ShieldCheck className="w-10 h-10 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold">Admin Console</h2>
        <p className="text-sm text-slate-400">Secure administrative access only</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="adminUsername" className="text-slate-300">Admin Username</Label>
          <div className="relative group">
            <User className="absolute left-3 top-3 w-4 h-4 text-slate-500 group-focus-within:text-yellow-500 transition-colors" />
            <Input 
              id="adminUsername" 
              placeholder="admin_id" 
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus-visible:ring-yellow-500/20 focus-visible:border-yellow-500 h-11" 
              {...register('adminUsername')} 
            />
          </div>
          {errors.adminUsername && <p className="text-xs text-red-400 font-medium">{errors.adminUsername.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="adminPassword" className="text-slate-300">Password</Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-500 group-focus-within:text-yellow-500 transition-colors" />
            <Input 
              id="adminPassword" 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="pl-10 pr-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus-visible:ring-yellow-500/20 focus-visible:border-yellow-500 h-11" 
              {...register('adminPassword')} 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.adminPassword && <p className="text-xs text-red-400 font-medium">{errors.adminPassword.message}</p>}
        </div>

        <div className="pt-2 flex flex-col gap-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold h-12 w-full transition-all active:scale-[0.98]"
          >
            {isSubmitting ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Authenticating...</>
            ) : (
              'Sign In to Admin'
            )}
          </Button>
          
          <Button 
            type="button" 
            variant="link" 
            onClick={onCancel}
            className="text-slate-400 hover:text-slate-200 w-full text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Application
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;