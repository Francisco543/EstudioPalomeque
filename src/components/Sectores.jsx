import React from 'react';
import '../estilocards.css';
import imgaudit from './assets/imagenes/auditor.png'
import imgproceso from './assets/imagenes/proceso-de-diseno.png'
import imgcapacitacion from './assets/imagenes/capacitacion.png'
import imgentrevista from './assets/imagenes/entrevista.png'
import imgarchivo from './assets/imagenes/archivo.png'
const Sectores = () => {
    return (  
<div className="container">
  <div className="card" id="card1">
    <h1 className="titulo">Diseño de procesos</h1>
    <img src={imgproceso}></img>
    <p className="descripcion">Elaboracion y Adecuacion de Politicas y Procedimientos para su Implementacion y Cumplimiento Normativo. Manuales. Codigos. Lineamientos</p>
  </div>

  <div className="card" id="card2">
  <h1 className="titulo">REI</h1>
  <p className="descripcion">Revisor Externo Independiente: Unidad de Informacion Financiera (UIF). Emision y presentacion ante la UIF de informes de revision externa independiente vinculadas al cumplimiento, por su parte de los Sujetos Obligados</p>
  </div>

  <div className="card" id="card3">
  <h1 className="titulo">Capacitacion</h1>
  <img src={imgcapacitacion}></img>
  <p className="descripcion">Diseño y Elaboracion de Programas de Capacitacion para los distintos niveles de recursos humanos</p>
    </div>
<div className="card"id="card4">

<h1 className="titulo">Auditoria</h1>
      <img src={imgaudit}></img>
  <p className="descripcion">Control interno global de identificacion, evaluacion, migracion y monitoreo de Riesgos de LA/FT. Revisiones integrales para la identificacion de deficiencias o mejoras a aplicar</p>
    </div>
<div className="card"id="card5">
<h1 className="titulo">Comite</h1>
<img src={imgentrevista}></img>
  <p className="descripcion">Participacion en Comite de Compliance o PLA&FT Redaccion de Minutas. Seguimiento de temas tratados.</p>
    </div>
<div className="card"id="card6">
<h1 className="titulo">Requerimientos</h1>
<img src={imgarchivo}></img>
  <p className="descripcion">Asistencia en Reuqerimientos o Procesos de Supervision de Organismos de COntrol/Reguladores</p>
    </div>
</div>
    );

}
 
export default Sectores;

