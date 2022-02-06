import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  remoteSelectedProduct,
  selectedProduct
} from "../../redux/actions/productsActions";
import styles from "./styles.module.css";
export const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );

      dispatch(selectedProduct(response.data));
    } catch (e) {
      console.warn(e.message);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail();

    return () => {
      dispatch(remoteSelectedProduct());
    };
  }, [productId]);

  return (
    <section className={styles.container}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className={styles.leftColumn}>
            <img className={styles.image} src={image} />
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.contentContainer}>
              <h1>{title}</h1>
              <h2>
                <a className={styles.price}>${price}</a>
              </h2>
              <h3 className={styles.category}>{category}</h3>
              <p>{description}</p>
              <div className={styles.addToCart} tabIndex="0">
                <button className="visible content">Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
