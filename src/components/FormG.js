import React, { useState } from "react";
import styles from "./FormG.module.css";
const FormG = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    edad: "",
    carrera: "",
    hobbie: "",
  });
  const [copy, setCopy] = useState();
  const [load, setLoad] = useState(false);

  const handleOnchange = ({ target: { name, value } }) => {
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!datos.nombre || !datos.edad || !datos.carrera || !datos.hobbie) {
      alert("debe llenar todos los campos");
    } else {
      setCopy(datos);
      console.log(datos);
      setLoad(true);

      setDatos({
        nombre: "",
        edad: "",
        carrera: "",
        hobbie: "",
      });
    }
  };
  return (
    <div className={styles.contenedor}>
      <div>
        <h3>Completa los campos solicitados...</h3>
      </div>

      <form className={styles.form}>
        <label>
          Nombre:
          <input
            onChange={handleOnchange}
            name="nombre"
            type="text"
            placeholder="..."
            value={datos.nombre}
          />
        </label>

        <label>
          Edad:
          <input
            onChange={handleOnchange}
            name="edad"
            type="text"
            placeholder="..."
            value={datos.edad}
          />
        </label>

        <label>
          Carrera
          <input
            onChange={handleOnchange}
            name="carrera"
            type="text"
            placeholder="..."
            value={datos.carrera}
          />
        </label>

        <label>
          Hobbie
          <input
            onChange={handleOnchange}
            name="hobbie"
            type="text"
            placeholder="..."
            value={datos.hobbie}
          />
        </label>
      </form>
      <button onClick={handleOnSubmit} className={styles.button}>
        Enviar datos!!
      </button>
      {load && (
        <div className={styles.datos}>
          <p>sus datos son:</p>
          <p>Nombre: {copy.nombre}</p>
          <p>Edad: {copy.edad}</p>
          <p>Carrera: {copy.carrera}</p>
          <p>Hobbie: {copy.hobbie}</p>
        </div>
      )}
    </div>
  );
};
export default FormG;
