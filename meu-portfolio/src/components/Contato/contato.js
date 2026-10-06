import React from "react";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaContato}>
        <div className={styles.titulo}>Contato</div>
        <div className={styles.info}>
          Você pode entrar em contato pelos canais abaixo:
        </div>
        <div className={styles.info}>
          E-mail: <strong>ribeirodasilvalucas918@gmail.com</strong>
        </div>
        <div className={styles.info}>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lucas-ribeiro-da-silva-2b93ba414/"
            className={styles.linked}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/Lucas04hub
          </a>
        </div>
        <div className={styles.info}>
          Telefone: <strong>+1 (562) 347-5441</strong>
        </div>
      </div>
    </div>
  );
}

export default Contato;

/* function Contato() {
  return (
    <section>
      <h1>Contato</h1>
      <p>Conatate comigo aqui</p>
      <p>E-mail: ribeirodasilalucas918@gmail.com</p>
      <p>Numero de Telefone: +1 (562) 347-5441</p>
      <p>LinkedIn:{' '} 
        <a href="https://www.linkedin.com/in/lucas-ribeiro-da-silva-2b93ba414/" />
      </p>
    </section>
  );
}
export default Contato; */