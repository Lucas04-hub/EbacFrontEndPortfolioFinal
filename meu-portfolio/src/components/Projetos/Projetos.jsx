import React from "react";
import styles from "./Projetos.module.css";

const projetos = [
  {
    titulo: "Projeto 1: Cardápio Micro-Frontends",
    descricao: (
      <>
        Aplicação que resolve <strong>xxxx</strong> usando Next.js, mas a ferramenta principal é o uso de Micro Frontends com portas diferentes.
      </>
    ),
    link: "https://github.com/Lucas04-hub/TarefaEbacCardapioMicro"
  },
  {
    titulo: "Projeto 2: Diário de Bordo",
    descricao: (
      <>
        Uma site onde tu pode escrever e anotar em um diário digital usando as tecnologias de HTML, CSS e JavaScript.
      </>
    ),
    link: "https://github.com/Lucas04-hub/EbacTarefaDiarioPWA"
  },
  {
    titulo: "Projeto 3: Loja de Produtos",
    descricao: (
      <>
        Loja fictícia com carrinho de compras e consumo de API. Tecnologias: React, CSS Modules e Vite.
      </>
    ),
    link: "https://github.com/Lucas04-hub/TarefaEbacLojaDeProdutosReact"
  }
];

function Projetos() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaProjetos}>
        <h1>Projetos</h1>
        {projetos.map((proj, i) => (
          <div key={i}>
            <h2>{proj.titulo}</h2>
            <p>{proj.descricao}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;