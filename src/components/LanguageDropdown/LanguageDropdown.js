import React, { useState } from "react";
import "./LanguageDropdown.css";

const LanguageDropdown = ({ currentLanguage, setLanguage, labels }) => {
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        🌐 {labels[currentLanguage]}
      </button>
      {open && (
        <div className="dropdown-menu">
          {Object.entries(labels).map(([langKey, label]) => (
            <button
              key={langKey}
              onClick={() => handleLanguageChange(langKey)}
              className={`dropdown-item ${
                langKey === currentLanguage ? "active" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
