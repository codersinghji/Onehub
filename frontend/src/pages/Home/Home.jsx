import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FlashSale from "../../components/FlashSale/FlashSale";
import TodaysDeals from "../../components/TodaysDeals/TodaysDeals";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PopularBrands from "../../components/PopularBrands/PopularBrands";


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
    </>
  );
}

export default Home;