import React from "react";
import styles from "./Contato.module.css";

const contatos = [
  {
    label: "E-mail",
    conteudo: <strong>ribeirodasilvalucas918@gmail.com</strong>
  },
  {
    label: "LinkedIn",
    conteudo: (
      <a
        href="https://www.linkedin.com/in/lucas-ribeiro-da-silva-b2b93ba414/"
        className={styles.linked}
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/Lucas04hub
      </a>
    )
  },
  {
    label: "Telefone",
    conteudo: <strong>+1 (562) 347-5441</strong>
  }
];

function Contato() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaContato}>
        <div className={styles.titulo}>Contato</div>
        <div className={styles.info}>
          Você pode entrar em contato pelos canais abaixo:
        </div>
        {contatos.map((c, i) => (
          <div className={styles.info} key={i}>
            {c.label}: {c.conteudo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contato;
