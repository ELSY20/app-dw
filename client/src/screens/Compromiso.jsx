import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActasRequest } from "../api/actas.api";
import {
  createCompromisosRequest,
  getCompromisosRequest,
} from "../api/compromisos.api";
import "../styles/compromisos.css";
import TimeAgo from 'timeago-react';
import { TimeFormat } from "../utils/TimeFormat";




const Compromiso = () => {
  // Traer el responsable desde la base de datos
  const [actas, setActas] = useState([]);
  const respon = actas.map((acta) => acta.responsable);

  const [openModal, setOpenModal] = useState(false);

  //Traer compromisos existentes en base de datos
  const [compromisos, setCompromisos] = useState([]);

  // Proceso de creacion del compromiso
  const [description, setDescription] = useState("");
  const [responsable, setResponsable] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const submitCreateHandler = (e) => {
    e.preventDefault();
    createCompromisosRequest({
      description: description,
      responsable: responsable,
      fecha_finalizacion: fechaFinal,
    });
    setOpenModal(false);
  };

  useEffect(() => {
    async function loadActas() {
      const response = await getActasRequest();
      const { data } = response;
      setActas(data);
    }

    async function loadCompromisos() {
      const rta = await getCompromisosRequest();
      const { data } = rta;
      setCompromisos(data);
    }

    loadCompromisos();

    loadActas();
  }, []);

  console.log("aqui", compromisos);
  return (
    <>
      <div className="homepage">
        <div className="container-homepage">
          <div className="header-homepage">
            <h2>TABLA DE COMPROMISOS</h2>
            <button
              className="button-addactas"
              onClick={() => setOpenModal(!openModal)}
            >
              Crear Actas
            </button>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th className="desc">Descripcion</th>
                  <th>Fecha Inicial</th>
                  <th>Fecha Finalización</th>
                  <th>Responsable</th>
                </tr>
              </thead>
              <tbody>
                {compromisos?.map((e) => (
                  <tr key={e.id_compromiso}>
                    <td>{e.id_compromiso}</td>
                    <td className="desc">{e.description}</td>
                    <td>{TimeFormat(e.createAt)}</td>
                    <td>{e.fecha_finalizacion}</td>
                    <td>{e.responsable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={openModal ? "openModal" : "closeModal"}>
        <div className="modal">
          <div className="modal_header">
            <h2 className="titlemodal">Crear Compromiso</h2>
            <button
              className="modal-close"
              onClick={() => setOpenModal(!openModal)}
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          <form action="" className="form_items">
            <div className="input">
              <label htmlFor="">Descripcion</label>
              <input
                type="text"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="input-select">
              <select onChange={(e) => setResponsable(e.target.value)}>
                <option value="#">Responsable</option>
                {respon.map((res) => (
                  <option value={res}>{res}</option>
                ))}
              </select>
            </div>

            <div className="input">
              <label htmlFor="">Fecha final</label>
              <input
                type="text"
                placeholder="yyyy-mm-aa"
                value={fechaFinal}
                onChange={(e) => setFechaFinal(e.target.value)}
              />
            </div>
          </form>
          <div className="modal_footer">
            <button className="btn" onClick={submitCreateHandler}>
              <h2>Guardar</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compromiso;
