import { useSelector } from "react-redux";
import { Product } from "../Product";
import styles from "./styles.module.css";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <section className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};
