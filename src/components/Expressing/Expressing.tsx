import { FC } from "react";
import styles from "./Expressing.module.css";

export const Expressing: FC = () => (
  <section className="section white_section" id={styles.expressing}>
    <h2>Expressing a brand that understands its customers</h2>
    <p>
      The bespoke artwork features iconic South Australian landmarks to
      emphasise ONiA’s locality and to highlight the brand promise of being
      best-placed to understand client needs.
    </p>
    <div className={styles.list_places}>
      <img src="./img/turret.jpg" alt="" />
      <img src="./img/river-bridge.jpg" alt="" />
      <img src="./img/grapes.jpg" alt="" />
      <img src="./img/montain.jpg" alt="" />
      <img src="./img/bridge.jpg" alt="" />
      <img src="./img/port.jpg" alt="" />
      <img src="./img/tower-clock.jpg" alt="" />
      <img src="./img/car-bridge.jpg" alt="" />
      <img src="./img/boat.jpg" alt="" />
    </div>
  </section>
);

Expressing.displayName = "Expressing";
