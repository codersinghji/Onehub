import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PopularBrandsPage.css";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "/brands/apple.png",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "/brands/samsung.png",
  },
  {
    id: 3,
    name: "Sony",
    logo: "/brands/sony.png",
  },
  {
    id: 4,
    name: "LG",
    logo: "/brands/lg.png",
  },
  {
    id: 5,
    name: "Nike",
    logo: "/brands/nike.png",
  },
  {
    id: 6,
    name: "Adidas",
    logo: "/brands/adidas.png",
  },
];

function PopularBrandsPage() {
  return (
    <>
      <Navbar />

      <section className="brands-page">
        <div className="container">
          <h2>Popular Brands</h2>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-card" key={brand.id}>
                <img src={brand.logo} alt={brand.name} />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PopularBrandsPage;