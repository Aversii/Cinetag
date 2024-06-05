import styles from "./Card.module.css";
import iconeFavoritar from "../imagens/favoritar.png";
import iconeDesfavoritar from "../imagens/desfavoritar.png";
import { useFavoritoContext } from "../../contextos/Favoritos";
import { Link } from "react-router-dom";


function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icone = !isFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
