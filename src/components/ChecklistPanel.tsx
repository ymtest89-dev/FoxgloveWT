import { X, Award } from 'lucide-react';
import ChecklistItem from './ChecklistItem';
import { useChecklist } from '../hooks/useChecklist';

export default function ChecklistPanel() {
  const { checklistState, hideChecklist, completedCount, totalCount } = useChecklist();

  if (!checklistState.isVisible) {
    return null;
  }

  const isCompleted = completedCount === totalCount;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Get started checklist</h2>
          <button
            onClick={hideChecklist}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>Progress</span>
                <span>{completedCount}/{totalCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-foxglove-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-0">
              {checklistState.items.map((item) => (
                <ChecklistItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {isCompleted && (
          <div className="p-4 border-t border-gray-200 bg-green-50">
            <div className="flex items-start space-x-3">
              <Award size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">
                  Congrats! You have learned the essentials!
                </h3>
                <p className="text-sm text-green-700">
                  You're ready to explore more advanced features.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}