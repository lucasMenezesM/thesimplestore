import CategorySection from "./CategorySection";
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
      <CategorySection title={"Women's Clothing"}>
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
      </CategorySection>

      <CategorySection title={"Jewelery"}>
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
      </CategorySection>

      <CategorySection title={"Men's Clothing"}>
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
      </CategorySection>

      <CategorySection title={"Eletronics products"}>
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
      </CategorySection>
    </>
  );
}
