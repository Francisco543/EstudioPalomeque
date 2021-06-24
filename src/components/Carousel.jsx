import React from 'react'
import styled from 'styled-components'
import slide3 from './assets/imagenes/tribunales.jpg'
import slidebar1 from './assets/imagenes/slidebar1.jpg'
import banner1 from './assets/imagenes/banner1.png'

const StyledCarousel = styled.div`
  height: 500px;
  width: 100%;
`;
const StyledImg = styled.img`
  height: 500px;
  width:100%;
 
`

const StyledImg2 = styled.img`
  height: 400px;
  width:80%;
  margin-left: 10%;
  @media (max-width: 710px){
            height: 500px;
            width: 100%;
            margin-left: 0;
            
        }
  `
const CarrouselDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`;

const Carousel = () => {
    return ( 
      <CarrouselDiv id="irEstudio">
        <StyledCarousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <StyledImg src={slidebar1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <StyledImg2 src={banner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <StyledImg src={slide3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </StyledCarousel>

      </CarrouselDiv>
     );
}
 
export default Carousel;