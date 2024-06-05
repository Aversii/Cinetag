import styles from "./Banner.module.css";

let Banner = ({ imagem }) => {
  const imagePath = require(`../imagens/banner-${imagem}.png`);
  return (
    <div className={styles.capa} style={{ backgroundImage: `url(${imagePath})`, backgroundColor: "red" }}>
      asdas
    </div>

  );
};

export default Banner;
