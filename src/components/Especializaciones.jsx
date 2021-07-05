import React,{Fragment} from 'react';
import styled from 'styled-components'
import Nav from './Nav';
import Background from './Background';
import imagen1 from '../components/assets/imagenes/abogado.jpg'
import imagen2 from '../components/assets/imagenes/REI.jpg'
import imagen3 from '../components/assets/imagenes/capacitacion.jpg'
import imagen4 from '../components/assets/imagenes/auditoria.jpg'
import Footer from './Footer';
import Carousel from './Carousel';
const Titulo= styled.p`
    font-size: 20px;
    
    color: orange;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-top: 50px;
`;
const Titulo2 = styled.h1`
    font-size: 50px;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-decoration:black;
    @media (max-width: 1250px){
           font-size: 30px;
        }
   
`
const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    height: 100%;
    position: relative;
`

const EspecializacionesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    
    
`;
const EspecializacionItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-bottom: 90px;
    
    @media (max-width: 1250px){
           flex-direction: column;
           justify-content: center;
           height: 700px;
        }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 0;   
`
const Imagen = styled.img`
 height: 100%;
 width: 500px;



`
const Descripcion = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 20px;
color: #000000;
font-weight: bold;
padding: 20px;
margin-top: -40px;
`
const Titulo3 = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 40px;
font-weight: bold;
color: #d18f13;
padding: 10px;
`
const DescripcionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media (max-width: 1250px){
           width: 100%;
        }
    
`

const BotonWpp = styled.a`
    width: 200px;
    height: 60px;
    background-color: #27b427;
    border: none;
    border-radius: 50px;
    text-align: center;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
        color: #0a0909;
        transform: translateY(5px)
    }
`

const Especializaciones = () => {
    return ( 
        <Container>
        <Nav></Nav>
        <Carousel></Carousel>
        <ComponentContainer>
        <Titulo>Areas de especializacion</Titulo>
        <Titulo2>Conoce las areas donde podemos ayudarte</Titulo2>

        <EspecializacionesContainer>
            <EspecializacionItem>
                <Imagen src={imagen1}></Imagen>
                <DescripcionDiv>
                <Titulo3>Diseño de Procesos</Titulo3>
                <Descripcion>Elaboración y Adecuación de Políticas y Procedimientos para su Implementación y Cumplimiento Normativo. Manuales. Códigos. Lineamientos</Descripcion>
                </DescripcionDiv>
                <BotonWpp href="https://wa.me/5491133097174" target="_blank">Consultar</BotonWpp>
            </EspecializacionItem>
            <EspecializacionItem>
                <Imagen src={imagen2}></Imagen>
                <DescripcionDiv>
                <Titulo3>REI</Titulo3>
                <Descripcion>Revisor Externo Independiente: Unidad de Información Financiera (UIF). Emisión y presentación ante la UIF de informes de revisión externa independiente vinculadas al cumplimiento, por su parte de los Sujetos Obligados</Descripcion>
                </DescripcionDiv>
                <BotonWpp href="https://wa.me/5491133097174" target="_blank">Consultar</BotonWpp>
            </EspecializacionItem>
            <EspecializacionItem>
                <Imagen src={imagen3}></Imagen>
                <DescripcionDiv>
                <Titulo3>Capacitacion</Titulo3>
                <Descripcion>Diseño y Elaboracion de Programas de Capacitación para los distintos niveles de recursos humanos</Descripcion>
                </DescripcionDiv>
                <BotonWpp href="https://wa.me/5491133097174" target="_blank">Consultar</BotonWpp>
            </EspecializacionItem>
            <EspecializacionItem>
                <Imagen src={imagen4}></Imagen>
                <DescripcionDiv>
                <Titulo3>Auditoria</Titulo3>
                <Descripcion>Control interno global de identificación, evaluación, migración y monitoreo de Riesgos de LA/FT. Revisiones integrales para la identificación de deficiencias o mejoras a aplicar</Descripcion>
                </DescripcionDiv>
                <BotonWpp href="https://wa.me/5491133097174" target="_blank">Consultar</BotonWpp>
            </EspecializacionItem>

        </EspecializacionesContainer>
        </ComponentContainer>
       
        <Background></Background>
        <Footer></Footer>
        </Container>

     );
}
 
export default Especializaciones;