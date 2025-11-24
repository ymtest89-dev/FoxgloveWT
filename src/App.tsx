import { useRef } from 'react';
import { FolderOpen, Link, Users, Upload } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ActionCard from './components/ActionCard';
import ChecklistPanel from './components/ChecklistPanel';
import { useChecklist } from './hooks/useChecklist';

const resourceLinks = [
  { title: 'Documentation', href: '#', description: 'Learn how to use Foxglove' },
  { title: 'Sample data', href: '#', description: 'Download example datasets' },
  { title: 'Community', href: '#', description: 'Join our Discord community' },
];

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showChecklist, markItemCompleted } = useChecklist();

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      markItemCompleted('load-data');
      showChecklist();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ActionCard
              title="Open local file(s)"
              description="Load data from your computer"
              icon={<FolderOpen size={24} />}
              onClick={handleFileUpload}
              functional={true}
            />
            <ActionCard
              title="Open connection"
              description="Connect to a live data source"
              icon={<Link size={24} />}
              functional={false}
            />
            <ActionCard
              title="Invite members"
              description="Collaborate with your team"
              icon={<Users size={24} />}
              functional={false}
            />
            <ActionCard
              title="Upload local file"
              description="Share your data with others"
              icon={<Upload size={24} />}
              functional={false}
            />
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resourceLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-foxglove-300 hover:bg-foxglove-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>

      <ChecklistPanel />
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        className="hidden"
        accept="*/*"
        multiple
      />
    </div>
  );
}

export default App;