import React,{Fragment, useState, useReducer} from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"





const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #181111d4;
    height: 600px;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1441px){
            height: 1000px;
        }
        @media (max-width: 710px){
            height: 2300px;
        }
`;
const Descripcion = styled.p`
    color:#000000;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    text-align: center;
    display: none;

    @media (max-width: 1441px){
            font-size: 20px;
        }
        @media (max-width: 710px){
            font-size: 15px;
        }
    
`;
const Descripcion2 = styled.p`
    color:#000000;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    text-align: center;  
`;

const LeerMas = styled.button`
    justify-content: flex-end;
    display: none;
    margin-right: 0;
    border: none;
    background-color: #6645197b;
    font-family: 'Cinzel', serif;
`;



const NavItemSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d6cbaddc;
    height: 90%;
    width: 350px;
    align-items: center;
    justify-content: center;
    @media (max-width: 1441px){
            height: 40%;
        } 
        @media (max-width: 710px){
            height: 20%;
        }   
   &:hover{
      transition-delay: 2s;
      justify-content: flex-start;
      ${Descripcion}{
        display: block;
      } 
      ${LeerMas}{
        display: block;
      }
   }  
`;

const TituloDiv = styled.div`
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      margin-top: 30px;
      margin-bottom: 30px;
     
`;
const TituloDiv2 = styled.div`
      margin-top: 2px;
      margin-bottom: 2px;
      border-top: 3px solid #664519;
      border-bottom: 3px solid #664519;
`;

const Titulo = styled.h1`
    color:#070504;
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    text-align: center;
`;

const Seccion1 = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #f3efef9d;
    height: 500px;
    align-items: center;
    justify-content: center;
    @media (max-width: 1441px){
            height: 820px;
            justify-content: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media (max-width: 500px){
            height: 1300px;
            justify-content: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;


const Section2 = () => {
  Aos.init();
  const Penal ={
    titulo: 'Diseño de procesos',
    description:"Elaboracion y Adecuacion de Politicas y Procedimientos para su Implementacion y Cumplimiento Normativo. Manuales. Codigos. Lineamientos"
  }
  const Laboral ={
    titulo: 'REI',
    description:'Revisor Externo Independiente: Unidad de Informacion Financiera (UIF). Emision y presentacion ante la UIF de informes de revision externa independiente vinculadas al cumplimiento, por su parte de los Sujetos Obligados'
  }
  const Civil ={
    titulo: 'Capacitacion',
    description:'Diseño y Elaboracion de Programas de Capacitacion para los distintos niveles de recursos humanos'
  }
  const Comercial ={
    titulo: 'Auditoria',
    description:'Control interno global de identificacion, evaluacion, migracion y monitoreo de Riesgos de LA/FT. Revisiones integrales para la identificacion de deficiencias o mejoras a aplicar'
  }

  const initialState = {
    seccion1:false,
    seccion2:false,
    seccion3:false,
    seccion4:false
  }

  function reducer(state,action){
    switch (action.type){
      case 'seccion1':
        return{
        ...state,
        seccion2:false,
        seccion3:false,
        seccion4:false,
        seccion1:true
        
        }
      case 'seccion2':
        return{
          ...state,
          seccion1:false,
          seccion3:false,
          seccion4:false,
          seccion2:true
        }
      case 'seccion3':
        return{
          ...state,
          seccion1:false,
          seccion2:false,
          seccion4:false,
          seccion3:true
          
        }
      case 'seccion4':
        return{
          ...state,
          seccion1:false,
          seccion2:false,
          seccion3:false,
          seccion4:true
        }
        
    }
  }

  const[state,dispatch]= useReducer(reducer,initialState);
  

  return(
  <Fragment>
            <MainContainer >
                          
            <NavItemSection id="1"  data-aos="fade-up"  data-aos-duration="1200">
              <TituloDiv>
                <TituloDiv2>
                  <Titulo >Diseño de procesos</Titulo>
                </TituloDiv2>
              </TituloDiv>
                  <Descripcion>Elaboracion y Adecuacion de Politicas y Procedimientos para su Implementacion y Cumplimiento Normativo. Manuales. Codigos. Lineamientos</Descripcion>
                  <LeerMas onClick={()=> dispatch({type:'seccion1'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="2" data-aos="fade-down"  data-aos-duration="1200">
              <TituloDiv>
                <TituloDiv2>
                  <Titulo>Revisor Externo Ind.</Titulo>
                </TituloDiv2>
              </TituloDiv>
                  <Descripcion>Unidad de Informacion Financiera (UIF). Emision y presentacion ante la UIF de informes de revision externa independiente vinculadas al cumplimiento, por su parte de los Sujetos Obligados</Descripcion>
                  <LeerMas onClick={()=> dispatch({type:'seccion2'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="3" data-aos="fade-down"  data-aos-duration="1200">
            <TituloDiv>
                <TituloDiv2>
                  <Titulo>Capacitacion RHH</Titulo>
                  
                </TituloDiv2>
              </TituloDiv>
              <Descripcion>Diseño y Elaboracion de Programas de Capacitacion para los distintos niveles de recursos humanos</Descripcion>
              <LeerMas onClick={()=> dispatch({type:'seccion3'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="4" data-aos="fade-up"  data-aos-duration="1200">
            <TituloDiv>
                <TituloDiv2>
                  <Titulo>Auditoria Y Control</Titulo>
                  
                </TituloDiv2>
              </TituloDiv>
              <Descripcion>Control interno global de identificacion, evaluacion, migracion y monitoreo de Riesgos de LA/FT. Revisiones integrales para la identificacion de deficiencias o mejoras a aplicar</Descripcion>
              <LeerMas onClick={()=> dispatch({type:'seccion4'})}>Leer Mas</LeerMas>
            </NavItemSection>
        </MainContainer>

        {state.seccion1 ? 
        <Seccion1 data-aos="fade-right"  data-aos-duration="1200"> 
          
          <Titulo>{Penal.titulo}</Titulo>
          <Descripcion2>{Penal.description}</Descripcion2>

        </Seccion1> 
        
        : null}
        {state.seccion2 ? 
        <Seccion1> 
          
          <Titulo>{Laboral.titulo}</Titulo>
          <Descripcion2>{Laboral.description}</Descripcion2>

        </Seccion1> 
        
        : null}
        {state.seccion3 ? 
        <Seccion1> 
          
          <Titulo>{Civil.titulo}</Titulo>
          <Descripcion2>{Civil.description}</Descripcion2>

        </Seccion1> 
        
        : null}
        {state.seccion4 ? 
        <Seccion1> 
          
          <Titulo>{Comercial.titulo}</Titulo>
          <Descripcion2>{Comercial.description}</Descripcion2>

        </Seccion1> 
        
        : null}
    </Fragment>
   
        )
}


 
export default Section2;