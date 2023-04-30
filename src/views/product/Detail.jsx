import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));
class ProductDetailView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src="../../images/products/tshirt_red_480x400.webp"
                  className="img-fluid mb-3"
                  alt=""
                />
                {/* <img
                  src="../../images/products/tshirt_grey_480x400.webp"
                  className="border border-secondary me-2" width="75"
                  alt="..."
                />
                <img
                  src="../../images/products/tshirt_black_480x400.webp"
                  className="border border-secondary me-2" width="75"
                  alt="..."
                />
                <img
                  src="../../images/products/tshirt_green_480x400.webp"
                  className="border border-secondary me-2" width="75"
                  alt="..."
                /> */}
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline me-2">
                  Header Phone S508 Plus
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="mb-3">
                  <a>Giá Bán: </a>  <span className="fw-bold h5 me-2">1.000.000</span><a>VNĐ</a>
                  {/* <del className="small text-muted me-2">$2000</del>
                  <span className="rounded p-1 bg-warning  me-2 small">
                    -$100
                  </span> */}
                </div>
                <div className="mb-3">
                  <div className="d-inline float-start me-2">
                    <div className="input-group input-group-sm mw-140">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="1"
                      />
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>

                  <Link to="/cart" className="btn btn-sm btn-primary me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary me-2"
                      title="Add to cart"
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                    </button>
                  </Link>

                  <Link to="/checkout" className="btn btn-sm btn-warning me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-warning me-2"
                      title="Buy now"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Buy now
                    </button>
                  </Link>
                </div>
                <div>
                  <p className="fw-bold mb-2 small">
                    Mô tả sản phẩm
                  </p>
                  <ul className="small">
                    <p>
                      Web bán đồ điện tử cung cấp đa dạng sản phẩm công nghệ cao cấp như
                      laptop, Headset, Phone và Tivi từ các thương hiệu nổi tiếng.
                      Với mẫu mã và giá cả phù hợp, đây là lựa chọn hàng đầu cho những
                      người yêu công nghệ.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active"
                      id="nav-details-tab"
                      data-bs-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                      Thông số sản phẩm
                    </a>
                  </div>
                </nav>
                <p>
                  Web bán đồ điện tử cung cấp đa dạng sản phẩm công nghệ cao cấp như
                  laptop, Headset, Phone và Tivi từ các thương hiệu nổi tiếng.
                  Với mẫu mã và giá cả phù hợp, đây là lựa chọn hàng đầu cho những
                  người yêu công nghệ.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4">
            <CardFeaturedProduct data={data.products} />
            <CardServices />
          </div> */}
        </div>
      </div>
    );
  }
}

export default ProductDetailView;
