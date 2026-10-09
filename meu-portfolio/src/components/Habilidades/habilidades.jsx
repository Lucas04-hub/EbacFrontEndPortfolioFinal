import React from "react";
import styles from "./Habilidades.module.css";

const habilidades = [
  "Python",
  "React",
  "TailWind",
  "TypeScript",
  "Recoil",
  "Nextjs",
  "Micro Frontend",
  "Jest",
  "ESLint",
  "Axios",
  "Prettier",
  "NPM",
  "Bootstrap"
];

function Habilidades() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaHabilidades}>
        <div className={styles.titulo}>Habilidades</div>
        <ul className={styles.lista}>
          {habilidades.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Habilidades;