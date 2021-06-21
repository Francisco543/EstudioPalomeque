import React from 'react';
import styled from 'styled-components';
import img from './assets/imagenes/wpp.png'
const Container = styled.div`
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: 0px;
    right: 0px;
`
const Link = styled.a`
    position: fixed;
    height: 60px;
    width: 60px;
`


const Imagen = styled.img`

    height: 60px;
    width: 60px;

`

const Whatsapp = () => {
    return ( 
        <Container>
            <Link href="https://wa.me/5491149169760"></Link>
            <Imagen src={img}>
            </Imagen>
        </Container>

     );
}
 
export default Whatsapp;