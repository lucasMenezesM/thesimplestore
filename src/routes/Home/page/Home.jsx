import Banner from "../../../components/Banner/Banner";
import "./Style.css";
import PresentationBox from "../../../components/PresentationBox/PresentationBox";
import CategoryList from "../Components/CategoryList";

export default function Home() {
  return (
    <>
      <Banner
        title={"The Simple Store"}
        subTitle="Welcome to the Store"
        imgUrl={"assets/banner-home.jpg"}
      />

      <div className="container-home">
        <PresentationBox
          title={"Discover some of our products bellow"}
          description={
            "Explore some products in different categories below and elevate your shopping experience. Whether you're searching for exquisite jewelry, or cozy home essentials, our diverse selection ensures     there's something for every taste and need. Dive into the world of [Your Store Name] and discover the perfect blend of quality and style waiting just for you."
          }
          imgUrl={"assets/image1-home.jpg"}
        />

        <CategoryList />
      </div>
    </>
  );
}
