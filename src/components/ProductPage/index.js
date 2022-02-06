import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from "axios";
import { ProductListing } from "../ProductListing";
import styles from "./styles.module.css";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (e) {
      console.warn(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className={styles.container}>
      <ProductListing />
    </section>
  );
};
