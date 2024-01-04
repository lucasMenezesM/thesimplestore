import Banner from "../../components/Banner/Banner";
import { useGetByCategory } from "../../hooks/useGetByCategory";
import "./Style.css";
import PresentationBox from "../../components/PresentationBox/PresentationBox";
import ProductList from "../../components/ProductList/ProductList";
import CategorySection from "./CategorySection/CategorySection";

export default function Home() {
  const [jeweleryProducts, isLoadingJewelery] = useGetByCategory("jewelery");
  const [eletronicProducts, isLoadingEletronicProducts] =
    useGetByCategory("electronics");
  const [menClosthingProducts, isLoadingManClothing] =
    useGetByCategory("men's clothing");
  const [womenClosthingProducts, isLoadingWomenClothing] =
    useGetByCategory("women's clothing");

  // console.log(products);
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

        <CategorySection title={"Women's Clothing"}>
          <ProductList
            products={womenClosthingProducts}
            className="productCard-home"
          />
        </CategorySection>

        <CategorySection title={"Jewelery"}>
          <ProductList
            products={jeweleryProducts}
            className="productCard-home"
          />
        </CategorySection>

        <CategorySection title={"Men's Clothing"}>
          <ProductList
            products={menClosthingProducts}
            className="productCard-home"
          />
        </CategorySection>

        <CategorySection title={"Eletronics products"}>
          <ProductList
            products={eletronicProducts}
            className="productCard-home"
          />
        </CategorySection>
      </div>
    </>
  );
}
