import { useState, useEffect } from 'react';
import type { ChecklistState, ChecklistItem } from '../types';

const STORAGE_KEY = 'foxglove-checklist-state';

const initialItems: ChecklistItem[] = [
  {
    id: 'load-data',
    title: 'Load data',
    description: 'Open your first data file to get started',
    completed: false,
    expandable: true,
  },
  {
    id: 'visualize-data',
    title: 'Visualize data',
    description: 'Create your first visualization',
    completed: false,
    expandable: true,
  },
  {
    id: 'share-layout',
    title: 'Share a layout',
    description: 'Share your work with others',
    completed: false,
    expandable: true,
  },
  {
    id: 'add-panel',
    title: 'Add a panel',
    description: 'Customize your dashboard',
    completed: false,
    expandable: true,
  },
  {
    id: 'explore-examples',
    title: 'Explore examples',
    description: 'Learn from sample datasets',
    completed: false,
    expandable: true,
  },
];

const initialState: ChecklistState = {
  isVisible: true,
  items: initialItems,
};

export function useChecklist() {
  const [state, setState] = useState<ChecklistState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const showChecklist = () => {
    setState(prev => ({ ...prev, isVisible: true }));
  };

  const hideChecklist = () => {
    setState(prev => ({ ...prev, isVisible: false }));
  };

  const markItemCompleted = (itemId: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, completed: true } : item
      ),
    }));
  };

  const getCompletedCount = () => {
    return state.items.filter(item => item.completed).length;
  };

  const getTotalCount = () => {
    return state.items.length;
  };

  return {
    checklistState: state,
    showChecklist,
    hideChecklist,
    markItemCompleted,
    completedCount: getCompletedCount(),
    totalCount: getTotalCount(),
  };
}