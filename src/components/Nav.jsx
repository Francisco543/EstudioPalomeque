import React, { Fragment } from 'react'
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

    @media (max-width: 1250px){
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
    font-size: 18px;
    color: #9e7c00;
    padding-right: 25px;
    padding-left: 25px;
    font-family: 'Cinzel', serif;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    text-align:center;
    &:hover{
        color: black;
        font-size: 20px;
    }
    @media (max-width: 1441px){
            &:hover{
                color: #050404;
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
           margin-left: -250px;
        }
        @media (max-width: 1250px){
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
               <Fragment>
                

            <nav id="Nav" class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
               <LogoImagen className="logo" src={Logo12}></LogoImagen> 
            <a class="navbar-brand" href="#">
             Estudio Juridico
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">ESTUDIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">AREAS DE PRACTICA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">CONTACTO</a>
                </li>
                
                </ul>
            </div>
            </div>
            </nav>
          </Fragment> 
     );
}
 



export default Nav;