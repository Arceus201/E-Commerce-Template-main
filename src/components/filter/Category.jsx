import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3 accordion">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterCategory"
        aria-expanded="true"
        aria-controls="filterCategory"
      >
        Categories
      </div>
      <ul
        className="list-group list-group-flush show"
        id="filterCategory"
      >
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
            Laptop
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
            Headset
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
            Phone
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/category" className="text-decoration-none stretched-link">
            Tivi
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
