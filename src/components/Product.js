import { Link } from "react-router-dom";

export const Product = ({ title, price, category, image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <article className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};
