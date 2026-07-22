import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import "./GroceryProducts.css";

function GroceryProducts() {
  const groceryProducts = products.filter(
    (product) => product.section === "grocery-products"
  );

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container">
          <h2>Grocery Products</h2>

          <div className="products-grid">
            {groceryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GroceryProducts;