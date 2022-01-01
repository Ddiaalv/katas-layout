import { FC } from "react";
import styles from "./Laptop.module.css";

export const Laptop: FC = () => (
  <section className="section" id={styles.laptop}>
    <img src="./img/banner-onia.jpg" alt="" />
  </section>
);

Laptop.displayName = "Laptop";
