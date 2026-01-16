import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home-page">
      <div className="glass-wrapper">
        <div className="glass-panel hero-panel">
          <div className="badge">Republic Polytechnic · School of Infocomm</div>

          <h1 className="home-title">
            Welcome to the Course Enrolment Portal
          </h1>

          <p className="home-subtitle">
            Explore diplomas, view modules, save favourites, and register your interest — all in one place.
          </p>

          <div className="hero-actions">
            <Link to="/diplomas" className="btn btn-primary">Explore Diplomas</Link>
            <Link to="/registration" className="btn btn-ghost">Register Interest</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
