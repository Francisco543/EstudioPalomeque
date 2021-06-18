import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #18111181;
    height: 150px;
    align-items: center;
    justify-content: space-around;

    
       
`;
const UlDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;

    list-style: none;
   
    
`;
const FooterItemT = styled.h1`
    color:#eeebe7;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 500px){
            font-size: 20px;
        }
`
const FooterItem = styled.ul`
    list-style: none; 
    padding: 0;
    margin-top: 10px;
    color:#eeebe7;
    font-family: 'Montserrat', sans-serif;
`
const Item = styled.li`
    @media (max-width: 710px){
            font-size: 10px;
        }
`
const Footer = () => {
    return ( 
        <FooterContainer id="irContacto">
             <UlDiv>
                 <FooterItemT>Direccion</FooterItemT>
                    <span class="material-icons-outlined">
                        room
                    </span>
                <FooterItem>
                    <Item>Salguero 1540</Item>
                </FooterItem>
             </UlDiv>
             <UlDiv>
                 <FooterItemT>Mail</FooterItemT>
                    <span class="material-icons-outlined">
                        email
                    </span>
                <FooterItem>
                    <Item>eugeniapalomeque@yahoo.com.ar</Item>
                </FooterItem>
             </UlDiv>
             <UlDiv>
                 <FooterItemT>Whatsapp</FooterItemT>
                    <span class="material-icons-outlined">
                        smartphone
                    </span> 
                <FooterItem>
                    <Item>+54 9 114916-9760</Item>
                </FooterItem>
             </UlDiv>
            
        </FooterContainer>

     );
}
 
export default Footer;