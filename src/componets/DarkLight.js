import React, { useState, useEffect } from "react";

const DarkLightModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to system preference
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(prefersDarkScheme.matches);
    }

    // Listen for changes to system theme preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) { // Only change if user hasn't set a preference
        setIsDarkMode(e.matches);
      }
    });
  }, []);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleMode} style={{ color: '#deb887' }}>
      {isDarkMode ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
};

export default DarkLightModeToggle;
