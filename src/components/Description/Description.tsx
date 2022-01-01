import { FC } from "react";
import styles from "./Description.module.css";

export const Description: FC = () => (
  <section className="section" id={styles.description}>
    <p>
      ONiA (Orthodontic Network in Adelaide) is a specialist orthodontist
      practice in South Australia. They needed a new website that emphasised
      professionalism and expertise and offered an outstanding user experience.
    </p>
    <p>
      With the large majority of patients being kids, we recommended an approach
      that would engage adults and children alike.
    </p>
    <ul>
      <li>User Experience</li>
      <li>Responsive Design</li>
      <li>Illustration and Animation</li>
      <li>Intuitive Content Management</li>
    </ul>
    <div>
      <h2>Recognition</h2>
      Australian Web Awards 2017
      <br />
      Winner, Commercial
    </div>
  </section>
);

Description.displayName = "Description";
