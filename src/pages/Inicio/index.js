import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import Titulo from "../../components/Titulo/titulo";
import videos from "../../json/db.json"
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react";

const Inicio = () =>{
    const [videos, setVideos]= useState([])
    useEffect(() => {
      fetch('https://my-json-server.typicode.com/Aversii/Cinetag-Alura-API/videos')
          .then(resposta => resposta.json())
          .then(dados => {
              setVideos(dados)
          })
  }, [])
    return(
      <>
       <Banner imagem="home"/>
       <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video)=>{
          return <Card {...video} key={video.id}/>

        })}

      </section>
       </>
    )   
   }
   
   export default Inicio;