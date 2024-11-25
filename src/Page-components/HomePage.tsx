import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import "../components/css/background.css";

const HomePage = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerDefault"
          title="Welcome to my website"
          description="This is a brief description"
        />
      </div>
    </>
  );
};

export default HomePage;
