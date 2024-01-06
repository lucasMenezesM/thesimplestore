import BannerPNG from "../../../components/BannerPNG/BannerPNG";
import AboutPageBox from "../components/AboutPageBox";
import "./About.css";

export default function About() {
  return (
    <div>
      <BannerPNG
        title={"Crafting Experiences, Defining Style"}
        description={
          "Dive into the heart of The Simple Store where every product tells a story. Explore the passion that fuels our journey, the values that guide us, and the commitment to curate a collection that resonates with your lifestyle. Uncover the magic behind the scenes and get to know the soul of our brand."
        }
        reverse
        imgUrl={"/assets/about-banner.png"}
      />

      <div className="about-page__container">
        <h2>About us</h2>

        <div className="about-page__box-list">
          <AboutPageBox
            title={"Driving Change, Defining Trends"}
            description={
              "Innovation is the heartbeat of [Your Store Name]. From the latest tech gadgets to cutting-edge fashion, we stay at the forefront of trends, constantly seeking new ways to elevate your lifestyle. Immerse yourself in a world where innovation meets style, and discover the next big thing before it becomes a trend."
            }
            imgUrl={"/assets/image-about1.jpg"}
          />

          <AboutPageBox
            title={"From Concept to Your Doorstep"}
            description={
              "Ever wondered how your favorite products come to life? Explore the behind-the-scenes magic at [Your Store Name]. From ideation to curation, our meticulous process ensures that each item in our collection is a masterpiece. Witness the journey from concept to your doorstep, where quality and creativity intertwine."
            }
            imgUrl={"/assets/image-about2.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
