import React from "react"
import Heading from "../components/heading"
import NavBar from "../components/navbar"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import PostBlockContainer from "../components/postBlockContainer"
import Blockcontainer from "../components/blocksContainer"
import bg1 from '../images/slider/asar.jpg'
import bg2 from '../images/slider/pesca.jpg'
import bg3 from '../images/slider/acampar.jpg'
import bg4 from '../images/slider/carpinteria.jpg'
import bg5 from '../images/slider/cocinar.jpg'
import bg6 from '../images/slider/cocteleria.jpg'
import bg7 from '../images/slider/jardineria.jpg'
export default function Home() {
  let styles = {
    height: '100vh'
  };
  return (
    
    <React.Fragment>
    <NavBar />
    <SimpleSlider/>
    <Heading color="dark">Ve nuestras categorías</Heading>
      
      <Blockcontainer>
        <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
        <PostBlock name="Pesca Carpa" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg2} />
        <PostBlock name="Pesca con Carnada" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg3} />
        <PostBlock name="Pesca Mosca" text="LOREM IPSUM MOTHERFUCKER" nivel="Intermedio" background={bg4} />
        <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
        <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
        <PostBlock name="Pesca Carpa" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg2} />
        <PostBlock name="Pesca con Carnada" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg3} />
        <PostBlock name="Pesca Mosca" text="LOREM IPSUM MOTHERFUCKER" nivel="Intermedio" background={bg4} />
        <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
        <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
        <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
      </Blockcontainer>

    
    </React.Fragment>
  )
  
}
