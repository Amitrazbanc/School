
import React from 'react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

const Faculty: React.FC = () => {
  const staff = [
    { name: "Bishnu Prasad Sharma", role: "Principal", sub: "Administration", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Sita Kumari Gurung", role: "Vice Principal", sub: "English Dept Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Ram Chandra Paudel", role: "Senior Teacher", sub: "Mathematics", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Gita Bhandari", role: "Teacher", sub: "Science & Environment", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Hari Prasad Thapa", role: "Teacher", sub: "Social Studies", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Anju Neupane", role: "Librarian", sub: "Literary Coordinator", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-indigo-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">Meet the dedicated educators who are shaping the leaders of tomorrow.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"><Mail className="w-4 h-4" /></button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"><Linkedin className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-indigo-600 text-xs font-bold uppercase mb-1">
                  <GraduationCap className="w-3 h-3 mr-1" /> {member.role}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Want to join our team?</h2>
            <p className="text-indigo-100">We are always looking for passionate educators to join our school family.</p>
          </div>
          <button className="relative z-10 px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl">
            View Vacancies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
