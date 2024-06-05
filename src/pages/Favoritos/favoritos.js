import Banner from '../../components/Banner/banner';
import Titulo from '../../components/Titulo/titulo';
import styles from './Favoritos.module.css';
import Card from '../../components/Card/card';
import { useFavoritoContext } from '../../contextos/Favoritos';

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  
  return (
    <>
      <Banner imagem="favoritos"/>
      <Titulo>
        <h1>Aqui estão seus Favoritos!</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map(fav => (
          <Card {...fav} key={fav.id}/>
        ))}
      </section>
    </>
  );
}

export default Favoritos;
