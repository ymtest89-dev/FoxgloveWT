import { User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-foxglove-600">Test</h1>
      </div>
      
      <div className="flex items-center">
        <h2 className="text-lg font-medium text-gray-900">Dashboard</h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">PST</span>
        <div className="w-8 h-8 bg-foxglove-100 rounded-full flex items-center justify-center">
          <User size={16} className="text-foxglove-600" />
        </div>
      </div>
    </div>
  );
}