import React from 'react'
import styled from 'styled-components'
import '../nav.css'
import Logo12 from './assets/imagenes/logo.png'
const SourceContainer = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 250px;
    z-index: 100000;

    @media (max-width: 1441px){
            flex-direction: column;
            align-items: center;
            
        }

`;
const NavContainer = styled.div`
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
    
       @media (max-width: 1441px){
            justify-content: center;
            align-items: center;
        }
        @media (max-width: 700px){
            flex-direction: row;
            justify-content: center;
           
        }
`

const NavItem = styled.a`
    font-size: 15px;
    color: #ffffff;
    padding-right: 25px;
    padding-left: 25px;
    font-family: 'Cinzel', serif;
    font-style: italic;
    cursor: pointer;
    text-decoration: none;
    text-align:center;
    &:hover{
        color: black;
        font-size: 20px;
    }
    @media (max-width: 1441px){
            &:hover{
                color: #d1c9c9;
            }
        }
        @media (max-width:700px){
            &:hover{
                font-size: 16px;
            }
        }
    
`;
const Logo = styled.p`

    color:#ffffff;
    font-family: 'Cinzel', serif;
    font-size: 100px;

    @media (max-width: 700px){
            
        }
    
`;
const Logo2 = styled.span`
    font-size: 20px;
    color:#ffffff;
    font-family: 'Cinzel', serif;
    margin-left: -500px;

    @media (max-width: 1750px){
           margin-left: -350px;
        }

    @media (max-width: 1441px){
           margin-left: 0px;
        }
        @media (max-width: 700px){
            margin-left: 0px;
        }
    
`;

const SeyledDiv= styled.div`
    justify-self: flex-end;

`;
const LogoImagen = styled.img`
    width: 100px;
    height: 100px;
    filter: invert(20%);

`

const  Nav= () => {


    
    window.addEventListener("scroll", function(){
        var header = document.getElementById("Nav");
        header.classList.toggle("sticky", window.scrollY)
    })

  

    return ( 
                
                <SourceContainer id="Nav">
                <LogoImagen src={Logo12}></LogoImagen>
                <Logo2>Estudio Juridico</Logo2>
                    <NavContainer>
                    <NavItem href="#irEstudio" className="animate__animated animate__fadeIn animate__delay-1s">
                        Estudio
                    </NavItem>
                    <NavItem href="#irPractica" className="animate__animated animate__fadeIn animate__delay-1s">
                       Areas de practica
                    </NavItem>   
                    <NavItem href="#irContacto" className="animate__animated animate__fadeIn animate__delay-1s">
                       Contacto
                    </NavItem>  
                </NavContainer>
                    
                </SourceContainer>  
          
     );
}
 



export default Nav;