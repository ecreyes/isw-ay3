import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import medicosService from "../services/medicos.service";

const MedicosPage = () => {
  const [loading, setLoading] = useState(false);
  const [medicos, setMedicos] = useState([]);
  useEffect(() => {
    setLoading(true);
    medicosService.getMedicos().then(res => {
      setMedicos(res.data)
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  const medicosItems = medicos.map((medico) =>
    <li key={medico.id}>
      {medico.nombre} - {medico.cargo} - {medico.estado}
    </li>
  );
  return (
    <div>
      <NavbarComponent />
      <h1>Medicos page</h1>
      {loading &&
        <p>Cargando...</p>
      }
      {!loading &&
        <ul>
          {medicosItems}
        </ul>
      }
    </div>
  )
}

export default MedicosPage;