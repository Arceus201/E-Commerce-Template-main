import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import numeral from 'numeral';
const CardProductGrid = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStorage = sessionStorage.getItem('isLoggedIn');
    if (isLoggedInStorage === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  const product = props.data;
  return (
    <div className="card">
      <img src={product.image} style={{ width: '285px', height: '200px' }} className="card-img-top" alt="..." />

      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={`/product/detail/${product.id}`} className="text-decoration-none">
            {product.name}
          </Link>
          {product.quantity == 0 && <span className="badge bg-danger me-2">  Hết Hàng</span>}

        </h6>


        <div className="my-2">
          <span className="fw-bold h5">{numeral(product.price).format('0,0.00')} VNĐ</span>

        </div>
        <div className="btn-group  d-flex" role="group">
          {product.quantity > 0 &&
            <>
              <Link
                to={isLoggedIn ? "/cart" : "/account/signin"}
                className="btn btn-sm btn-primary"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
            </>
          }

        </div>
      </div>
    </div>
  );
};

export default CardProductGrid;
