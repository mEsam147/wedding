import Categories from "../components/HomePage/Category";
import ExploreCategory from "../components/HomePage/ExploreCategory";
import HeroSection from "../components/HomePage/HeroSection";
import LatestProduct from "../components/HomePage/LatestProduct";
import LatestWedding from "../components/HomePage/LatestWeding";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <LatestWedding />
      <LatestProduct />
      <ExploreCategory />
    </div>
  );
};

export default HomePage;
