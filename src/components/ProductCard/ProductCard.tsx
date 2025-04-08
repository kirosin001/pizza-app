import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

function ProductCart(props: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>()
  
  const add = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id))

  }
  return (
    <Link to={`/product/${props.id}`} className={styles["link"]}>
    <div className={styles["product-card"]}>
      <div className={styles["head"]} style={{backgroundImage: `url("${props.image}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className={styles["price"]}>
            {props.price}&nbsp; 
            <span className={styles["rubl"]}>₽</span>
        </div>
        <button className={styles["add-to-card"]} onClick={add}>
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
