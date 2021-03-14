import "../detail-product/product.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import prev from "../../img/Vector1.png";
import next from "../../img/Vector2.png";
import chek from "../../img/checkout.png";
import logo from "../../img/icon.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import UserManage from "../user-manage";
import errImg from "../../img/error-image-generic.png";

const Product = (props) => {
  const { detailProduct, toDetail, match } = props;
  useEffect(() => {
    toDetail(match.params.id);
  }, [toDetail, match.params]);
  const createTransaction = () => {
    axios
      .post("http://localhost:8000/transaction", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
      });
  };
  const logedIn = localStorage.getItem("login");

  return (
    <div className="div2">
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
      <div className="deskripsi row d-flex justify-content-center">
        <div className="left col-3">
          {detailProduct.images !== null && (
            <Carousel>
              {detailProduct.images &&
                detailProduct.images.map((e, index) => {
                  console.log(e.url);
                  if (e.url !== null) {
                    return (
                      <Carousel.Item interval={1800}>
                        <img
                          className="editimg img-fluid d-block w-100 "
                          src={e.url}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  }
                })}
            </Carousel>
          )}
          {!(detailProduct.images !== null) && (
            <img
              className="editimg img-fluid d-block w-100 "
              src={errImg}
              alt="First slide"
            />
          )}
        </div>
        <div className="right col-4">
          <div className="storeName">ferdy's store</div>
          <div className="rightDetail">
            <p className="name-size">
              {detailProduct.name} - {detailProduct.color}
            </p>
            <p className="sold">Sold 12</p>
            <p className="sold">stock : {detailProduct.stock}</p>
            <p className="diskon">
              <b>IDR {detailProduct.discount}</b>
            </p>
            <p className="normal">
              <del>IDR {detailProduct.price}</del>
            </p>
            <div className="lorem1">
              <p>{detailProduct.description}</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">Variant</div>
            <div class="card-body">
              <p className="size">
                Size :
                <select className="size">
                  {detailProduct.sizes &&
                    detailProduct.sizes.map((e, index) => {
                      return <option value="medium">{e.size}</option>;
                    })}
                </select>
              </p>
              <div className="row d-flex justify-content-center">
                <button
                  onClick={() => createTransaction()}
                  class="loginbtn2 btn btn-dark col-5"
                  type="submit"
                >
                  Add to chart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (props) => {
  return {
    detailProduct: props.product.detailProduct,
  };
};

const mapDispatchtoProps = (dispatch) => ({
  toDetail: (id) =>
    axios.get(`http://localhost:8000/product/${id}`).then((response) =>
      dispatch({
        type: "DETAIL_PRODUCT",
        value: response.data.data,
      })
    ),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Product);
