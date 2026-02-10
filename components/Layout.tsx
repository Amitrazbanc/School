
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, LogIn, LogOut } from 'lucide-react';
import { User } from '../types';

interface LayoutProps {
  user: User | null;
  logout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white py-2 px-4 text-xs md:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> +977-XXXXXXXXXX</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> info@saraswati.edu.np</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Satyawati-06, Gulmi</span>
            {user ? (
              <button onClick={logout} className="flex items-center hover:text-indigo-300 transition-colors">
                <LogOut className="w-4 h-4 mr-1" /> Logout
              </button>
            ) : (
              <Link to="/login" className="flex items-center hover:text-indigo-300 transition-colors">
                <LogIn className="w-4 h-4 mr-1" /> Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                  S
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-indigo-900 leading-tight">Shree Saraswati</h1>
                  <p className="text-xs text-indigo-600 uppercase tracking-widest">Secondary School</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-indigo-700 bg-indigo-50' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {user && (
                <Link to="/admin" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md">
                  Dashboard
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'text-indigo-700 bg-indigo-50' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center mr-2">S</span>
                Saraswati School
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the future generation through quality education and character building. Shree Saraswati Secondary School is committed to excellence in every aspect of a student's development.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-indigo-500 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">Our History</Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors">Programs</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Campus Life</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-indigo-500 pb-2 inline-block">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0" />
                  <span>Satyawati-06, Gulmi District, Nepal</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0" />
                  <span>+977-XXXXXXXXXX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-indigo-500 flex-shrink-0" />
                  <span>contact@saraswati.edu.np</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-indigo-500 pb-2 inline-block">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
              <p className="text-xs text-gray-500">Subscribe to our newsletter for latest updates.</p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Shree Saraswati Secondary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
