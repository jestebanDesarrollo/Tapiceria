import { dataBase } from "../config/tapiceroa-firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

export const CrearTrabajo = () => {
    
    const [nombreTrabajo, setnombreTrabajo] = useState('');
    const [descripcionTrabajo, setdescripcionTrabajo] = useState('');
    const listadotrabajos = useNavigate()
    
    const addTrabajos = async () => {
        let trabajoCollection = collection (dataBase, "tapiceria")
        let trabajoNuevo = {
            nombreTrabajo,descripcionTrabajo
        }
        await addDoc ( trabajoCollection,trabajoNuevo)
        listadotrabajos('/lista-trabajos')
    }

    return (
        <section className="crear-trabajo-container">
            <Header/>
            <form className="crear-trabajo-form">
                <input className="crear-trabajo-input" onChange={(e) => setnombreTrabajo(e.target.value)} placeholder="Nombre del Trabajo" type="text"/>
                <input className="crear-trabajo-input" onChange={(e) => setdescripcionTrabajo(e.target.value)} placeholder="Descripcion trabajo" type="text"  />
                <button className="crear-trabajo-button" onClick={addTrabajos} type="button"> Crear Trabajo </button>
            </form>
            <footer>
                <Footer/>
            </footer>
        </section>
    );
}
