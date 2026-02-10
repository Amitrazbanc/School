
import React from 'react';
import { ArrowRight, Bell, Calendar, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const notices = [
    { id: '1', title: 'Annual Examination Schedule 2024', date: 'Oct 15, 2023', category: 'Urgent' },
    { id: '2', title: 'New Admission Open for Grade XI', date: 'Oct 10, 2023', category: 'Admission' },
    { id: '3', title: 'Dashain Vacation Notice', date: 'Oct 05, 2023', category: 'General' },
  ];

  const events = [
    { id: '1', title: 'Science Exhibition', date: 'Nov 12', month: '2023', desc: 'A showcase of innovative projects by our students.' },
    { id: '2', title: 'Cultural Program', date: 'Dec 05', month: '2023', desc: 'Celebrating diversity through music and dance.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853063-913639473ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="School Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Established 1985</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Shaping Minds, <br/><span className="text-indigo-400">Building Futures.</span></h1>
            <p className="text-lg md:text-xl mb-8 text-indigo-100/80 leading-relaxed">
              Providing quality education to the youth of Satyawati-06 for over 35 years. Excellence, Integrity, and Growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/admissions" className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-bold hover:bg-indigo-50 transition-all flex items-center justify-center shadow-lg">
                Admission Open <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-indigo-700/50 backdrop-blur-md text-white border border-indigo-400/30 rounded-lg font-bold hover:bg-indigo-700/70 transition-all text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-16 relative z-20 max-w-6xl mx-auto w-full px-4 rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center border-r border-gray-100 last:border-none">
            <p className="text-4xl font-bold text-indigo-600 mb-1">1200+</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Students</p>
          </div>
          <div className="text-center border-r border-gray-100 last:border-none">
            <p className="text-4xl font-bold text-indigo-600 mb-1">50+</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Teachers</p>
          </div>
          <div className="text-center border-r border-gray-100 last:border-none">
            <p className="text-4xl font-bold text-indigo-600 mb-1">98%</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Pass Rate</p>
          </div>
          <div className="text-center last:border-none">
            <p className="text-4xl font-bold text-indigo-600 mb-1">15+</p>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">ECA Clubs</p>
          </div>
        </div>
      </section>

      {/* Notices & Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Latest Notices */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Bell className="mr-3 text-indigo-600 w-8 h-8" /> Latest Notices
                </h2>
                <Link to="/notices" className="text-indigo-600 font-semibold hover:underline flex items-center">
                  View All <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase mb-2 ${
                          notice.category === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600'
                        }`}>
                          {notice.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{notice.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{notice.date}</p>
                      </div>
                      <button className="p-2 text-indigo-400 group-hover:text-indigo-600 transition-colors">
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-800/50 rounded-full -mr-16 -mt-16"></div>
              <h2 className="text-2xl font-bold mb-8 flex items-center relative z-10">
                <Calendar className="mr-3 text-indigo-400 w-6 h-6" /> Events
              </h2>
              <div className="space-y-8 relative z-10">
                {events.map((event) => (
                  <div key={event.id} className="flex space-x-4">
                    <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg text-center h-fit">
                      <p className="text-2xl font-bold leading-none">{event.date.split(' ')[1]}</p>
                      <p className="text-[10px] font-bold uppercase">{event.date.split(' ')[0]}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-indigo-200 text-sm line-clamp-2">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-all relative z-10">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Saraswati School?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">We provide a balanced environment where academic rigor meets personal development.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl hover:bg-indigo-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Curriculum</h3>
              <p className="text-gray-600">Aligned with national standards focusing on both theoretical and practical knowledge.</p>
            </div>
            
            <div className="p-8 rounded-2xl hover:bg-indigo-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
              <p className="text-gray-600">Dedicated teachers with years of experience committed to student success.</p>
            </div>
            
            <div className="p-8 rounded-2xl hover:bg-indigo-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <p className="text-gray-600">Consistently ranking among top public schools in the district for board results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Ready to join our community?</h2>
            <p className="text-indigo-100 opacity-90">Start your journey with Shree Saraswati Secondary School today.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/admissions" className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-lg">
              Apply Now
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-indigo-700 text-white rounded-full font-bold hover:bg-indigo-800 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
