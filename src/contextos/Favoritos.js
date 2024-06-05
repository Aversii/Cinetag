import { createContext, useContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState(() => {
    const favoritosSalvos = localStorage.getItem('favoritos');
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favorito));
  }, [favorito]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      setFavorito(novaLista);
    } else {
      novaLista = novaLista.filter(item => item.id !== novoFavorito.id);
      setFavorito(novaLista);
    }
  }

  return {
    favorito,
    adicionarFavorito
  };
}
