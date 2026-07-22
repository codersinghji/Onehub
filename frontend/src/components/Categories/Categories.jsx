import "./Categories.css";
import electronics from "../../assets/categories/electronics.png";
import fashion from "../../assets/categories/fashion.png";
import grocery from "../../assets/categories/grocery.png";
import pharmacy from "../../assets/categories/pharmacy.png";
import mobile from "../../assets/categories/mobile.png";
import furniture from "../../assets/categories/furniture.png";
import beauty from "../../assets/categories/beauty.png";
import sport from "../../assets/categories/sport.png";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Fashion",
    image: fashion,
  },
  {
    id: 3,
    name: "Mobiles",
    image: mobile,
  },
  {
    id: 4,
    name: "Grocery",
    image: grocery,
  },
  {
    id: 5,
    name: "Pharmacy",
    image: pharmacy,
  },
  {
    id: 6,
    name: "Furniture",
    image: furniture,
  },
  {
    id: 7,
    name: "Beauty",
    image: beauty,
  },
  {
    id: 8,
    name: "Sports",
    image: sport,
  },
];


function Categories() {
  return (
    <section className="categories">

      <div className="container">

        <h2 className="section-title">
          Shop By Categories
        </h2>

        <div className="category-grid">

          {categories.map((item) => (
            <div className="category-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;