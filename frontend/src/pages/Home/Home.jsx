import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FlashSale from "../../components/FlashSale/FlashSale";
import TodaysDeals from "../../components/TodaysDeals/TodaysDeals";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PopularBrands from "../../components/PopularBrands/PopularBrands";
import Pharmacy from "../../components/Pharmacy/Pharmacy";
import Grocery from "../../components/Grocery/Grocery";
import RideBooking from "../../components/RideBooking/RideBooking";
import MetroBooking from "../../components/MetroBooking/MetroBooking";
import Footer from "../../components/Footer/Footer";




function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FlashSale />
      <TodaysDeals />
        < FeaturedProducts />
        < PopularBrands />
         < Pharmacy />
           < Grocery />
            < RideBooking />
           <MetroBooking />
           <Footer />

    </>
  );
}

export default Home;