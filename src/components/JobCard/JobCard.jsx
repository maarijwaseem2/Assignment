import React from 'react';
import { MapPin, Clock, Users, Bookmark } from 'lucide-react';
import './JobCard.css';

export default function JobCard({ promoted, title, company, location, time, applicants }) {
  return (
    <div className="job-card-wrapper">
      {promoted && <div className="promoted-badge">Promoted</div>}
      <div className="job-card-container">
        <div className="job-card-header">
          <div className="company-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="Company Logo" />
          </div>
          <div className="job-title-section">
            <h3 className="job-title">{title}</h3>
            <p className="company-name">{company}</p>
          </div>
        </div>
        <div className="job-details">
          <div className="detail-item">
            <MapPin className="detail-icon" />
            <span>{location}</span>
          </div>
          <div className="detail-item">
            <Clock className="detail-icon" />
            <span>{time}</span>
            <Users className="detail-icon" />
            <a href="#" className="applicants-link">{applicants} applicants</a>
          </div>
        </div>
        <div className="job-card-footer">
          <button className="apply-button">Apply Now</button>
          <button className="bookmark-button">
            <Bookmark className="bookmark-icon" />
          </button>
        </div>
      </div>
    </div>
  );
} 