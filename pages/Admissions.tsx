
import React, { useState } from 'react';
import { Send, CheckCircle, Info } from 'lucide-react';

const Admissions: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: '',
    dob: '',
    address: '',
    contact: '',
    prevSchool: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-12 rounded-2xl shadow-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying. Our administration team will review your application and contact you within 2-3 working days for the next steps.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-indigo-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">Join the legacy of Shree Saraswati Secondary School.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-6 flex items-center text-indigo-900">
                <Info className="mr-2 w-6 h-6" /> Admission Process
              </h2>
              <ul className="space-y-6">
                <li className="flex">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">1</span>
                  <div>
                    <h3 className="font-bold">Form Submission</h3>
                    <p className="text-sm text-gray-500">Fill out the online application form with correct details.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">2</span>
                  <div>
                    <h3 className="font-bold">Document Verification</h3>
                    <p className="text-sm text-gray-500">Visit school with original certificates for verification.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">3</span>
                  <div>
                    <h3 className="font-bold">Entrance Interview</h3>
                    <p className="text-sm text-gray-500">A brief interaction with the student and parents.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">4</span>
                  <div>
                    <h3 className="font-bold">Final Enrollment</h3>
                    <p className="text-sm text-gray-500">Payment of fees and collection of books & uniforms.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-600 p-8 rounded-2xl shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4">Need Help?</h2>
              <p className="text-indigo-100 mb-6">If you have any questions regarding the admission process, feel free to call us.</p>
              <p className="font-bold text-2xl">+977-XXXXXXXXXX</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 pb-4 border-b">Online Application Form</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Student's Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parent's/Guardian's Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Jane Doe"
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Applying for Grade *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none bg-white"
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  >
                    <option value="">Select Grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="6">Grade 6</option>
                    <option value="9">Grade 9</option>
                    <option value="11">Grade 11 (Science)</option>
                    <option value="11_MGMT">Grade 11 (Management)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input 
                    type="date" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Street name, Ward No, Municipality"
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="98XXXXXXXX"
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Previous School Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="If any"
                    onChange={(e) => setFormData({...formData, prevSchool: e.target.value})}
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  By submitting this form, you certify that all provided information is accurate to the best of your knowledge.
                </p>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center shadow-xl"
              >
                Submit Application <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
