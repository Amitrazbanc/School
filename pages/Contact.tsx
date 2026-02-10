
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-24">
      <section className="bg-indigo-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">Have questions? We're here to help you. Reach out to us through any channel.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              
              <div className="flex items-start">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-gray-500 text-sm">Satyawati-06, Gulmi District,<br />Lumbini Province, Nepal</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <p className="text-gray-500 text-sm">+977-XXXXXXXXXX<br />(07:00 AM - 04:00 PM)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-gray-500 text-sm">info@saraswati.edu.np<br />admin@saraswati.edu.np</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl text-white">
              <MessageCircle className="w-12 h-12 mb-6 opacity-20" />
              <h2 className="text-xl font-bold mb-4">Student Support</h2>
              <p className="text-indigo-100 mb-6">Our dedicated support team is available during school hours for any administrative queries.</p>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all">
                Live Chat Support
              </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Send a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Enter your email" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Message subject" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="md:col-span-2 py-4 bg-indigo-900 text-white rounded-xl font-bold hover:bg-indigo-950 transition-all flex items-center justify-center shadow-lg">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Map Integration */}
            <div className="bg-white p-4 rounded-2xl shadow-xl h-96 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.55938507851!2d83.33649662109374!3d27.863152000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996739945536411%3A0x6b47c0f1882f06f7!2sSatyawati%20Rural%20Municipality!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
