import "./PopularBrands.css";
import { Link } from "react-router-dom";

import apple from "../../assets/brands/apple.png";
import samsung from "../../assets/brands/samsung.png";
import sony from "../../assets/brands/sony.png";
import nike from "../../assets/brands/nike.png";
import adidas from "../../assets/brands/adidas.png";
import hp from "../../assets/brands/hp.png";
import dell from "../../assets/brands/dell.png";
import lenovo from "../../assets/brands/lenovo.png";

const brands = [
  { id: 1, name: "Apple", logo: apple },
  { id: 2, name: "Samsung", logo: samsung },
  { id: 3, name: "Sony", logo: sony },
  { id: 4, name: "Nike", logo: nike },
  { id: 5, name: "Adidas", logo: adidas },
  { id: 6, name: "HP", logo: hp },
  { id: 7, name: "Dell", logo: dell },
  { id: 8, name: "Lenovo", logo: lenovo },
];

function PopularBrands() {
  return (
    <section className="popular-brands">

      <div className="container">

        <div className="brands-header">
          <h2>Popular Brands</h2>
          
       <Link to="/popular-brands" className="view-all">
         View All
        </Link>

        </div>

        <div className="brands-grid">

          {brands.map((brand) => (
            <div className="brand-card" key={brand.id}>

              <img
                src={brand.logo}
                alt={brand.name}
              />

              <h3>{brand.name}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularBrands;