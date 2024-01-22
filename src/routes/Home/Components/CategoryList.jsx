// import CategoryItems from "./CategoryItems";
import CategoryItems from "./CategoryItems";
import ProductList from "../../../components/ProductList/ProductList";
import { useGetByCategory } from "../../../hooks/useGetByCategory";

export default function CategoryList() {
  const [jeweleryProducts, isLoadingJewelery, errorJewelery] =
    useGetByCategory("jewelery");
  const [eletronicProducts, isLoadingEletronicProducts, errorEletronic] =
    useGetByCategory("electronics");
  const [menClosthingProducts, isLoadingMenClothing, errorMenClothing] =
    useGetByCategory("men's clothing");
  const [womenClosthingProducts, isLoadingWomenClothing, errorWomen] =
    useGetByCategory("women's clothing");

  const loadingMessage = <h3>Loading Products...</h3>;

  return (
    <>
      <CategoryItems
        title={"Women's clothing"}
        subtitle={"Elevate Your Wardrobe:"}
        description={
          "Discover a curated collection of women's fashion that effortlessly blends style and comfort. From casual essentials to elegant ensembles, find the perfect pieces to elevate your wardrobe."
        }
      >
        {errorWomen ? (
          <p className="error-message__products">{errorWomen}</p>
        ) : isLoadingWomenClothing ? (
          loadingMessage
        ) : (
          <ProductList
            products={womenClosthingProducts}
            className="productCard-home"
          />
        )}
      </CategoryItems>

      <CategoryItems
        title={"Jewelery"}
        subtitle={"Adorn Your Style:"}
        description={
          "Explore our exquisite jewelry collection, where each piece is a statement waiting to be made. From dainty accessories to bold statements, find the perfect adornment to express your unique style."
        }
      >
        {errorJewelery ? (
          <p className="error-message__products">{errorJewelery}</p>
        ) : isLoadingJewelery ? (
          <h3>Loading Products...</h3>
        ) : (
          <ProductList
            products={jeweleryProducts}
            className="productCard-home"
          />
        )}
      </CategoryItems>

      <CategoryItems
        title={"Men's Clothing"}
        subtitle={"Style Redefined:"}
        description={
          "Explore our modern Men's Clothing collection, offering a fusion of polished formalwear and laid-back casuals. Elevate your everyday style with quality pieces tailored for every occasion."
        }
      >
        {errorMenClothing ? (
          <p className="error-message__products">{errorMenClothing}</p>
        ) : isLoadingMenClothing ? (
          loadingMessage
        ) : (
          <ProductList
            products={menClosthingProducts}
            className="productCard-home"
          />
        )}
      </CategoryItems>

      <CategoryItems
        title={"Eletronic products"}
        subtitle={"Smart Living, Simplified:"}
        description={
          "Step into the future with our Electronics Products collection. From cutting-edge gadgets to smart home essentials, embrace technology that enhances and simplifies your daily life."
        }
      >
        {errorEletronic ? (
          <p className="error-message__products">{errorEletronic}</p>
        ) : isLoadingEletronicProducts ? (
          loadingMessage
        ) : (
          <ProductList
            products={eletronicProducts}
            className="productCard-home"
          />
        )}
      </CategoryItems>
    </>
  );
}
