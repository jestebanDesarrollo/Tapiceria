import Footer from "../helpers/Footer"
import Listadotrabajos from "./Listadotrabajos"

const Inicio = () => {
  return (
    <section className="inicio">
          <Listadotrabajos/>
          <section>
            <footer>
              <Footer/>
            </footer>
          </section>
    </section>
  )
}

export default Inicio