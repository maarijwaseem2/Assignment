import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./ProfileSidebar.css";

export default function ProfileSidebar() {
  const [isCalendarOpen, setCalendarOpen] = useState(true);

  return (
    <aside className="profile-sidebar">
      <div className="profile-card">
        <div className="profile-header">
          <img 
            src="cover-image.jpg"  
            alt="Profile background" 
            className="profile-bg"
          />
          <img 
            src="profile-image.png" 
            alt="Albert Flores" 
            className="profile-pic"
          />
        </div>
        <div className="profile-body">
          <h2 className="profile-name">Albert Flores</h2>
          <p className="profile-title">
            Senior Product Designer | UI/UX <br />
            Designer | Graphic Designer | Web...
          </p>
          <p className="profile-location">Clinton, Maryland</p>
        </div>
      </div>

      <div className="stats-card">
        <div className="stat-item">
          <span>Profile Visitors</span>
          <span className="stat-value">140</span>
        </div>
        <div className="stat-item">
          <span>Resume Viewers</span>
          <span className="stat-value">20</span>
        </div>
        <div className="stat-item">
          <span>My Jobs</span>
          <span className="stat-value">88</span>
        </div>
      </div>

      <div className="calendar-card">
        <div 
          className="calendar-header" 
          onClick={() => setCalendarOpen(!isCalendarOpen)}
        >
          <h3>My calendar</h3>
          <ChevronDown 
            className={`chevron-icon ${isCalendarOpen ? 'open' : ''}`} 
          />
        </div>
        {isCalendarOpen && (
          <div className="calendar-body">
            <p>Upcoming Interviews</p>
          </div>
        )}
      </div>
    </aside>
  );
} 