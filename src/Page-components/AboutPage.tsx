import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import "../components/css/background.css";

const AboutPage = () => {
  return (
    <>
      <div className="page-background">
        <NavBar />
        <Banner
          imgType="banner BannerAbout"
          title="This is the About Page"
          description="This is a description of the website"
        />
      </div>
    </>
  );
};

export default AboutPage;
