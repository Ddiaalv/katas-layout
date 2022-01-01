import { FC } from "react";
import styles from "./Originally.module.css";

export const Originally: FC = () => (
  <section id={styles.originally}>
    <img className={styles.onia_screen} src="./img/onia-screen.jpg" alt="" />
    <p>
      Originally, we began with muted tones to signal credibility and show a
      connection to the sleek interiors of ONiA clinics. However, even with the
      cheery illustrations, we found these colours strayed too far from the
      atmosphere we wanted to create.
    </p>
    <div className={styles.list_items}>
      <img src="./img/documents.jpg" alt="" />
      <img src="./img/medal.jpg" alt="" />
      <img src="./img/teeth.jpg" alt="" />
      <img src="./img/calendar.jpg" alt="" />
    </div>
  </section>
);

Originally.displayName = "Originally";
