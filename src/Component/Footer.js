import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">SOI Portal</div>
          <div className="footer-text">
            School of Infocomm · Republic Polytechnic
          </div>
          <div className="footer-text muted">
            This portal is a student project for learning React Router & UI design.
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/diplomas">Diplomas</Link>
          <Link className="footer-link" to="/registration">Registration</Link>
          <Link className="footer-link" to="/faq">FAQ</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {year} SOI Portal</span>
        <span className="footer-dot">•</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}
