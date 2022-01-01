import { FC } from "react";
import styles from "./Laptop.module.css";

export const Laptop: FC = () => (
  <div className="section" id={styles.laptop}>
    <img src="./img/banner-onia.jpg" alt="" />
  </div>
);

Laptop.displayName = "Laptop";
