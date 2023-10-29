import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-padding">
            <div className="footer-links">
                <div className="footer-links-div">
                    <h4>Coctacto</h4>
                    <Link to={'/contacto'}><p>correo</p></Link>
                    <Link to={'https://www.whatsapp.com/?lang=es_LA'} target="_blank" className="a"><p>WhatsApp</p></Link>
                </div>
                <div className="footer-links_div">
                    <h4>Vehiculos</h4>
                    <Link></Link>
                </div>
                <div className="footer-links_div">
                    <h4>Ubicacion</h4>
                    <Link to={'/map'}></Link>
                </div>
                <div className="footer-links_div">
                    <h4>Nuestras redes</h4>
                    <div className="socialmedia">
                        <p><img src="/src/assets/img/Logo/Face.png" alt="" /></p>
                        <p><img src="/src/assets/img/Logo/Insta.png" alt="" /></p>
                        <p><img src="/src/assets/img/Logo/Tik.png" alt="" /></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} derechos reservados. Juan E.M 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer