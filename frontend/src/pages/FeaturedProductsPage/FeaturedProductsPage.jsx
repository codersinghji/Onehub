import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import "./FeaturedProductsPage.css";

function FeaturedProductsPage() {
  const featuredProducts = products.filter(
    (product) => product.section === "featured-products"
  );

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container">
          <h2>Featured Products</h2>

          <div className="products-grid">
            {featuredProducts.map((product) => (
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

export default FeaturedProductsPage;