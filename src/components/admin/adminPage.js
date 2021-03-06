import { Link } from "react-router-dom";
import shop from "../../img/shop.png";
import UserManage from "../user-manage";
import "../admin/style.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const AdminPage = ({ data, history, getProduct }) => {
  useEffect(() => {
    getProduct();
  }, [getProduct]);
  console.log(data);
  const logedIn = localStorage.getItem("login");
  const logout = () => {
    localStorage.setItem("login", "false");
    alert("succes logout");
    history.push("/");
  };
  const userName = localStorage.getItem("name");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded">
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
                  <a class="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/shop">
                  <p class="nav-link">Shop</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {logedIn === "true" && (
          <button
            class="logoutbtn btn btn-outline-dark"
            type="submit"
            onClick={logout}
          >
            Logout
          </button>
        )}
        {logedIn === "false" && (
          <Link to="/login">
            <button class="loginbtn btn btn-dark" type="submit">
              Login
            </button>
          </Link>
        )}
      </nav>
      <div className="row d-flex justify-content-center">
        <div className="user2 col-4 shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="userIcon">
              <img src={shop} width="30px" height="30px" />
              <span>{userName}'s store</span>
            </div>
            <div className="row">
              <p className="saldo fs-6 col-5">Saldo</p>
              <p className="value fs-6 col-5">IDR 0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="user2 col-2 shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="userIcon">
              <span>New orders</span>
            </div>
            <div className="row d-flex justify-content-center">
              <p className="new">0</p>
            </div>
          </div>
        </div>
        <div className="user2 col-2 shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="userIcon">
              <span>Orders complete</span>
            </div>
            <div className="row d-flex justify-content-center">
              <p className="new">0</p>
            </div>
          </div>
        </div>
        <div className="user2 col-2 shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="userIcon">
              <span>Your product</span>
            </div>
            <div className="row d-flex justify-content-center">
              <p className="new">{data.length}</p>
            </div>
          </div>
        </div>
        <div className="user2 col-2 shadow-sm p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="userIcon">
              <span>Add product</span>
            </div>
            <Link to="seller/add-product">
              <div className="row d-flex justify-content-center">
                <p className="new">+</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (props) => {
  return {
    data: props.product.data,
  };
};

const mapDispatchtoProps = (dispatch) => ({
  getProduct: () =>
    axios.get("http://localhost:8000/product").then((response) =>
      dispatch({
        type: "GET_PRODUCT",
        value: response.data.data,
      })
    ),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminPage);
