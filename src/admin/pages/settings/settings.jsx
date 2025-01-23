import React, { useState, useEffect } from 'react'

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");

  // Tema değişim fonksiyonu
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = (event) => setTheme(event.target.value);
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSave = () => {
    // Değişiklikleri kaydetme işlemi (API çağrısı vs.)
    alert("Settings Saved!");
  };

  return (
    <div className="p-4 max-w-3xl mx-auto h-screen overflow-y-auto">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Settings</h1>
      
      {/* Kullanıcı Profil Ayarları */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">User Profile</h2>
        <div className="space-y-3">
          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 text-sm border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 text-sm border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Tercihler (Tema ve Dil) */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Preferences</h2>
        <div className="space-y-3">
          <div>
            <label className="text-gray-600 text-sm">Theme</label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="mt-1 p-2 text-sm border border-gray-300 rounded-md w-full"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm">Language</label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="mt-1 p-2 text-sm border border-gray-300 rounded-md w-full"
            >
              <option value="English">English</option>
              <option value="Turkish">Turkish</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Kaydet Butonu */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
