import React from "react";
import { Search } from 'lucide-react';
import JobCard from "../JobCard/JobCard";
import "./MainContent.css";

const featuredJobs = [
  { id: 1, promoted: true, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
  { id: 2, promoted: true, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
  { id: 3, promoted: true, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
  { id: 4, promoted: true, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
  { id: 5, promoted: true, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
];

const recommendedJobs = [
    { id: 1, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 2, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 3, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 4, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 5, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 6, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 7, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 8, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 9, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 10, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
];

const latestJobs = [
    { id: 1, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 2, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 3, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 4, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 5, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 6, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 7, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 8, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 9, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
    { id: 10, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", time: "1 day ago", applicants: 22 },
];

export default function MainContent() {
  return (
    <main className="main-content-area">
      <div className="main-header">
        <h1>Find Your Dream Job, <span className="highlight">Albert!</span></h1>
        <p>Explore the latest job openings and apply for the best opportunities available today!</p>
      </div>

      <div className="search-bar">
        <div className="title">Job Title, Company, or Keywords</div>
        <select name="" id="">
        <option value="">Select Location</option>
        </select>
        <select name="" id="">
        <option value="">Job Type</option>
        </select>
        <button className="search-button">
          <Search />
          Search
        </button>
      </div>

      <div className="quick-filters">
        <span>Similar:</span>
        <button className="filter-chip">Frontend</button>
        <button className="filter-chip">Backend</button>
        <button className="filter-chip">Graphic Designer</button>
      </div>
      
      <section className="job-section">
        <div className="section-header">
          <h2>Featured Jobs</h2>
          <a href="#" className="see-all-link">See Featured Jobs</a>
        </div>
        <div className="job-grid">
          {featuredJobs.map(job => <JobCard key={job.id} {...job} />)}
        </div>
      </section>

      <section className="job-section">
        <div className="section-header">
          <h2>Recommended Jobs</h2>
          <a href="#" className="see-all-link">See Recommended Jobs</a>
        </div>
        <div className="job-grid">
          {recommendedJobs.map(job => <JobCard key={job.id} {...job} />)}
        </div>
      </section>

      <section className="job-section">
        <div className="section-header">
          <h2>Latest Jobs</h2>
          <a href="#" className="see-all-link">See Latest Jobs</a>
        </div>
        <div className="job-grid">
          {latestJobs.map(job => <JobCard key={job.id} {...job} />)}
        </div>
      </section>
    </main>
  );
} 