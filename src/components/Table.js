import React from "react";

const Table = ({ data }) => {
  return (
    <div style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
      <table class="table table-dark table-hover" style={{ height: 400 }}>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>
            <th scope="col">Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr class="table-danger">
                <td>{d.nombre}</td>
                <td>{d.edad}</td>
                <td>{d.carrera}</td>
                <td>{d.hobbie}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
