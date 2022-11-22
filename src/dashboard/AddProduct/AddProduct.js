import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import addProductImage from "../../components/images/add-product-img.png";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [place, setPlace] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [versionYear, setVersionYear] = useState(0);
  const [description, setDiscription] = useState("");
  const { user } = useAuth();
  const { displayName, email } = user;
  //handle add product form submit
  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("displayName", displayName);
    formData.append("email", email);
    formData.append("image", image);
    formData.append("productName", productName);
    formData.append("place", place);
    formData.append("originalPrice", originalPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("versionYear", versionYear);
    formData.append("description", description);
    //fetch car api
    fetch("https://tranquil-hollows-86813.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Added Successfully");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="add-product">
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Add a <span style={{ color: "var(--main-color)" }}>Product</span>
      </h1>
      <div className="a-grid">
        <div className="add-prodcut-left">
          <div className="add-product-left-text">
            <h1>Welcome Back!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              distinctio eligendi facilis dolore, iure eum mollitia veritatis
              eius praesentium quae facere repellendus voluptas
            </p>
          </div>
          <img src={addProductImage} alt="img"></img>
        </div>
        <div className="add-product-right">
          <div className="add-product-input-container">
            <form onSubmit={handleAddProduct}>
              <input
                className="input"
                accept="image/*"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product name"
                type="text"
                required
              />
              <input
                onChange={(e) => setPlace(e.target.value)}
                placeholder="City"
                type="text"
                required
              />
              <input
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Product price"
                type="number"
                required
              />
              <input
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Discount price"
                type="number"
                required
              />
              <input
                onChange={(e) => setVersionYear(e.target.value)}
                placeholder="Year of model"
                type="number"
                required
              />
              <input
                onChange={(e) => setDiscription(e.target.value)}
                placeholder="Description"
                type="text"
                required
              />
              <button type="submit" variant="contained">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
