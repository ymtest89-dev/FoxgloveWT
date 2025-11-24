export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  expandable: boolean;
}

export interface ChecklistState {
  isVisible: boolean;
  items: ChecklistItem[];
}

export interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  functional?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}