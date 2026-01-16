import React, { useMemo, useState } from "react";
import { getAllModules } from "../Data";

export default function Registration() {
  const modules = useMemo(() => getAllModules(), []);
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(null);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.course) return;

    setSubmitted({
      ...form,
      time: new Date().toLocaleString()
    });

    setForm({ name: "", email: "", course: "" });
  };

  return (
    <div className="page registration-page">
      <div className="glass-wrapper">
        <div className="glass-panel">
          <div className="page-head">
            <h2 className="page-title">Registration</h2>
            <p className="page-subtitle">Register your interest in a course (module).</p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label className="label">Full Name</label>
                <input
                  className="input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. Wei Jie"
                />
              </div>

              <div className="field">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="e.g. weijie@email.com"
                />
              </div>

              <div className="field span-2">
                <label className="label">Select Course (Module)</label>
                <select
                  className="input"
                  name="course"
                  value={form.course}
                  onChange={onChange}
                >
                  <option value="">-- Choose a module --</option>
                  {modules.map((m) => (
                    <option key={`${m.diplomaId}:${m.id}`} value={`${m.diplomaId}:${m.id}`}>
                      {m.diplomaName} · {m.code} — {m.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>

            <p className="hint">
              After submission, a confirmation message will appear below.
            </p>
          </form>

          {submitted && (
            <div className="confirm">
              <div className="confirm-title">✅ Registration Submitted</div>
              <div className="confirm-body">
                <div><b>Name:</b> {submitted.name}</div>
                <div><b>Email:</b> {submitted.email}</div>
                <div><b>Course:</b> {submitted.course}</div>
                <div><b>Submitted:</b> {submitted.time}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
