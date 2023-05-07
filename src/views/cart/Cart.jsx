import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

class CartView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Shopping Cart</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={120}>
                          Quantity
                        </th>
                        <th scope="col" width={150}>
                          Price
                        </th>
                        <th scope="col" className="text-end" width={130}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>

                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src="../../images/products/tshirt_red_480x400.webp"
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">

                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                Another name of some product goes just here
                              </Link>

                            </div>
                          </div>
                        </td>
                        <td>
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
                        </td>
                        <td>
                          <var className="price">$237.00</var>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                        <td className="text-end">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault1"
                            style={{ transform: "scale(1.5)" }}>
                          </input>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="card-footer">
                  <Link to="/checkout" className="btn btn-primary float-end">
                    Make Purchase <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/category" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continue shopping
                  </Link>
                </div>
              </div>

            </div>
            <div className="col-md-3">

              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Total price:</dt>
                    <dd className="col-6 text-end">$1,568</dd>
                  </dl>
                  <hr />
                  <p className="text-center">
                    <img
                      src="../../images/payment/payments.webp"
                      alt="..."
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartView;
