import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import Titulo from "../../components/Titulo/titulo";
import styles from "./Player.module.css";
import NaoEncontrada from "../NaoEncontrada/naoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video,setVideo]=useState([])
    const parametros = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Aversii/Cinetag-Alura-API/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])


    if (!video) {
        return <NaoEncontrada />
    }



    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;