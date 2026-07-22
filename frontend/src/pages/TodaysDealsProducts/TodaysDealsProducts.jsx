import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products"; 
import "./TodaysDealsProducts.css";

function TodaysDealsProducts() {
  const todaysDealProducts = products.filter(
    (product) => product.section === "todays-deals"
  );

  return (
    <>
      <Navbar />


      <section className="products-page">
        <div className="container">
          <h2>Today's Deals</h2>

          <div className="products-grid">
            {todaysDealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TodaysDealsProducts;