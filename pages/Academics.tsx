
import React from 'react';
import { BookOpen, FlaskConical, Languages, Calculator, Music, Dumbbell } from 'lucide-react';

const Academics: React.FC = () => {
  const levels = [
    {
      title: "Primary Level (Grade 1-5)",
      desc: "Foundation years focusing on literacy, numeracy, and social exploration.",
      subjects: ["Nepali", "English", "Mathematics", "Science", "Social Studies"],
      color: "bg-green-50 text-green-700 border-green-100"
    },
    {
      title: "Lower Secondary (Grade 6-8)",
      desc: "Expanding horizons with deeper subject specialization and critical thinking.",
      subjects: ["Advanced English", "Computer Science", "Moral Education", "OBTE"],
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Secondary (Grade 9-10)",
      desc: "Preparation for SEE examinations with a focus on core academic rigor.",
      subjects: ["Optional Math", "Accountancy", "Health & Physical Education"],
      color: "bg-purple-50 text-purple-700 border-purple-100"
    },
    {
      title: "Higher Secondary (Grade 11-12)",
      desc: "Specialized streams in Science and Management for university preparation.",
      subjects: ["Physics/Economics", "Chemistry/Business Studies", "Biology/Accountancy"],
      color: "bg-orange-50 text-orange-700 border-orange-100"
    }
  ];

  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-indigo-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">A comprehensive curriculum designed for the holistic development of every student.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border shadow-lg bg-white`}>
              <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 ${level.color}`}>
                Level Program
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{level.title}</h2>
              <p className="text-gray-600 mb-6">{level.desc}</p>
              <div className="flex flex-wrap gap-2">
                {level.subjects.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-16">Educational Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <FlaskConical className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Labs</h3>
              <p className="text-gray-500">Fully equipped science and computer labs for practical learning experiences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rich Library</h3>
              <p className="text-gray-500">Access to thousands of books, journals, and digital resources.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">ECA Programs</h3>
              <p className="text-gray-500">Sports, music, and arts integrated into the weekly schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
