import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

import "./FlashSaleProducts.css";

function FlashSaleProducts() {
  const flashSaleProducts = products.filter(
    (product) => product.section === "flash-sale"
  );

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="container">
          <h2>Flash Sale Products</h2>

          <div className="products-grid">
            {flashSaleProducts.map((product) => (
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

export default FlashSaleProducts;