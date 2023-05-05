import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const CardProductList = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInStorage === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const product = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={product.link} className="text-decoration-none">
                {product.name}
              </Link>
            </h6>

            {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )}
            {product.description && product.description.includes("|") && (
              <ul className="mt-2">
                {product.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
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
              <span className="fw-bold h5">${product.price}</span>

            </div>


            <div className="btn-group d-flex" role="group">



              <Link
                to={isLoggedIn ? "/cart" : "/account/signin"}
                className="btn btn-sm btn-primary"
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList;
