import type { ActionCardProps } from '../types';

export default function ActionCard({ title, description, icon, onClick, functional = false }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={!functional}
      className={`p-6 bg-white rounded-lg border border-gray-200 shadow-sm text-left transition-all duration-200 ${
        functional
          ? 'hover:shadow-md hover:border-foxglove-300 hover:bg-foxglove-50 cursor-pointer'
          : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 p-2 rounded-lg ${
          functional ? 'bg-foxglove-100 text-foxglove-600' : 'bg-gray-100 text-gray-400'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
}