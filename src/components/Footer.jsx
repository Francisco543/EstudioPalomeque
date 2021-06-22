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
                 <FooterItemT>Ubicación</FooterItemT>
                    <span class="material-icons-outlined">
                        room
                    </span>
                <FooterItem>
                    <Item>Ciudad Autonoma de Buenos Aires, Argentina</Item>
                </FooterItem>
             </UlDiv>
             <UlDiv>
                 <FooterItemT>Mail</FooterItemT>
                    <span class="material-icons-outlined">
                        email
                    </span>
                <FooterItem>
                    <Item>estudiojuridicopalomeque@gmail.com</Item>
                </FooterItem>
             </UlDiv>
             <UlDiv>
                 <FooterItemT>Teléfono</FooterItemT>
                    <span class="material-icons-outlined">
                        call
                    </span> 
                <FooterItem>
                    <Item>1135302651</Item>
                </FooterItem>
             </UlDiv>
            
        </FooterContainer>

     );
}
 
export default Footer;