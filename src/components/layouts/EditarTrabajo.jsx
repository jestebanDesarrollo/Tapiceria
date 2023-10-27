import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataBase } from "../config/tapiceroa-firebase";
import Header from "../helpers/Header";

const EditarTrabajo = () => {
  const [nombreTrabajo, setnombreTrabajo] = useState("");
  const [descripcionTrabajo, setdescripcionTrabajo] = useState("");
  const Listadotrabajos = useNavigate();
  let { id } = useParams();

  const updateTrabajo = async () => {
    let trabajoCollection = doc(dataBase, "tapiceria", id);
    let trabajoNuevo = {
      nombreTrabajo,
      descripcionTrabajo,
    };
    await updateDoc(trabajoCollection, trabajoNuevo);
    Listadotrabajos("/lista-trabajos");
  };

  const getTrabajosId = async (id) => {
    let trabajoCollection = await getDoc(doc(dataBase, "tapiceria", id));
    setnombreTrabajo(trabajoCollection.data().nombreTrabajo);
    setdescripcionTrabajo(trabajoCollection.data().descripcionTrabajo);
  };

  useEffect(() => {
    getTrabajosId(id);
  }, []);

  return (
    <section className="crear-trabajo-container">
      <Header />
      <form className="crear-trabajo-form">
        <input
          value={nombreTrabajo} onChange={(e) => setnombreTrabajo(e.target.value)} placeholder="Nombre Trabajo" className="crear-trabajo-input" type="text" />
        <input value={descripcionTrabajo} onChange={(e) => setdescripcionTrabajo(e.target.value)} placeholder="Descripcion Trabajo" className="crear-trabajo-input" type="text"/>
        <button onClick={updateTrabajo}className="crear-trabajo-button"type="button">Agregar Cambios</button>
      </form>
    </section>
  );
};

export default EditarTrabajo;
