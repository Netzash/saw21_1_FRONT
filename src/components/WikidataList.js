import React, { useState, useEffect } from "react";
import WikidataSearchServices from "../services/WikidataSearchServices";
const WikidataList = () => {
  const [videogames, setVideogames] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  /* método para eliminar elemento de la lista*/
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setVideogames(videogames.filter((item) => item.id !== name));
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };


  /* Método para realizar búsqueda por título dentro de un state */
  const findByTitle = () => {
    WikidataSearchServices.findByTitle(searchTitle)
      .then((response) => {
        setVideogames(JSON.parse(response));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar algo..."
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              onClick={findByTitle}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <h4 className="align-title">Lista de Juegos</h4>
        <div className="card-body">
          <div className="col-lg-12">
            <div className="responsive-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> Título </th>
                    <th> ID</th>
                    <th> Page ID </th>
                    <th> URI </th>
                    <th> Descripción </th>
                    <th> Acciones </th>
                  </tr>
                </thead>
                <tbody>
                  {videogames.map((juego, i) => (
                    <tr key={i}>
                      <td> {juego.label} </td>
                      <td> {juego.id} </td>
                      <td> {juego.pageid} </td>
                      <td>
                        {" "}
                        <a href={juego.concepturi} target="_blank">
                          {juego.concepturi}
                        </a>
                      </td>
                      <td> {juego.description} </td>
                      <td>
                        <div className="buttons-flex">
                          <button
                            className="btn btn-danger btn-sm"
                            name={juego.id}
                            onClick={handleRemoveItem}
                          >
                            {" "}
                            Eliminar{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikidataList;
