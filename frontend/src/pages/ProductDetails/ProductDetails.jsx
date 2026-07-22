import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";

import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <h2 className="not-found">
        Product Not Found
      </h2>
    );
  }

  return (
    <section className="product-details">

      <div className="product-container">

        {/* Left */}

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* Right */}

        <div className="product-info">

          <span className="brand">
            {product.brand}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="rating">

            <FaStar />

            <span>
              {product.rating}
            </span>

          </div>

          <h2>
            ₹{product.price}
          </h2>

          <p className="old-price">
            ₹{product.oldPrice}
          </p>

          <p className="discount">
            {product.discount}% OFF
          </p>

          <p className="description">
            {product.description}
          </p>

          <p className="stock">
            In Stock : {product.stock}
          </p>

          <div className="buttons">

            <button
              className="cart-btn"
              onClick={() =>
                alert(product.name + " Added to Cart")
              }
            >
              <FaShoppingCart />

              Add to Cart

            </button>

            <button
              className="buy-btn"
              onClick={() =>
                alert("Proceed to Checkout")
              }
            >
              <FaBolt />

              Buy Now

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;