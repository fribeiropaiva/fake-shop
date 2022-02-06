import { useSelector } from "react-redux";
import { Product } from "../Product";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <section className="four wide column">
      {/* {products.map((product) => (
        <Product key={product.id} {...product} />
      ))} */}
    </section>
  );
};
