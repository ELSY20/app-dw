import { useEffect, useState } from "react";
import { createActasRequest, getActasRequest } from "../api/actas.api";
import "../styles/homepage.css";

const Homepage = () => {
  const [actas, setActas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [descripcion, setDescripcion] = useState("");
  const [asunto, setAsunto] = useState("");
  const [fecha, setFecha] = useState("");
  const [responsable, setResponsable] = useState("");
  const [id_programa, setIdPrograma] = useState("");

  const submitCreateHandler = (e) => {
    e.preventDefault();
    createActasRequest({
      asunto,
      descripcion,
      responsable,
      fecha,
      id_programa,
    });
    setOpenModal(false);
    window.location.reload();
  };

  useEffect(() => {
    async function loadActas() {
      const response = await getActasRequest();
      const { data } = response;
      setActas(data);
    }

    loadActas();
  }, []);

  console.log(id_programa);

  return (
    <>
      <div className="homepage">
        <div className="container-homepage">
          <div className="header-homepage">
            <h2>TABLA DE ACTAS</h2>
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
                  <th>Asunto</th>
                  <th className="desc">Desccripcion</th>
                  <th>Responsable</th>
                  <th>Fecha</th>
                  <th>Id programa</th>
                  <th>Registrar Compromiso</th>
                </tr>
              </thead>
              <tbody>
                {actas?.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.asunto}</td>
                    <td className="desc">{e.descripcion}</td>
                    <td>{e.responsable}</td>
                    <td>{e.fecha}</td>
                    <td>{e.id_programa}</td>
                    <td>
                      <a href="#">Ir a registar comprimiso</a>
                    </td>
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
            <h2 className="titlemodal">Crear Acta</h2>
            <button
              className="modal-close"
              onClick={() => setOpenModal(!openModal)}
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          <form action="" className="form_items">
            <div className="input">
              <label htmlFor="">Asunto</label>
              <input
                type="text"
                placeholder=""
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="">Descripcion</label>
              <input
                type="text"
                placeholder=""
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="">Responsable</label>
              <input
                type="text"
                placeholder=""
                value={responsable}
                onChange={(e) => setResponsable(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="">Fecha</label>
              <input
                type="text"
                placeholder=""
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="input-select-expense">
              <select onChange={(e) => setIdPrograma(e.target.value)}>
                <option value="#">Elige un Programa</option>
                <option value={1}>Informatica</option>
                <option value={2}>Ing software</option>
                <option value={3}>Bacteriologia</option>
                <option value={4}>Matematicas</option>
              </select>
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

export default Homepage;
