import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Loader2,
  UserPlus
} from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const registrationSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  onSwitchToAdmin: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess, onCancel, onSwitchToAdmin }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      console.log('User Registration Data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Registration successful! Welcome to Siket Sacco.');
      onSuccess();
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-100 p-2 rounded-lg">
          <UserPlus className="w-6 h-6 text-green-700" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
          <p className="text-sm text-slate-500">Join our community today</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative group">
            <User className="absolute left-3 top-3 w-4 h-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
            <Input 
              id="username" 
              placeholder="johndoe123" 
              className="pl-10 focus-visible:ring-green-600/20 focus-visible:border-green-600 h-11" 
              {...register('username')} 
            />
          </div>
          {errors.username && <p className="text-xs text-red-500 font-medium">{errors.username.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative group">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              className="pl-10 focus-visible:ring-green-600/20 focus-visible:border-green-600 h-11" 
              {...register('email')} 
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400 group-focus-within:text-green-600 transition-colors" />
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              className="pl-10 pr-10 focus-visible:ring-green-600/20 focus-visible:border-green-600 h-11" 
              {...register('password')} 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-500 font-medium leading-relaxed">{errors.password.message}</p>}
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight font-bold">
            Must contain uppercase, lowercase, number & symbol
          </p>
        </div>

        <div className="pt-4 flex flex-col gap-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-green-700 hover:bg-green-800 text-white font-bold h-12 w-full shadow-lg shadow-green-200 transition-all active:scale-[0.98]"
          >
            {isSubmitting ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Creating Account...</>
            ) : (
              'Register Now'
            )}
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onCancel}
              className="text-slate-500 hover:text-slate-700 w-full sm:w-auto text-sm"
            >
              Back to Home
            </Button>
            
            <button 
              type="button"
              onClick={onSwitchToAdmin}
              className="text-xs font-semibold text-slate-400 hover:text-green-700 transition-colors underline underline-offset-4"
            >
              Administrative Access?
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;