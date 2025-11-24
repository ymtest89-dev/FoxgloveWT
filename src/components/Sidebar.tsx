import { BarChart3, HardDrive, FileText, Calendar, Layout, Clock } from 'lucide-react';
import type { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} />, active: true },
  { id: 'devices', label: 'Devices', icon: <HardDrive size={20} /> },
  { id: 'recordings', label: 'Recordings', icon: <FileText size={20} /> },
  { id: 'events', label: 'Events', icon: <Calendar size={20} /> },
  { id: 'timeline', label: 'Timeline', icon: <Clock size={20} /> },
  { id: 'layouts', label: 'Layouts', icon: <Layout size={20} /> },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
              item.active
                ? 'bg-foxglove-100 text-foxglove-700 border border-foxglove-200'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}