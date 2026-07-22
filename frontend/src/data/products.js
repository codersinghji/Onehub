import laptop from "../assets/products/laptop.png";
import mobile from "../assets/products/mobile.png";
import headphones from "../assets/products/headphones.png";
import watch from "../assets/products/watch.png";
import shoes from "../assets/products/shoes.png";
import speaker from "../assets/products/speaker.png";
import camera from "../assets/products/camera.png";
import fridge from "../assets/products/fridge.png";
import tv from "../assets/products/tv.png";
import chair from "../assets/products/chair.png";
import table from "../assets/products/table.png";
import washingMachine from "../assets/products/washing-machine.png";

const products = [
   {
  id: 1,
  section: "flash-sale",
  name: "Gaming Laptop",
  category: "Electronics",
  image: laptop,
  price: 59999,
  oldPrice: 74999,
  discount: 20,
  rating: 4.8,
  stock: 15,
  brand: "ASUS",
  description: "High-performance gaming laptop with Intel Core i7 and RTX graphics.",
},

{
  id: 2,
  section: "flash-sale",
  name: "5G Smartphone",
  category: "Mobiles",
  image: mobile,
  price: 18999,
  oldPrice: 24999,
  discount: 24,
  rating: 4.6,
  stock: 25,
  brand: "Samsung",
  description: "5G smartphone with AMOLED display and fast charging.",
},

{
  id: 3,
  section: "flash-sale",
  name: "Wireless Headphones",
  category: "Accessories",
  image: headphones,
  price: 2499,
  oldPrice: 3999,
  discount: 38,
  rating: 4.7,
  stock: 40,
  brand: "Sony",
  description: "Noise cancelling wireless headphones.",
},

{
  id: 4,
  section: "flash-sale",
  name: "Smart Watch",
  category: "Wearables",
  image: watch,
  price: 2999,
  oldPrice: 4999,
  discount: 40,
  rating: 4.6,
  stock: 35,
  brand: "Boat",
  description: "Fitness smartwatch with heart-rate tracking.",
},

{
  id: 5,
  section: "flash-sale",
  name: "Bluetooth Speaker",
  category: "Electronics",
  image: speaker,
  price: 1499,
  oldPrice: 2499,
  discount: 40,
  rating: 4.7,
  stock: 20,
  brand: "JBL",
  description: "Portable Bluetooth speaker with deep bass.",
},

{
  id: 6,
  section: "flash-sale",
  name: "Running Shoes",
  category: "Fashion",
  image: shoes,
  price: 1999,
  oldPrice: 3299,
  discount: 40,
  rating: 4.5,
  stock: 30,
  brand: "Nike",
  description: "Comfortable running shoes for daily workouts.",
},

{
  id: 7,
  section: "flash-sale",
  name: "Premium Smart Watch",
  category: "Wearables",
  image: watch,
  price: 4499,
  oldPrice: 6499,
  discount: 31,
  rating: 4.8,
  stock: 18,
  brand: "Noise",
  description: "Premium AMOLED smartwatch with Bluetooth calling.",
},

{
  id: 8,
  section: "flash-sale",
  name: "Portable Speaker",
  category: "Electronics",
  image: speaker,
  price: 2299,
  oldPrice: 3499,
  discount: 34,
  rating: 4.6,
  stock: 22,
  brand: "Boat",
  description: "Portable waterproof Bluetooth speaker.",
},
{
  id: 9,
  section: "todays-deals",
  name: "Smart LED TV",
  category: "Electronics",
  image: tv,
  price: 24999,
  oldPrice: 29999,
  discount: 17,
  rating: 4.8,
  stock: 12,
  brand: "Sony",
  description:
    "43-inch Full HD Smart LED TV with Android OS and built-in streaming apps.",
},

{
  id: 10,
  section: "todays-deals",
  name: "Double Door Refrigerator",
  category: "Appliances",
  image: fridge,
  price: 31999,
  oldPrice: 37999,
  discount: 16,
  rating: 4.7,
  stock: 10,
  brand: "LG",
  description:
    "Energy-efficient refrigerator with frost-free cooling and spacious storage.",
},

{
  id: 11,
  section: "todays-deals",
  name: "DSLR Camera",
  category: "Electronics",
  image: camera,
  price: 45999,
  oldPrice: 51999,
  discount: 12,
  rating: 4.9,
  stock: 8,
  brand: "Canon",
  description:
    "Professional DSLR camera with 24MP sensor and 4K video recording.",
},

{
  id: 12,
  section: "todays-deals",
  name: "Office Chair",
  category: "Furniture",
  image: chair,
  price: 5999,
  oldPrice: 7999,
  discount: 25,
  rating: 4.5,
  stock: 22,
  brand: "Green Soul",
  description:
    "Ergonomic office chair with lumbar support and breathable mesh back.",
},

{
  id: 13,
  section: "todays-deals",
  name: "Study Table",
  category: "Furniture",
  image: table,
  price: 6499,
  oldPrice: 8499,
  discount: 24,
  rating: 4.6,
  stock: 18,
  brand: "IKEA",
  description:
    "Modern wooden study table with storage shelves for home and office.",
},

{
  id: 14,
  section: "todays-deals",
  name: "Washing Machine",
  category: "Appliances",
  image: washingMachine,
  price: 18999,
  oldPrice: 22999,
  discount: 17,
  rating: 4.7,
  stock: 14,
  brand: "Samsung",
  description:
    "Fully automatic washing machine with multiple wash programs.",
},

{
  id: 15,
  section: "todays-deals",
  name: "Premium Smartphone",
  category: "Mobiles",
  image: mobile,
  price: 28999,
  oldPrice: 33999,
  discount: 15,
  rating: 4.8,
  stock: 20,
  brand: "OnePlus",
  description:
    "Flagship 5G smartphone with AMOLED display and ultra-fast charging.",
},

{
  id: 16,
  section: "todays-deals",
  name: "Premium Bluetooth Speaker",
  category: "Electronics",
  image: speaker,
  price: 2999,
  oldPrice: 4499,
  discount: 33,
  rating: 4.8,
  stock: 16,
  brand: "Sony",
  description:
    "Portable Bluetooth speaker with crystal-clear sound and long battery life.",
},
{
  id: 17,
  section: "featured-products",
  name: "DSLR Camera",
  category: "Electronics",
  image: camera,
  price: 45999,
  oldPrice: 51999,
  discount: 12,
  rating: 4.9,
  stock: 8,
  brand: "Canon",
  description:
    "Professional DSLR camera with 24MP sensor, 4K video recording and interchangeable lenses.",
},

{
  id: 18,
  section: "featured-products",
  name: "Double Door Refrigerator",
  category: "Appliances",
  image: fridge,
  price: 31999,
  oldPrice: 37999,
  discount: 16,
  rating: 4.7,
  stock: 10,
  brand: "LG",
  description:
    "Energy-efficient refrigerator with frost-free cooling and spacious storage.",
},

{
  id: 19,
  section: "featured-products",
  name: "Smart LED TV",
  category: "Electronics",
  image: tv,
  price: 24999,
  oldPrice: 29999,
  discount: 17,
  rating: 4.8,
  stock: 12,
  brand: "Sony",
  description:
    "43-inch Full HD Smart TV with Android OS and streaming apps.",
},

{
  id: 20,
  section: "featured-products",
  name: "Washing Machine",
  category: "Appliances",
  image: washingMachine,
  price: 18999,
  oldPrice: 22999,
  discount: 17,
  rating: 4.7,
  stock: 14,
  brand: "Samsung",
  description:
    "Fully automatic washing machine with multiple wash programs.",
},

{
  id: 21,
  section: "featured-products",
  name: "Gaming Laptop Pro",
  category: "Electronics",
  image: laptop,
  price: 72999,
  oldPrice: 82999,
  discount: 12,
  rating: 4.9,
  stock: 7,
  brand: "MSI",
  description:
    "Gaming laptop powered by Intel Core i9, RTX graphics and 1TB SSD.",
},

{
  id: 22,
  section: "featured-products",
  name: "Premium Smartphone",
  category: "Mobiles",
  image: mobile,
  price: 35999,
  oldPrice: 41999,
  discount: 14,
  rating: 4.8,
  stock: 18,
  brand: "Apple",
  description:
    "Premium smartphone with powerful processor, OLED display and advanced cameras.",
},

{
  id: 23,
  section: "featured-products",
  name: "Noise Cancelling Headphones",
  category: "Accessories",
  image: headphones,
  price: 5999,
  oldPrice: 7999,
  discount: 25,
  rating: 4.8,
  stock: 22,
  brand: "Bose",
  description:
    "Wireless headphones with active noise cancellation and premium sound quality.",
},

{
  id: 24,
  section: "featured-products",
  name: "Portable Bluetooth Speaker",
  category: "Electronics",
  image: speaker,
  price: 2999,
  oldPrice: 3999,
  discount: 25,
  rating: 4.7,
  stock: 26,
  brand: "JBL",
  description:
    "Portable Bluetooth speaker with deep bass and 15-hour battery life.",
},
// ================= GROCERY PRODUCTS (25–32) =================

{
  id: 25,
  section: "grocery-products",
  name: "Premium Rice Bag",
  category: "Grocery",
  image: tv,
  price: 899,
  oldPrice: 1099,
  discount: 18,
  rating: 4.8,
  stock: 40,
  brand: "India Gate",
  description:
    "Premium basmati rice with rich aroma and long grains.",
},

{
  id: 26,
  section: "grocery-products",
  name: "Sunflower Cooking Oil",
  category: "Grocery",
  image: fridge,
  price: 249,
  oldPrice: 299,
  discount: 17,
  rating: 4.7,
  stock: 50,
  brand: "Fortune",
  description:
    "Healthy refined sunflower cooking oil for daily use.",
},

{
  id: 27,
  section: "grocery-products",
  name: "Organic Wheat Flour",
  category: "Grocery",
  image: camera,
  price: 399,
  oldPrice: 499,
  discount: 20,
  rating: 4.6,
  stock: 45,
  brand: "Aashirvaad",
  description:
    "Fresh organic whole wheat flour for soft rotis.",
},

{
  id: 28,
  section: "grocery-products",
  name: "Premium Sugar",
  category: "Grocery",
  image: washingMachine,
  price: 59,
  oldPrice: 79,
  discount: 25,
  rating: 4.5,
  stock: 80,
  brand: "Madhur",
  description:
    "Fine-quality white sugar for daily cooking and tea.",
},

{
  id: 29,
  section: "grocery-products",
  name: "Tea Powder",
  category: "Grocery",
  image: chair,
  price: 199,
  oldPrice: 249,
  discount: 20,
  rating: 4.8,
  stock: 60,
  brand: "Tata Tea",
  description:
    "Premium tea leaves with rich taste and refreshing aroma.",
},

{
  id: 30,
  section: "grocery-products",
  name: "Fresh Milk Pack",
  category: "Grocery",
  image: table,
  price: 65,
  oldPrice: 75,
  discount: 13,
  rating: 4.7,
  stock: 100,
  brand: "Amul",
  description:
    "Fresh full-cream milk packed hygienically for daily nutrition.",
},

{
  id: 31,
  section: "grocery-products",
  name: "Chocolate Biscuits",
  category: "Grocery",
  image: speaker,
  price: 40,
  oldPrice: 50,
  discount: 20,
  rating: 4.6,
  stock: 120,
  brand: "Britannia",
  description:
    "Crunchy chocolate biscuits loved by kids and adults.",
},

{
  id: 32,
  section: "grocery-products",
  name: "Fresh Apples",
  category: "Grocery",
  image: mobile,
  price: 199,
  oldPrice: 249,
  discount: 20,
  rating: 4.8,
  stock: 70,
  brand: "Fresh Farm",
  description:
    "Fresh, juicy apples packed with natural vitamins.",
},
// ================= PHARMACY PRODUCTS (33–40) =================

{
  id: 33,
  section: "pharmacy-products",
  name: "Paracetamol Tablets",
  category: "Medicine",
  image: laptop,
  price: 120,
  oldPrice: 150,
  discount: 20,
  rating: 4.8,
  stock: 120,
  brand: "Dolo",
  description:
    "Paracetamol tablets for relief from fever and mild pain.",
},

{
  id: 34,
  section: "pharmacy-products",
  name: "Digital Thermometer",
  category: "Healthcare",
  image: mobile,
  price: 399,
  oldPrice: 499,
  discount: 20,
  rating: 4.7,
  stock: 40,
  brand: "Dr. Trust",
  description:
    "Accurate digital thermometer with quick temperature reading.",
},

{
  id: 35,
  section: "pharmacy-products",
  name: "Hand Sanitizer",
  category: "Healthcare",
  image: speaker,
  price: 99,
  oldPrice: 149,
  discount: 34,
  rating: 4.6,
  stock: 200,
  brand: "Dettol",
  description:
    "Alcohol-based hand sanitizer that kills 99.9% of germs.",
},

{
  id: 36,
  section: "pharmacy-products",
  name: "Face Mask",
  category: "Healthcare",
  image: headphones,
  price: 199,
  oldPrice: 299,
  discount: 33,
  rating: 4.5,
  stock: 150,
  brand: "Care",
  description:
    "Disposable 3-layer face masks for daily protection.",
},

{
  id: 37,
  section: "pharmacy-products",
  name: "Vitamin C Tablets",
  category: "Supplements",
  image: watch,
  price: 299,
  oldPrice: 399,
  discount: 25,
  rating: 4.7,
  stock: 80,
  brand: "Himalaya",
  description:
    "Vitamin C supplement to support immunity and overall health.",
},

{
  id: 38,
  section: "pharmacy-products",
  name: "Blood Pressure Monitor",
  category: "Healthcare",
  image: tv,
  price: 1999,
  oldPrice: 2499,
  discount: 20,
  rating: 4.8,
  stock: 18,
  brand: "Omron",
  description:
    "Digital blood pressure monitor with large LCD display.",
},

{
  id: 39,
  section: "pharmacy-products",
  name: "First Aid Kit",
  category: "Healthcare",
  image: chair,
  price: 699,
  oldPrice: 899,
  discount: 22,
  rating: 4.7,
  stock: 50,
  brand: "Apollo",
  description:
    "Complete first aid kit for home, office and travel use.",
},

{
  id: 40,
  section: "pharmacy-products",
  name: "Glucose Powder",
  category: "Healthcare",
  image: table,
  price: 249,
  oldPrice: 299,
  discount: 17,
  rating: 4.6,
  stock: 90,
  brand: "Glucon-D",
  description:
    "Instant energy drink powder enriched with glucose and vitamins.",
},
    
];

export default products;