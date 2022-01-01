import { FC } from "react";
import styles from "./Partner.module.css";

export const Partner: FC = () => (
  <section className="section" id={styles.partner}>
    <p>
      “We really like how our site was custom designed and stands out from the
      templated look of others. This reflects nicely with our brand and gives it
      a premium professional feel.”
    </p>
    <small>Dr Eden Lau Practice Partner, Orthodontic Network in Adelaide</small>
  </section>
);

Partner.displayName = "Partner";
