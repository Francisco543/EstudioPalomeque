import React from 'react';
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import {Link}  from 'react-router-dom';
import '../estilos.css'
import logoimagen from '../../src/logoimagen2.png'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e2d1d1;
    height: 100vh;
    width: 100%;
    @media (max-width: 700px){
            justify-content: center;
            
        }
    
`;

const Logo = styled.p`

    color:#ffffff;
    font-family: 'Cinzel', serif;
    font-size: 200px;

    @media (max-width: 1441px){
        font-size: 150px;
        }
        @media (max-width: 700px){
            font-size: 100px;
            
        }
    
`;
const Logo2 = styled.span`
    font-size: 100px;
    color:#ffffff;
    font-family: 'Cinzel', serif;
    @media (max-width: 1441px){
        font-size: 70px;
        }
        @media (max-width: 700px){
        
            font-size: 30px;
        }
    
    
`;

const ImagenLogo = styled.img`
    height: 200px;
    width: auto;
    
    @media (max-width: 1441px){
        height: 200px;
        width: 800px;
        }
        @media (max-width: 700px){
            
            height: 150px;
            width: 420px;
        }
    margin-bottom: 200px;
`

var show=false;
const Preloader = () => {
    Aos.init();

    

    return ( 
        <Container id="onload" >
            <ImagenLogo data-aos="fade-up" data-aos-delay="350" data-aos-duration="1500" src={logoimagen}></ImagenLogo>
            <Link to={'/app'} className="box" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1700">
                Inicio 
            </Link>
            
        </Container>

     );
}
 
export default Preloader;