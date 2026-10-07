import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Sobre Mim</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Navbar;