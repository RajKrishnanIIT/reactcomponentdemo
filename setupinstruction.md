# Project Structure

1. First, here's the project structure:
```
src/
├── index.js
├── App.js
├── components/
│   └── ReactComponentsDemo.js
└── styles/
    └── index.css
```

# Entry point file:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

# The App component:

```javascript
import React from 'react';
import ReactComponentsDemo from './components/ReactComponentsDemo';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ReactComponentsDemo />
    </div>
  );
}

export default App;

```

## The main components file:

```javascript
import React, { useState } from 'react';

// 1. Function Component with Props
const Greeting = ({ name }) => {
  return (
    <div className="p-4 mb-4 bg-gray-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Hello, {name}!</h2>
    </div>
  );
};

// 2. Component with State
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 mb-4 bg-blue-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Counter</h2>
      <p className="mb-2">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 transition-colors"
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        Decrement
      </button>
    </div>
  );
};

// 3. Component with Children
const Card = ({ children, title }) => {
  return (
    <div className="p-4 mb-4 bg-green-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

// 4. Component with Conditional Rendering
const ToggleContent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-4 mb-4 bg-purple-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Toggle Demo</h2>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded mb-2 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && (
        <p>This content can be toggled!</p>
      )}
    </div>
  );
};

// Main Demo Component
const ReactComponentsDemo = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Components Demo</h1>
      
      <Greeting name="User" />
      <Counter />
      <Card title="Card Component">
        <p>This is a child element passed to the Card component.</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 transition-colors">
          Card Button
        </button>
      </Card>
      <ToggleContent />
    </div>
  );
};

export default ReactComponentsDemo;

```

## The CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: Add any custom styles below */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

```

# Tailwind configuration file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

# PostCSS configuration file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# Set up this project:

## 1. Create a new React project:
```bash
npx create-react-app react-components-demo
cd react-components-demo
```

## 2. Install required dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```

## 3. Create the file structure as shown above and copy each file's contents.

## 4. Start the development server:
```bash
npm start
```
# Demo Features
The demo includes:
- Full Tailwind CSS integration
- Responsive design
- Hover effects on buttons
- Shadow effects on cards
- Smooth transitions
- A clean, modern UI

