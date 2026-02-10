
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  Calendar, 
  Users, 
  Image as ImageIcon, 
  FileText, 
  Settings, 
  LogOut,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  Search
} from 'lucide-react';
import { User, UserRole } from '../types';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('notices');

  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'notices', label: 'Manage Notices', icon: Bell },
    { id: 'events', label: 'Events & News', icon: Calendar },
    { id: 'admissions', label: 'Admissions', icon: FileText },
    { id: 'teachers', label: 'Staff Directory', icon: Users },
    { id: 'gallery', label: 'Media Gallery', icon: ImageIcon },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col shadow-2xl">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-900 font-bold text-xl">
              S
            </div>
            <div>
              <h1 className="font-bold text-sm">Saraswati School</h1>
              <p className="text-[10px] text-indigo-300 uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    activeTab === item.id 
                      ? 'bg-indigo-700 text-white shadow-lg' 
                      : 'text-indigo-300 hover:bg-indigo-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-indigo-800">
          <div className="flex items-center mb-6 px-2">
            <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center text-white mr-3">
              {user.name[0]}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-[10px] text-indigo-300 uppercase">{user.role}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-indigo-300 hover:text-white hover:bg-red-600/20 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-bold text-gray-800">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dynamic Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'notices' && <NoticesManager />}
          {activeTab === 'dashboard' && <OverviewStats />}
          {activeTab === 'admissions' && <AdmissionsManager />}
          {/* Add other components here as they are developed */}
        </div>
      </main>
    </div>
  );
};

const OverviewStats: React.FC = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { label: 'Total Students', value: '1,248', color: 'bg-blue-500', icon: Users },
        { label: 'Staff Count', value: '54', color: 'bg-purple-500', icon: Users },
        { label: 'Pending Admissions', value: '12', color: 'bg-orange-500', icon: FileText },
        { label: 'Active Notices', value: '8', color: 'bg-green-500', icon: Bell },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-indigo-500">
              <div className="flex-1">
                <p className="text-sm font-semibold">New admission request from Ram Sharma</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-6">Attendance Trends</h3>
        <div className="h-48 flex items-end justify-between px-4">
          {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
            <div key={i} className="w-8 bg-indigo-200 rounded-t-lg hover:bg-indigo-500 transition-colors" style={{height: `${h}%`}}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const NoticesManager: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
    <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
      <h3 className="font-bold text-gray-800">Manage Notices</h3>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center hover:bg-indigo-700 transition-all shadow-md">
        <Plus className="w-4 h-4 mr-2" /> Add New Notice
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { title: 'Annual Examination 2024 Schedule', date: '2023-10-15', category: 'Academic', status: 'Published' },
            { title: 'Dashain Vacation 2080', date: '2023-10-05', category: 'General', status: 'Published' },
            { title: 'New Admission Grade XI', date: '2023-10-01', category: 'Admission', status: 'Draft' },
          ].map((notice, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{notice.title}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{notice.date}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded">{notice.category}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`flex items-center text-sm ${notice.status === 'Published' ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-2 h-2 rounded-full mr-2 ${notice.status === 'Published' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  {notice.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50"><Edit className="w-4 h-4" /></button>
                <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AdmissionsManager: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
    <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
      <h3 className="font-bold text-gray-800">Pending Applications</h3>
      <div className="flex space-x-2">
        <button className="px-3 py-1 bg-white border rounded-lg text-xs font-semibold hover:bg-gray-50">Export PDF</button>
        <button className="px-3 py-1 bg-white border rounded-lg text-xs font-semibold hover:bg-gray-50">Filter</button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4 font-semibold">Student Name</th>
            <th className="px-6 py-4 font-semibold">Grade</th>
            <th className="px-6 py-4 font-semibold">Parent Name</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { name: 'Kushal Giri', grade: '9', parent: 'Narayan Giri', contact: '9845XXXXXX' },
            { name: 'Anita Thapa', grade: '11 (Science)', parent: 'Gopal Thapa', contact: '9811XXXXXX' },
            { name: 'Sagar Budha', grade: '11 (Mgmt)', parent: 'Maya Budha', contact: '9866XXXXXX' },
          ].map((app, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{app.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">Grade {app.grade}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{app.parent}</td>
              <td className="px-6 py-4 text-sm text-gray-600 font-mono">{app.contact}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-green-700">Approve</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-red-700">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;
