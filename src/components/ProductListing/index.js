import { useSelector } from "react-redux";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  return (
    <section className="ui grid container">
      <h1>Product Listing</h1>
    </section>
  );
};
