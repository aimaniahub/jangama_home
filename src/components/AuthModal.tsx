import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { X, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider(); // Initialize Google provider

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isKannada: boolean;
}

export default function AuthModal({ isOpen, onClose, isKannada }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setIsSuccess(true);
      toast.success(isKannada ? 'ಯಶಸ್ವಿಯಾಗಿ ಪ್ರವೇಶಿಸಲಾಗಿದೆ!' : 'Successfully authenticated!');
      window.location.href = 'https://jangama4register.netlify.app/';
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsSuccess(true);
      toast.success(isKannada ? 'Google ಮೂಲಕ ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದೆ!' : 'Successfully signed in with Google!');
      window.location.href = 'https://jangama4register.netlify.app/';
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error: any) => {
    let errorMessage = isKannada ? 'ದೋಷ ಸಂಭವಿಸಿದೆ' : 'An error occurred';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = isKannada ? 'ಈ ಇಮೇಲ್ ಈಗಾಗಲೇ ಬಳಕೆಯಲ್ಲಿದೆ' : 'Email already in use';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = isKannada ? 'ಅಮಾನ್ಯ ಇಮೇಲ್' : 'Invalid email';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = isKannada ? 'ದುರ್ಬಲ ಪಾಸ್‌ವರ್ಡ್' : 'Weak password';
    }
    toast.error(errorMessage);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {isKannada ? 'ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ!' : 'Successfully Registered!'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {isKannada ? 'ನಿಮ್ಮ ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ. ನೀವು ಈಗ ಲಾಗಿನ್ ಮಾಡಬಹುದು.' : 'Your account has been successfully created. You can now proceed with the login.'}
          </p>
          <button onClick={onClose} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md transition-colors">
            {isKannada ? 'ಮುಂದುವರಿಯಿರಿ' : 'Continue'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {isLogin ? (isKannada ? 'ಲಾಗಿನ್' : 'Login') : (isKannada ? 'ನೋಂದಣಿ' : 'Register')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {isKannada ? 'ಇಮೇಲ್' : 'Email'}
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {isKannada ? 'ಪಾಸ್‌ವರ್ಡ್' : 'Password'}
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500" required minLength={6} />
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md transition-colors">
            {isLogin ? (isKannada ? 'ಲಾಗಿನ್' : 'Login') : (isKannada ? 'ನೋಂದಣಿ' : 'Register')}
          </button>

          <button type="button" onClick={handleGoogleSignIn} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors mt-2">
            {isKannada ? 'Google ಮೂಲಕ ಲಾಗಿನ್ ಮಾಡಿ' : 'Sign in with Google'}
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? (isKannada ? 'ಖಾತೆ ಇಲ್ಲವೇ? ' : "Don't have an account? ") : (isKannada ? 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ? ' : 'Already have an account? ')}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-orange-500 hover:text-orange-600">
              {isLogin ? (isKannada ? 'ನೋಂದಣಿ ಮಾಡಿ' : 'Register') : (isKannada ? 'ಲಾಗಿನ್' : 'Login')}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
