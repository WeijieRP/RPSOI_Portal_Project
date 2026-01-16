import React from "react";
import { Link } from "react-router-dom";

export default function NoMatchRoute() {
  return (
    <div className="page">
      <div className="glass-wrapper">
        <div className="glass-panel">
          <h2 className="page-title">404 — Page Not Found</h2>
          <p className="page-subtitle">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
      </div>
    </div>
  );
}
