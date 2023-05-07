import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import numeral from 'numeral';

const CardProductList = (props) => {
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
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.image} style={{ width: '350px', height: '200px' }} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={`/product/detail/${product.id}`} className="text-decoration-none">
                {product.name}
              </Link>
            </h6>
            {product.quantity == 0 && <span className="badge bg-danger me-2">Hết Hàng</span>}

          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="mb-2">
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <span className="fw-bold h5" >{numeral(product.price).format('0,0.00')} VNĐ</span>

            </div>


            <div className="btn-group d-flex" role="group">


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
      </div>
    </div >
  );
};

export default CardProductList;
