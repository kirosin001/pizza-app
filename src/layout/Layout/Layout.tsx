import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames"
export function Layout() {
  
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img className={styles["avatar"]} src="/public/avatar.png" alt="avatar" />
          <div className={styles["name"]}>Наталья Кирсанова </div>
          <div className={styles["email"]}> kirosin001.ru</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink to="/" className={({ isActive })=>cn(styles["link"], {
            [styles.active]: isActive
          })}>
            <img src="/public/menu-icon.svg" alt="icon-menu" />
            Меню</NavLink>
          <NavLink to="/cart" className={({ isActive })=>cn(styles["link"], {
            [styles.active]: isActive
             })}>
          <img src="/public/cart-icon.svg" alt="icon-cart" />
            Корзина</NavLink>
        </div>
        <Button className={styles["exit"]}>
          <img src="/public/exit.svg" alt="выход" />
          Выход
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
