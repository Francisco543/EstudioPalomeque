import React,{useState} from 'react'
import styled from 'styled-components'
import emailjs,{init} from 'emailjs-com'
import Aos from "aos"
import "aos/dist/aos.css"

const FormularioDiv = styled.form`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    background-color: #ffffff8b;
    height: 700px;
    align-items: center; 
   
`;

const FormularioDivItem = styled.div`
      width: 500px;
      @media (max-width: 500px){
            width: 300px;
        }
    
`;
const TituloFormuladio = styled.h1`
    font-size: 70px;
    font-family: 'Montserrat', sans-serif;
    color: #be8a1a;
    font-weight: bold;
    margin-right: 210px;
    
    
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

const Divbar = styled.div`
    height: 3px;
    width: 120px;
    margin-right:370px;
    bottom:17px;
    position: relative;
    background-color: #9c998b;

`;

const LabelForm = styled.label`

font-family: 'Montserrat', sans-serif;
color: #573909;
font-weight: bold;

`;

const TextArea = styled.textarea`
  resize: none;

`


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
        <Divbar></Divbar>
          <FormularioDivItem className="mb-3">
            <LabelForm for="exampleFormControlInput1" className="form-label">Nombre:</LabelForm>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="name"></input>
              
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <LabelForm for="exampleFormControlInput1" className="form-label">E-mail:</LabelForm>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" name="email"></input>
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <LabelForm for="exampleFormControlInput1" className="form-label">Telefono:</LabelForm>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="phone"></input>
          </FormularioDivItem>
          <FormularioDivItem className="mb-3">
            <LabelForm for="exampleFormControlTextarea1" class="form-label" >Mensaje:</LabelForm>
            <TextArea className="form-control" id="exampleFormControlTextarea1" rows="3" name="mesagge" ></TextArea>
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