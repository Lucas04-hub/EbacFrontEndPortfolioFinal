import React from "react";
import styles from "./Projetos.module.css";

function Projetos() {
  return (
    <div className={styles.container}>
      <div className={styles.caixaProjetos}>
        <h1>Projetos</h1>
        
        <h2>Projeto 1: Cardápio Micro-Frontends</h2>
        <p>
          Aplicação que resolve <strong>xxxx</strong> usando Next.js mas a ferramenta principal é o uso de Micro Frontends com portas diferentes.<br />
          <a href="https://github.com/Lucas04-hub/TarefaEbacbCardapioMicro" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </p>
        
        <h2>Projeto 2: Lista de Artigos</h2>
        <p>
          Lista de artigos filtrável usando Next.js e Bootstrap<br />
          <a href="https://github.com/Lucas04-hub/TarefaEbacListaDeArtigos" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </p>

        <h2>Projeto 3: Loja de Produtos</h2>
        <p>
          Loja fictícia com carrinho de compras e consumo de API. Tecnologias: React, CSS Modules e Vite.<br />
          <a href="https://github.com/Lucas04-hub/TarefaEbacLojaDeProdutosReact" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projetos;