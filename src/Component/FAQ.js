import React, { useState } from "react";

const faqs = [
  { q: "How do I view modules under a diploma?", a: "Go to Diplomas, select a diploma, then click a module tab to view details." },
  { q: "What is Favourites used for?", a: "It allows you to save modules you’re interested in so you can access them quickly later." },
  { q: "Where do I register interest?", a: "Go to the Registration page and submit your name, email and selected module." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page faq-page">
      <div className="glass-wrapper">
        <div className="glass-panel">
          <div className="page-head">
            <h2 className="page-title">Frequently Asked Questions</h2>
            <p className="page-subtitle">Quick answers to common questions.</p>
          </div>

          <div className="faq-list">
            {faqs.map((item, idx) => {
              const open = idx === openIndex;
              return (
                <button
                  key={idx}
                  className={open ? "faq-item open" : "faq-item"}
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  type="button"
                >
                  <div className="faq-q">
                    <span>{item.q}</span>
                    <span className="chev">{open ? "–" : "+"}</span>
                  </div>
                  {open && <div className="faq-a">{item.a}</div>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
