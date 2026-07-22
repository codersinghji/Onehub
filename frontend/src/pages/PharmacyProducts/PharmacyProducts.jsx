import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import "./PharmacyProducts.css";

function PharmacyProducts() {
  const pharmacyProducts = products.filter(
    (product) => product.section === "pharmacy-products"
  );

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container">
          <h2>Pharmacy Products</h2>

          <div className="products-grid">
            {pharmacyProducts.map((product) => (
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

export default PharmacyProducts;