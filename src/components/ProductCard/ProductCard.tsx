import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

function ProductCart(props: ProductCardProps) {
  return (
    <Link to={`/product/${props.id}`} className={styles["link"]}>
    <div className={styles["product-card"]}>
      <div className={styles["head"]} style={{backgroundImage: `url("${props.image}")`}}>
        <div className={styles["price"]}>
            {props.price}&nbsp; 
            <span className={styles["rubl"]}>₽</span>
        </div>
        <button className={styles["add-to-card"]}>
            <img src="/public/cart-button-icon.svg" alt="Добавить в корзину" />
        </button>
        <div className={styles["rating"]}>
            {props.rating}&nbsp; 
            <img src="/public/star-icon.svg" alt="звезда" />
        </div>
      </div>
      <div className={styles["footer"]}> 
      <div className={styles["title"]}>{props.name}</div>
      <div className={styles["description"]}>{props.description}</div>

      </div>
    </div>
    </Link>
  );
}

export default ProductCart;
