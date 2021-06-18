import React,{useState} from 'react'
import styled from 'styled-components'
import emailjs,{init} from 'emailjs-com'
import Aos from "aos"
import "aos/dist/aos.css"
const FormularioDiv = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #e7e3d8dc;
    height: 800px;
    align-items: center;  
`;

const FormularioDivItem = styled.div`
      width: 500px;
      @media (max-width: 500px){
            width: 300px;
        }

`;
const TituloFormuladio = styled.h1`
    font-size: 100px;
    font-family: 'Raleway', sans-serif;
    color: #585142;
    font-style: italic;
    
`;

const Error = styled.p`
    margin-top: 10px;
    width: 200px;
    background-color: #800000;
    text-align: center;
    box-shadow: 5px;
    color: white;
    font-size: 20px;
    font-family: 'Cinzel', serif;
    font-style: italic;;    
`;


const Success = styled.p`
    margin-top: 10px;
    width: 200px;
    background-color: green;
    text-align: center;
    box-shadow: 5px;
    color: white;
    font-size: 20px;
    font-family: 'Cinzel', serif;
    font-style: italic;
`;



const Section3 = () => {
    Aos.init();
    const [Showerror,Show]=useState(0);



function enviarEmail(e){
  e.preventDefault();
  emailjs.sendForm('gmailEstudio', 'template_n5n1xy6', e.target, 'user_4WmH6Vp5yOpC0B6FXVB3G')
.then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
  Show(1);

}, function(error) {
  console.log('FAILED...', error);
  Show(2)
});
}

    return ( 
        <FormularioDiv  onSubmit={enviarEmail} data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        <TituloFormuladio >Contacto</TituloFormuladio>
          <FormularioDivItem className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" name="name"></input>
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ejemplo@gmail.com" name="email"></input>
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Telefono:</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="phone"></input>
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label" >Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="mesagge"></textarea>
          </FormularioDivItem>
          <button type="submit" class="btn btn-secondary">Enviar</button>

        {Showerror === 1 ? 
          <Success data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">Enviado</Success>
        :null
      }
      {Showerror === 2 ?  
        <Error data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">Error</Error>
      :null
      } 

    </FormularioDiv>

     );
}
 
export default Section3;