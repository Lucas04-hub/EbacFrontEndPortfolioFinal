import React from 'react';
import foto from '../../assets/Minha-Foto.jpeg';
import styles from './SobreMim.module.css';

function SobreMim() {
  return (
    <div className={styles.container}>
      <img src={foto} alt="Foto de Lucas" className={styles.foto} />
      <div className={styles.titulo}>Sobre Mim</div>
      <p>
        Sou Lucas, desenvolvedor Front-End apaixonado por tecnologia e design e sempre busco aprender e melhorar como um desenvolvedor e artista.<br />
        E-mail: ribeirodasilalucas918@gmail.com
      </p>
    </div>
  );
}

export default SobreMim;