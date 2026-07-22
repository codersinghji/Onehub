import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <span className="product-discount">
        {product.discount}% OFF
      </span>

      <button
        className="wishlist-btn"
        onClick={() => alert(product.name + " added to Wishlist")}
      >
        <FaHeart />
      </button>

      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <h3>{product.name}</h3>
      </Link>

      <p className="brand">
        {product.brand}
      </p>

      <div className="rating">
        <FaStar />
        <span>{product.rating}</span>
      </div>

      <div className="price">
        <span className="new-price">
          ₹{product.price}
        </span>

        <span className="old-price">
          ₹{product.oldPrice}
        </span>
      </div>

      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart />
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;