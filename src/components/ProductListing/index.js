import { useSelector } from "react-redux";
import { Product } from "../Product";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  return (
    <section className="ui grid container">
      <Product />
    </section>
  );
};
