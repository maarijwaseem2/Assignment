import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";
import MainContent from "./components/MainContent/MainContent";
import "./index.css";

export default function App() {
  return (
    <main className="app-container">
      <Navbar />
      <div className="main-layout">
        <ProfileSidebar />
        <MainContent />
      </div>
    </main>
  );
}