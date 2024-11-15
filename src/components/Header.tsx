import { Sun, Moon, Languages } from 'lucide-react';

interface HeaderProps {
  toggleLanguage: () => void;
  isKannada: boolean;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ toggleLanguage, isKannada, isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="bg-orange-500 dark:bg-orange-700 text-white py-8 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {isKannada ? 'ಕಲ್ಯಾಣ ಬೆಳಕು' : 'Kalyana Belaku'}
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-medium">
            {isKannada 
              ? 'ಜಂಗಮ ಮತ್ತು ಲಿಂಗಾಯಿತ ವಧು ವರರ ವೇದಿಕೆ' 
              : 'Jangama and Lingayat Matrimony Platform'}
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-orange-600 transition-colors"
            aria-label="Toggle Language"
          >
            <Languages className="w-6 h-6" />
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-orange-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          
          <a 
            href="tel:7829146919" 
            className="hidden md:flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full"
          >
            <span className="text-xl">📞</span>
            <span className="font-semibold">7829146919</span>
          </a>
        </div>
      </div>
    </header>
  );
}