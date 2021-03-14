import UserManage from "../user-manage";
import chek from "../../img/checkout.png";
import logo from "../../img/tshirt3.jpg";
import { Link, useParams } from "react-router-dom";
import "../shop/style.css";
import add from "../../img/increase.png";
import min from "../../img/decrease.png";

const Chart = () => {
  const logedIn = localStorage.getItem("login");
  return (
    <div>
      <nav class="navProduct navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded">
        <div class="container-fluid">
          <p class="navbar-brand user">
            {logedIn === "true" && <UserManage />}
            {logedIn === "false" && ""}
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/">
                  <p class="nav-link" aria-current="page">
                    Home
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <p class="nav-link">Shop</p>
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-end">
            <img className="chekout" src={chek} width="25px" height="25px" />
            <span class="bdg badge rounded-pill bg-danger">0</span>
          </div>
        </div>
      </nav>
      <div className="row d-flex justify-content-center">
        <div className="marginR col-5">
          <div className="listCart row shadow-sm p-3 mb-5 bg-light bg-body rounded">
            <div className="col-3">
              <img className="" src={logo} width="100px" />
            </div>
            <div className="col-8">
              <p className="prdName">Product name (color)</p>
              <p className="prdPrice">
                <b>IDR 100.000</b>
              </p>
            </div>
            <div className="bottomCart col d-flex justify-content-end">
              <img src={min} width="25px" height="25px" />
              <span>0</span>
              <img src={add} width="25px" height="25px" />
              <button className="rmv btn btn-dark">
                <p>Remove</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row shadow-sm p-3 mb-5 bg-body rounded">halolo</div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
