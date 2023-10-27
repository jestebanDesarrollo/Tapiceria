import {collection, getDocs, deleteDoc,doc} from "firebase/firestore"
import { dataBase } from "../config/tapiceroa-firebase"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import Header from "../helpers/Header"

const Listadotrabajos = () => {
  const [trabajos,settrabajos] = useState([]);

  const getTrabajos = async () => {
    const trabajosCollection = collection(dataBase, "tapiceria");
    const data = await getDocs(trabajosCollection);
    console.log(trabajosCollection);
    console.log(data);
    settrabajos(
      data.docs.map((doc) => ({...doc.data(), id:doc.id})));
      console.log(trabajos)
  };

  const deleteTrabajos = async(id) =>{
    let trabajoEliminar = doc(dataBase, "tapiceria",id)
    await deleteDoc (trabajoEliminar)
    getTrabajos()
    console.log('Eliminando Trabajo')
  }

  useEffect(()=>{
    getTrabajos();
  },[])

  return (
      <section>
        <Header />
        <section className="trabajo-list">
          {trabajos.map((trabajo) => (
            <div key={trabajo.id} className="trabajo-card">
              <h3>{trabajo.nombreTrabajo}</h3>
              <p>{trabajo.descripcionTrabajo}</p>
              <div className="trabajo-actions">
                <button onClick={() => deleteTrabajos(trabajo.id)} type="button">Eliminar</button>
                <button type="button"> <Link to={'/editar-trabajo/' + trabajo.id}>Editar</Link></button>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
};

export default Listadotrabajos;