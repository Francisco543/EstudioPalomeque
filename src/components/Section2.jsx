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
    titulo: 'Penal',
    description:"Robos, hurtos, falsificación de documentos, estafas, defraudaciones, robo de automotores y agravados, abuso de armas, robo calificado."
  }
  const Laboral ={
    titulo: 'Laboral',
    description:'Nuestro Estudio de abogados cuenta con profesionales especializados en el rubro y una trayectoria de mas de 30 años en Derecho Laboral. Estamos mayormente orientados en la defensa al trabajador, por lo tanto asumimos la defensa en juicio sin costos iniciales. En consecuencia solo se cobrará el 20% del monto que el trabajador perciba. En resumen, solamente cobramos si usted cobra.'
  }
  const Civil ={
    titulo: 'Civil',
    description:'Nos especializamos en Derecho Civil, abordando de forma particular cuestiones relativas a Derecho de Familia (Cuota Alimentaria, Divorcios, Régimen de Comunicación, Adopciones, Procesos de filiación), como así también Sucesiones, Accidentes de toda índole, Daños y Perjuicios, Desalojos y Usucapión.'
  }
  const Comercial ={
    titulo: 'Comercial',
    description:'Administración de acervo sucesorio. • Acuerdo de participación y división de bienes sucesorios. • Partición de herencia judicial y extrajudicial. • Inscripción registral en los registros de propiedad inmueble, Inspección General de Justicia. Registro de la Propiedad Automotor.'
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
                  <Titulo >Penal</Titulo>
                </TituloDiv2>
              </TituloDiv>
                  <Descripcion>Defensa en la etapa de la instrucción y en el juicio. Excarcelaciones y eximición de prisión. Abreviados.</Descripcion>
                  <LeerMas onClick={()=> dispatch({type:'seccion1'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="2" data-aos="fade-down"  data-aos-duration="1200">
              <TituloDiv>
                <TituloDiv2>
                  <Titulo>Laboral</Titulo>
                </TituloDiv2>
              </TituloDiv>
                  <Descripcion>Despidos. Indemnizaciones por trabajos realizados en negro ó bajo una registración defectuosa. Diferencias salariales. Indemnizaciones por antigüedad. Indemnizaciones y reclamos por ante la A.R.T. </Descripcion>
                  <LeerMas onClick={()=> dispatch({type:'seccion2'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="3" data-aos="fade-down"  data-aos-duration="1200">
            <TituloDiv>
                <TituloDiv2>
                  <Titulo>Civil</Titulo>
                </TituloDiv2>
              </TituloDiv>
              <Descripcion>Reclamos por daños y perjuicios derivados por ACCIDENTES DE TRÁNSITO y, hechos ilícitos. Indemnizaciones por no cumplimiento de contratos. Desalojos. Cobro de alquileres. Sucesiones. Divorcios.</Descripcion>
              <LeerMas onClick={()=> dispatch({type:'seccion3'})}>Leer Mas</LeerMas>
            </NavItemSection>
            <NavItemSection id="4" data-aos="fade-up"  data-aos-duration="1200">
            <TituloDiv>
                <TituloDiv2>
                  <Titulo>Comercial</Titulo>
                </TituloDiv2>
              </TituloDiv>
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