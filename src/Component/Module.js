import React from "react";
import { useParams, Link } from "react-router-dom";
import { getModuleById } from "../Data";

export default function ModuleDetail() {
  const { diplomaId, moduleId } = useParams();
  const module = getModuleById(diplomaId, moduleId);

  if (!module) return <div className="empty">Select a module to view details.</div>;

  return (
    <div>
      <div className="module-detail-head">
        <h4 className="module-detail-title">{module.code} — {module.name}</h4>
        <p className="module-detail-desc">{module.description}</p>
      </div>

      <div className="actions-row">
        <Link to="/registration" className="btn btn-primary small">
          Register Interest
        </Link>
      </div>
    </div>
  );
}
