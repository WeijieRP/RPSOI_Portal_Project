import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { getDiplomaById } from "../Data";
import { getFavourites, toggleFavourite } from "../utils/favourities";



function DiplomaDetail() {
  const { diplomaId } = useParams();
  const diploma = getDiplomaById(diplomaId);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(getFavourites());
  }, []);

  if (!diploma) return <p className="empty">Diploma not found</p>;

  return (
    <div className="diploma-detail">
      <h3 className="detail-title">{diploma.name}</h3>
      <p className="detail-desc">{diploma.description}</p>

      <h4 className="section-title">Modules</h4>

      <div className="module-tabs">
        {diploma.modules.map((m) => {
          const favKey = `${diplomaId}:${m.id}`;
          const isFav = favourites.includes(favKey);

          return (
            <NavLink
              key={m.id}
              to={m.id}
              className={({ isActive }) =>
                isActive ? "module-tab active" : "module-tab"
              }
            >
              <div className="module-tab-top">
                <div className="module-tab-code">{m.code}</div>

                <button
                  type="button"
                  className={isFav ? "fav-btn active" : "fav-btn"}
                  onClick={(e) => {
                    e.preventDefault();
                    setFavourites((prev) =>
                      toggleFavourite(prev, favKey)
                    );
                  }}
                  aria-label={
                    isFav ? "Remove from favourites" : "Add to favourites"
                  }
                >
                  {isFav ? <HiStar /> : <HiOutlineStar />}
                </button>
              </div>

              <div className="module-tab-name">{m.name}</div>
            </NavLink>
          );
        })}
      </div>

      <div className="module-detail-panel">
        <Outlet />
      </div>
    </div>
  );
}

export default DiplomaDetail;
