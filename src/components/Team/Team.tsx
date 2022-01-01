import { FC } from "react";
import styles from "./Team.module.css";

export const Team: FC = () => (
  <section id={styles.team}>
    <img
      className={styles.team_wave_deco}
      src="./img/onia-wave-overlay.svg"
      alt="wave decoration"
    />
    <img
      id={styles.team_img}
      loading="lazy"
      src="./img/onia-staff.png"
      alt=""
    />
    <div className="section">
      <h2>A fresh perspective for orthodontic websites</h2>
      <p>
        Though the practice treats patients of all ages, the new look and feel
        needed to appeal to young children, while also displaying markers of
        credibility and quality for adult decision makers.
      </p>
      <p>
        Combining design expertise with the client’s strategic vision, we
        created a unique style that resonated across target audience groups and
        challenged the status quo.
      </p>
    </div>
  </section>
);

Team.displayName = "Team";
