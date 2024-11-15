import React, { useState } from 'react';
import { Heart, Users, Phone, CreditCard, Scroll, UserPlus } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isKannada, setIsKannada] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleLanguage = () => setIsKannada(!isKannada);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Toaster position="top-center" />
        <Header 
          toggleLanguage={toggleLanguage}
          isKannada={isKannada}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          isKannada={isKannada}
        />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1604196557506-ee7469cbf44d?auto=format&fit=crop&q=80"
                alt="Background"
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {isKannada ? 'ಹಾರ್ದಿಕ ಸ್ವಾಗತ' : 'Welcome'}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {isKannada 
                  ? 'ಆತ್ಮೀಯ ಜಂಗಮ ಮತ್ತು ಲಿಂಗಾಯತ ಬಂಧುಗಳೇ' 
                  : 'Dear Jangama and Lingayat Community Members'}
              </p>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 mx-auto transition-all transform hover:scale-105"
              >
                <UserPlus className="w-6 h-6" />
                <span>{isKannada ? 'ನೋಂದಣಿ ಮಾಡಿ' : 'Register Now'}</span>
              </button>
              <br></br>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {isKannada 
                  ? 'ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಸಂಶಯಗಳಿಗಾಗಿ ಈ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ' 
                  : 'For query and doubts call to this number'}
              </p>
              
              <a href="tel:7829146919" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
                  📞 7829146919
                </a>
            </div>
          </section>

          {/* Rest of the sections remain the same */}
          {/* Introduction Section */}
          <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <Heart className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isKannada ? 'ಗ್ರೂಪ್ ಪರಿಚಯ' : 'About Us'}
                </h2>
              </div>
              <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isKannada 
                  ? 'ಈ ಗ್ರೂಪ್ ಜಂಗಮರಿಗೆ ಮತ್ತು ಲಿಂಗಾಯತರಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ಕೈಗೊಂಡ ಸಣ್ಣ ಸೇವೆ.' 
                  : 'This group is a small service initiative for the convenience of Jangama and Lingayat community members.'}
              </p>
            </div>
          </section>

          {/* Contact Method Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <Users className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isKannada ? 'ಕಂಟಾಕ್ಟ್ ವಿಧಾನ' : 'Contact Method'}
                </h2>
              </div>
              <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isKannada 
                  ? 'ವಧು ಅಥವಾ ವರ ಅವರು ಮನಸ್ಸಿಗೆ ಬಂದರೆ ನೇರವಾಗಿ ಅವರಿಗೆ ಸಂಪರ್ಕ ಮಾಡಬೇಕು.' 
                  : 'Contact the bride or groom directly if interested. We do not act as intermediaries.'}
              </p>
            </div>
          </section>

          {/* Registration Rules Section */}
          <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <Scroll className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isKannada ? 'ನೊಂದಾಯಿಸಲು ನಿಯಮಗಳು' : 'Registration Rules'}
                </h2>
              </div>
              <div className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                <p className="text-xl mb-6">
                  {isKannada 
                    ? 'ಹೆಸರನ್ನು ನೊಂದಾಯಿಸಲು ಬಯಸುವವರು ಕೆಳಗಿನ ನಂಬರಿಗೆ ಹೂಡಿಕೆಯನ್ನು ಮಾಡಿ, 3 ತಿಂಗಳ ಕಾಲವಧಿಗೆ.' 
                    : 'Those who wish to register, please make the investment to the number below for a 3-month period.'}
                </p>
                <a href="tel:7829146919" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
                  📞 7829146919
                </a>
              </div>
            </div>
          </section>

          {/* Payment Methods Section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center mb-12">
                <CreditCard className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isKannada ? 'ಪಾವತಿ ವಿಧಾನಗಳು' : 'Payment Methods'}
                </h2>
              </div>
              <div className="flex justify-center space-x-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {isKannada ? 'ಲಭ್ಯವಿರುವ ವಿಧಾನಗಳು' : 'Available Methods'}
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Google Pay
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Phone Pay
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Bank Transfer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer isKannada={isKannada} />
      </div>
    </div>
  );
}

export default App;