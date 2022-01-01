import { FC } from "react";
import styles from "./Table.module.css";

export const Table: FC = () => (
  <section className="section" id={styles.table}>
    <img src="./img/onia-chair-dudes.jpg" alt="" />
    <p>
      We realised A fun and friendly new website would help allay any fears of
      orthodontic treatment among the target audience and instil confidence in
      patients long before the first appointment.
    </p>
  </section>
);

Table.displayName = "Table";
