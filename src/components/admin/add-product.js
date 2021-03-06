import { Link } from "react-router-dom";
import shop from "../../img/shop.png";
import UserManage from "../user-manage";
import "../admin/style.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import add from "../../img/add2.png";
import axios from "axios";

const AddProduct = ({ history, addProduct }) => {
  const logedIn = localStorage.getItem("login");
  const logout = () => {
    localStorage.setItem("login", "false");
    alert("succes logout");
    history.push("/");
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [sex, setSex] = useState("");
  // let priceIDR = price
  //   .toString()
  //   .split("")
  //   .reverse()
  //   .join("")
  //   .match(/\d{1,3}/g)
  //   .join(".")
  //   .split("")
  //   .reverse()
  //   .join("");
  // const newProduct = {
  //   name: name,
  //   description: description,
  //   stock: stock,
  //   price: price,
  //   discount: price - price * 0.15,
  //   color: color,
  //   sex: sex,
  // };
  // console.log(newProduct);

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
        <div className="user2 col-8 shadow p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="ed userIcon">
              <span>
                <b>Product information</b>
              </span>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Product name</p>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  value={name.charAt(0).toUpperCase() + name.slice(1)}
                  onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  type="text"
                  placeholder="Product name..."
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Description</p>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  value={
                    description.charAt(0).toUpperCase() + description.slice(1)
                  }
                  onChange={(e) => setDescription(e.target.value)}
                  class="form-control"
                  type="textarea"
                  placeholder="Description..."
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Stock</p>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  class="form-control"
                  type="number"
                  placeholder="0"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Price</p>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  class="form-control"
                  type="number"
                  placeholder="0"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Color</p>
              </div>
              <div className="col-8 d-flex justify-content-end">
                <input
                  value={color.charAt(0).toUpperCase() + color.slice(1)}
                  onChange={(e) => setColor(e.target.value)}
                  class="form-control"
                  type="text"
                  placeholder="Color..."
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Sex</p>
              </div>
              <div className="col-8 d-flex justify-content-start">
                <input
                  value={sex.charAt(0).toUpperCase() + sex.slice(1)}
                  onChange={(e) => setSex(e.target.value)}
                  class="form-control"
                  type="text"
                  placeholder="Male/Female"
                  aria-label="default input example"
                />
              </div>
            </div>
            {!(name === "") &&
              !(description === "") &&
              !(stock === null) &&
              !(price === null) &&
              !(color === "") &&
              (sex === "Female" || sex === "Male") && (
                <div className="marg row d-flex justify-content-center">
                  <button
                    onClick={() =>
                      addProduct({
                        name: name,
                        description: description,
                        stock: stock,
                        price: price,
                        discount: price - price * 0.15,
                        color: color,
                        sex: sex,
                      })
                    }
                    type="button"
                    class="btn btn-dark col-8"
                  >
                    Save
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="user2 col-8 shadow p-3 mb-5 bg-body rounded ">
          <div className="storename">
            <div className="ed userIcon">
              <span>
                <b>Image & size</b>
              </span>
            </div>
            <div className="marg row d-flex justify-content-center">
              <div className="col-3">
                <p>Upload images</p>
              </div>
              <div className="col-8 d-flex justify-content-start">
                <label className="addimg" for="upload">
                  <img src={add} width="25px" height="25px" />
                </label>
                <input
                  class="upload"
                  id="upload"
                  type="file"
                  placeholder="jfghoi"
                />
                <label className="addimg" for="upload">
                  <img src={add} width="25px" height="25px" />
                </label>
                <input
                  class="upload"
                  id="upload"
                  type="file"
                  placeholder="jfghoi"
                />
                <label className="addimg" for="upload">
                  <img src={add} width="25px" height="25px" />
                </label>
                <input
                  class="upload"
                  id="upload"
                  type="file"
                  placeholder="jfghoi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addProduct: (newProduct) =>
    axios
      .post(`http://localhost:8000/product/`, newProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) =>
        dispatch({
          type: "ADD_PRODUCT",
          value: response.data.data,
        })
      )
      .catch((error) => {
        alert("You must re-login");
        localStorage.removeItem("token");
      }),
});

export default connect(null, mapDispatchtoProps)(AddProduct);
