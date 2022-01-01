import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div>
      <h2>Reason for this kata:</h2>
      <p>
        Design, images and all content are property of
        <a href="https://humaan.com/">Humaan</a>. © Humaan 2021
      </p>
      <p>
        The reason for copying the design of others is solely educational to
        improve my layout skills. This website is not functional. I chose
        several sections of the web to practice.
      </p>
    </div>
    <h2>Important links:</h2>
    <ul>
      <li>
        <a href="https://humaan.com/" target="_blank" rel="noreferrer">
          Humaan
        </a>
      </li>
      <li>
        <a
          href="https://humaan.com/case-study/onia/"
          target="_blank"
          rel="noreferrer"
        >
          Original website
        </a>
      </li>
    </ul>
  </footer>
);

Footer.displayName = "Footer";
