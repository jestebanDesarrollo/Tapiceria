import { useState } from "react"
import  emailjs  from "@emailjs/browser"
import Header from "../helpers/Header"
import Footer from "../helpers/Footer"

const Contacto = () => {
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [telefono,setTelefono] = useState("")
  const [email,setEmail] = useState("")
  const [mensaje,setMensaje] = useState("")

  function sendEmail(e){
    e.preventDefault();
    if (nombre === '' || apellido === '' || telefono === '' || email === '' || mensaje === '') {
      alert("Todos los campos son requeridos");
      return;
   }

   const templateParams = {
    from_nombre : nombre ,
    apellido: apellido,
    telefono: telefono,
    mensaje: mensaje,
    email: email,
   };
   emailjs
   .send(
    "service_g4vj79a",
    "template_00lz516",
    templateParams,
    "dc0PIq19VQB_q9Qgs"
    )
    .then(
      (response) => {
        console.log("Email enviado",response,status,response.text);
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setMensaje("");
      },
      (err) => {
        console.log("ERROR",err)
      }
    )
  }
  return (
    <section>
        <Header/>
        <section className="contacto">
          <div className="form-contacto">
            <form className="form" onSubmit={sendEmail}>
            <input className="input" type="text" placeholder="Nombre Completo" onChange={(e)=> setNombre(e.target.value)} value={nombre} />
            <input className="input" type="text" placeholder="Apellidos" onChange={(e)=> setApellido(e.target.value)} value={apellido} />
            <input className="input" type="text" placeholder="Telefono" onChange={(e)=> setTelefono(e.target.value)} value={telefono} />
            <input className="input" type="text" placeholder="Correo Electronico" onChange={(e)=> setEmail(e.target.value)} value={email} />
            <textarea className="inputmensaje" type="file" placeholder="Porfavor ingrese el modelo del carro y material en el que lo desea" onChange={(e)=> setMensaje(e.target.value)} value={mensaje} />
            <input className="buttoncontacto" type="submit" value="Enviar" />  
            </form> 
            <div className="trabajo">
            <img className='Contacto' src='/src/assets/img/Logo/CORIUM.png' />
            </div> 
          </div>    
        </section>
        <footer>
            <Footer/>
          </footer>        
    </section>
  )
}

export default Contacto