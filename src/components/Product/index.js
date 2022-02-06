import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Product = ({ title, price, category, image, id }) => {
  return (
    <Link className={styles.link} to={`/product/${id}`}>
      <article className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>$ {price}</div>
            <div className={styles.category}>{category}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};
