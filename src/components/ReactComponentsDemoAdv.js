import React, { useState, useEffect, useContext, createContext } from 'react';

// Theme Context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for using theme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 1. Component with Effects and Lifecycle
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect for timer
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Dependency array

  // Effect that runs on component mount
  useEffect(() => {
    console.log('Timer component mounted');
    
    return () => {
      console.log('Timer component will unmount');
    };
  }, []); // Empty dependency array = run once on mount

  return (
    <div className="p-4 mb-4 bg-yellow-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Timer Demo (Effects)</h2>
      <p className="mb-2">Time: {time} seconds</p>
      <button 
        onClick={() => setIsRunning(!isRunning)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mr-2 transition-colors"
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button 
        onClick={() => setTime(0)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

// 2. Component using Context API
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded transition-colors ${
        theme === 'light' 
          ? 'bg-gray-800 text-white hover:bg-gray-900' 
          : 'bg-white text-gray-800 hover:bg-gray-100'
      }`}
    >
      Toggle Theme ({theme})
    </button>
  );
};

const ThemedCard = ({ title, children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 mb-4 rounded shadow-sm ${
      theme === 'light' 
        ? 'bg-white text-gray-800' 
        : 'bg-gray-800 text-white'
    }`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

// 3. Component with API Data Fetching (Effect)
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Mock data
        const mockUsers = [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          { id: 3, name: 'Bob Johnson' }
        ];
        setUsers(mockUsers);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      // Cleanup if needed
      console.log('UserList cleanup');
    };
  }, []);

  if (loading) return <div className="p-4">Loading users...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 mb-4 bg-indigo-100 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">User List (API Effect)</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 bg-white rounded shadow-sm">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Demo Component
const ReactComponentsDemoAdv = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <ThemeProvider>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">React Components Demo</h1>
        
        <ThemedCard title="Theme Context Demo">
          <p className="mb-4">This card demonstrates the Context API usage for theming.</p>
          <ThemedButton />
        </ThemedCard>

        <div className="mb-4">
          <button
            onClick={() => setShowTimer(!showTimer)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            {showTimer ? 'Unmount Timer' : 'Mount Timer'}
          </button>
        </div>

        {showTimer && <Timer />}
        <UserList />
      </div>
    </ThemeProvider>
  );
};

export default ReactComponentsDemoAdv;