import React from 'react'
import styled from 'styled-components'
import VideoHeader from './assets/videos/fondo.mp4'
const StyledVideo = styled.video`
    position: fixed;
    z-index: -1; 
    
    @media (min-aspect-ratio:16/9){
        width: 100%;
        height: auto;
    }
    @media (max-aspect-ratio:16/9){
        width: auto;
        height: 100%;
    }
`;

const Background = () => {
    return (         
        <StyledVideo autoPlay  muted >
            <source src={VideoHeader} type="video/mp4"/>
        </StyledVideo>  
               
     );         
}
 
export default Background;