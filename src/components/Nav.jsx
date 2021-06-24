import React from 'react'
import styled from 'styled-components'
import '../css/nav.css'
import Logo12 from './assets/imagenes/logo.png'

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
            <nav id="Nav" class="navbar  sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
               <LogoImagen className="logo" src={Logo12}></LogoImagen> 
            <a class="navbar-brand" href="#irEstudio">
             Estudio Juridico
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#irEstudio">ESTUDIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#irSectores">AREAS DE PRACTICA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#irContacto">CONTACTO</a>
                </li>
                
                </ul>
            </div>
            </div>
            </nav>
          
     );
}
 
export default Nav;