import React,{useState} from 'react';
import Background from './Background'
import Nav from './Nav'
import styled from 'styled-components'
import Main from './Main'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'
import Carousel from './Carousel'
import Sectores from './Sectores'
import Whatsapp from './Whatsapp'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 0;   
`



const AppContainer = () => {

  
    
    return ( 
    <Container  id="app">
    <Nav></Nav>
    <Carousel></Carousel>
    <Main ></Main>
    <Sectores></Sectores>
    <Section3></Section3>
    <Footer></Footer>
    <Background></Background>  
    
    
    <Whatsapp></Whatsapp>
    </Container> 
     );
}
export default AppContainer;