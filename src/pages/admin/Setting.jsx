import { useState } from "react";
const Setting= () => {
  // Define state variables for different settings
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('english');
  const [fontSize, setFontSize] = useState('medium');
  const [timezone, setTimezone] = useState('UTC');

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Save the new theme preference to the backend or localStorage
  };

  // Function to handle notifications toggle
  const toggleNotifications = () => {
    setNotifications((prevNotifications) => !prevNotifications);
    // Save the new notifications preference to the backend or localStorage
  };

  // Function to handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Save the new language preference to the backend or localStorage
  };

  // Function to handle font size change
  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
    // Save the new font size preference to the backend or localStorage
  };

  // Function to handle timezone change
  const handleTimezoneChange = (newTimezone) => {
    setTimezone(newTimezone);
    // Save the new timezone preference to the backend or localStorage
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>Theme</h3>
        <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <h3>Notifications</h3>
        <input type="checkbox" checked={notifications} onChange={toggleNotifications} />
      </div>
      <div>
        <h3>Language</h3>
        <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div>
        <h3>Font Size</h3>
        <select value={fontSize} onChange={(e) => handleFontSizeChange(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <h3>Timezone</h3>
        <select value={timezone} onChange={(e) => handleTimezoneChange(e.target.value)}>
          <option value="UTC">UTC</option>
          <option value="GMT">GMT</option>
          <option value="PST">PST</option>
          {/* Add more timezone options as needed */}
        </select>
      </div>
    </div>
  );
};

export default Setting
