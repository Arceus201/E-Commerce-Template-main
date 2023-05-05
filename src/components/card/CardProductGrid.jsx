import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardProductGrid = (props) => {
  const product = props.data;
  return (
    <div className="card">
      <img src={product.img[0]} className="card-img-top" alt="..." />

      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          {/* <Link to={product.link} className="text-decoration-none">
            {product.title}
          </Link> */}
          {product.title}
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">${product.price}</span>

        </div>
        <div className="btn-group  d-flex" role="group">
          <Link to="/cart" className="btn btn-sm btn-primary">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              title="Add to cart"
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CardProductGrid;
