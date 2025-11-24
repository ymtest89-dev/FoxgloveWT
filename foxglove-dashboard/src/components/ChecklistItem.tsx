import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle } from 'lucide-react';
import type { ChecklistItem as ChecklistItemType } from '../types';

interface ChecklistItemProps {
  item: ChecklistItemType;
}

export default function ChecklistItem({ item }: ChecklistItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          {item.completed ? (
            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
          ) : (
            <Circle size={20} className="text-gray-400 flex-shrink-0" />
          )}
          <span className={`font-medium ${item.completed ? 'text-green-700' : 'text-gray-900'}`}>
            {item.title}
          </span>
        </div>
        {item.expandable && (
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown size={16} className="text-gray-500" />
            ) : (
              <ChevronRight size={16} className="text-gray-500" />
            )}
          </div>
        )}
      </button>
      
      {isExpanded && (
        <div className="px-3 pb-3 ml-8">
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      )}
    </div>
  );
}