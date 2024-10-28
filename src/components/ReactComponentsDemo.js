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