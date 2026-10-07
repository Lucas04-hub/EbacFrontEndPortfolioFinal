import React from "react";
import styles from "./Habilidades.module.css";

function Habilidades() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaHabilidades}>
        <div className={styles.titulo}>Habilidades</div>
        <ul className={styles.lista}>
          <li>Python</li>
          <li>React</li>
          <li>TailWind</li>
          <li>TypeScript</li>
          <li>Recoil</li>
          <li>Nextjs</li>
          <li>Micro Frontend</li>
          <li>Jest</li>
          <li>ESlint</li>
          <li>Axios</li>
          <li>Prettier</li>
          <li>NPM</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
}

export default Habilidades;