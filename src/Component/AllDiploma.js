import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { getAllDiplomas, getAllModules } from "../Data";
import { getFavourites , toggleFavourite} from "../utils/favourities";

function AllDiploma() {
  const diplomas = getAllDiplomas();
  const modules = getAllModules();

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(getFavourites());
  }, []);

  const favouriteModules = useMemo(
    () =>
      modules.filter((m) =>
        favourites.includes(`${m.diplomaId}:${m.id}`)
      ),
    [modules, favourites]
  );

  return (
    <div className="page diploma-page">
      <div className="glass-wrapper">
        <div className="glass-panel">
          <h2 className="page-title">Diplomas</h2>

          <div className="diploma-list">
            {diplomas.map((d) => (
              <NavLink
                key={d.id}
                to={d.id}
                className={({ isActive }) =>
                  isActive ? "diploma-card active" : "diploma-card"
                }
              >
                <div className="card-title">{d.name}</div>
                <div className="card-desc">{d.description}</div>
                <div className="card-meta">{d.modules.length} modules</div>
              </NavLink>
            ))}
          </div>

          <div className="divider" />

          <h3 className="section-title">
            <HiStar style={{ marginRight: "6px" }} />
            Favourites
          </h3>

          {favouriteModules.length === 0 ? (
            <p className="empty">
              No favourites yet. Click the ⭐ icon on any module.
            </p>
          ) : (
            <div className="fav-grid">
              {favouriteModules.map((m) => {
                const favKey = `${m.diplomaId}:${m.id}`;
                return (
                  <NavLink
                    key={favKey}
                    to={`${m.diplomaId}/${m.id}`}
                    className="fav-card"
                  >
                    <div className="fav-top">
                      <span className="pill">{m.diplomaName}</span>

                      <button
                        type="button"
                        className="fav-btn active"
                        onClick={(e) => {
                          e.preventDefault();
                          setFavourites((prev) =>
                            toggleFavourite(prev, favKey)
                          );
                        }}
                        aria-label="Remove favourite"
                      >
                        <HiStar />
                      </button>
                    </div>

                    <div className="fav-title">
                      {m.code} — {m.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}

          <div className="divider" />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AllDiploma;
