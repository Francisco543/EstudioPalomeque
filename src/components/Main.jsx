import React from 'react'
import styled from 'styled-components'
import euge from './assets/imagenes/eugenia.jpg'
import Aos from "aos"
import "aos/dist/aos.css"


const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    background-color: #f3efef9d;
    height: 500px;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1441px){
            height: 820px;
            justify-content: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media (max-width: 710px){
            height: 920px;
            justify-content: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;
const ImagenEuge = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    filter: grayscale(100%);

`;
const ImageDiv = styled.div`
    
    @media (max-width: 1441px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 90px;
            width: 100%;
        }
    
`;

const ImageFooter = styled.p`
    color:#070606da;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    font-size: 30px; 
    margin-left: -50px;
    margin-top : 20px;
    @media (max-width: 1441px){
            margin-top: 0;
            margin-left: 0;
        }
`;

const NavItemSection = styled.div`
    height: 90%;
    width: 40%;
    border-radius: 15px;
    margin-left: 60px;
`;

const DescripcionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    width: 50%;
    height: 90%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1441px){
            width: 100%;
        }
`;

const TituloDescripcion = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: orange;
`;
const Descripcion = styled.p`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-weight: bold;
`;
const DescripcionColumn2 = styled.p`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: black;
`;
const Main = () => {
    Aos.init();
    return ( 

        <MainContainer id="irPractica" data-aos="fade-left" >
            <ImageDiv data-aos="fade-right">
                <ImagenEuge src={euge}></ImagenEuge>
                <ImageFooter>Eugenia Palomeque</ImageFooter>
            </ImageDiv> 
            < DescripcionContainer data-aos="fade-up">
                <NavItemSection>
                    <TituloDescripcion>Estudio Juridico Palomeque & Asociados</TituloDescripcion>
                    <Descripcion>Estudio Jurídico especializado en Prevención del Lavado de Activos y la Financiación del Terrorismo.<br/>
                        Revisor Externo Independiente, acreditada ante la Unidad de Información Financiera (UIF)</Descripcion>
                </NavItemSection>
                <NavItemSection>
                    <DescripcionColumn2>
                        <ul>
                            <li>Medidas contra el lavado de dinero</li>
                            <li>Mercado de capitales</li>
                            <li>Planificacion estrategica</li>
                            <li>Finanzas corporativas</li>
                            <li>Riesgo financiero</li>
                        </ul>
                    </DescripcionColumn2>
                </NavItemSection>
                
            </DescripcionContainer>  
            
        </MainContainer>

     );
}
 
export default Main;