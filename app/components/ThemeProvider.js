"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create a Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2. Manage theme state with useState
  const [theme, setTheme] = useState('dark'); // Default to dark mode

  // 3. Use useEffect to handle localStorage and document class
  useEffect(() => {
    // Check for user's preference from localStorage or system settings
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // 4. Provide the theme and toggle function to children
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Create a custom hook for easy access
export const useTheme = () => {
  return useContext(ThemeContext);
};