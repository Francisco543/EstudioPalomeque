import React from 'react';
import styled from 'styled-components'
import Nav from './Nav';
import Carousel from './Carousel';
import Section3 from './Section3';
import Footer from './Footer';
import Background from './Background';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 0;   
`
const Contacto = () => {
    return (  
        <Container>
            <Nav></Nav>
            <Carousel></Carousel>
            <Section3></Section3>
            <Footer></Footer>
            <Background></Background>
        </Container>

    );
}
 
export default Contacto;

