
import React from 'react';
import { Target, Eye, BookOpen, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Founded in 1985, Shree Saraswati Secondary School has been a beacon of light in the heart of Satyawati-06.</p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Shree Saraswati Secondary School was established with a vision to provide accessible, high-quality education to the rural community of Satyawati. What began as a small initiative has now grown into a premier institution serving over 1,200 students.</p>
              <p>For over three decades, we have remained committed to our core values of excellence, integrity, and social responsibility, adapting our teaching methods to meet the challenges of the 21st century.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
              <Target className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">To nurture students' cognitive, social, and emotional growth through a holistic educational approach.</p>
            </div>
            <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
              <Eye className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-indigo-200 text-sm">To be a leading center of excellence that empowers students to become lifelong learners and leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1556157382-97dee2dcb04e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Principal" className="h-full w-full object-cover" />
            </div>
            <div className="md:w-2/3 p-8 md:p-16 relative">
              <Quote className="absolute top-8 right-8 w-20 h-20 text-gray-100 -z-0" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Message from the Principal</h2>
                <div className="space-y-4 text-gray-600 italic text-lg leading-relaxed mb-8">
                  "Education is not just about academic results; it's about building character and fostering curiosity. At Shree Saraswati, we strive to create an environment where every child feels valued and inspired to reach their full potential. Welcome to our vibrant community."
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl">Mr. Bishnu Prasad Sharma</p>
                  <p className="text-indigo-600 font-medium">Principal, Shree Saraswati Secondary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
