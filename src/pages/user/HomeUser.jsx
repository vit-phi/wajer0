import React, { useState, useEffect } from "react";

const HomeUser = () => {
  // ใช้ state สำหรับ Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // ใช้ useEffect เพื่อเปลี่ยนโหมดเมื่อกดปุ่ม
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <h1>Home User Page</h1>
      
      {/* ปุ่มเปลี่ยนโหมด */}
      <button className="btn btn-dark mt-3" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default HomeUser;
