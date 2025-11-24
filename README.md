# Foxglove Dashboard Prototype

A React + TypeScript web application that replicates the Foxglove dashboard interface with an interactive onboarding checklist.

## Features

- **Modern Tech Stack**: Built with React 18+, TypeScript, Tailwind CSS, and Vite
- **Foxglove-inspired Design**: Purple/indigo color scheme matching Foxglove's brand
- **Interactive Onboarding**: Checklist that tracks user progress through key features
- **File Upload Functionality**: Working file upload that triggers checklist completion
- **Responsive Layout**: Clean dashboard layout with sidebar navigation
- **Persistent State**: Checklist progress saved to localStorage

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd foxglove-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Sidebar.tsx     # Left navigation sidebar
│   ├── TopBar.tsx      # Top navigation bar
│   ├── ActionCard.tsx  # Dashboard action cards
│   ├── ChecklistPanel.tsx  # Right side onboarding panel
│   └── ChecklistItem.tsx   # Individual checklist items
├── hooks/              # Custom React hooks
│   └── useChecklist.ts # Checklist state management
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Functionality

### Working Features
- **File Upload**: Click "Open local file(s)" to trigger a file picker
- **Checklist Progress**: File upload automatically marks "Load data" as complete
- **Checklist Panel**: Appears after file upload with progress tracking
- **localStorage**: Checklist state persists between sessions

### Demo Features (Non-functional)
- Open connection
- Invite members  
- Upload local file
- Other checklist items (Visualize data, Share layout, etc.)

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy your application

Alternatively, connect your GitHub repository to Vercel for automatic deployments.

## Customization

- **Colors**: Modify the Foxglove color palette in `tailwind.config.js`
- **Checklist Items**: Update items in `src/hooks/useChecklist.ts`
- **Navigation**: Modify sidebar items in `src/components/Sidebar.tsx`

## Tech Stack Details

- **React 18+**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server
- **Lucide React**: Clean, customizable icons
- **Responsive Design**: Mobile-friendly layout (desktop-first, min-width 1024px)

## Browser Support

Modern browsers supporting ES2015+ features:
- Chrome 61+
- Firefox 60+
- Safari 12+
- Edge 79+