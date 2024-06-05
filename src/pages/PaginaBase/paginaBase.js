import { Outlet } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import FavoritosProvider from "../../contextos/Favoritos";
import Container from "../../components/Container/container";

function PaginaBase() {
    return (
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase;