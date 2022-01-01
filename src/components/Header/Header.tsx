import { FC, useState } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const toggleMenu = () => setHideMenu(!hideMenu);

  return (
    <header className={styles.styled}>
      <div className={styles.navbar_header}>
        <p>Humaan</p>
        <div
          className={styles.mobile_toggle_icon}
          onClick={() => toggleMenu()}
          mobile-show={hideMenu.toString()}
        />
        <nav className={styles.menu_nav} data-visible={hideMenu}>
          <a href="/">
            <span className={styles.item_nav}>Work</span>
          </a>
          <a href="/">
            <span className={styles.item_nav}>About</span>
          </a>
          <a href="/">
            <span className={styles.item_nav}>Team</span>
          </a>
          <a href="/">
            <span className={styles.item_nav}>Blog</span>
          </a>
        </nav>
      </div>
      <div className={styles.header_title}>
        <p>ONiA</p>
        <h1>An experience to smile about</h1>
      </div>
    </header>
  );
};

Header.displayName = "Header";
