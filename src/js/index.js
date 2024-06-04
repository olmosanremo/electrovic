

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render your React component
// root.render(<h2>Hello React App</h2>);

root.render(<App />);
