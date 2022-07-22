import React from 'react'

const Compromiso = () => {
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
              {actas?.map((e) => (
                <tr key={e.id_compromiso}>
                  <td>{e.id_compromiso}</td>
                  <td className="desc">{e.description}</td>
                  <td>{e.createAt}</td>
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

          <div className="input">
            <label htmlFor="">Fecha Finalizacion</label>
            <input
              type="text"
              placeholder=""
              value={fecha_finalizacion}
              onChange={(e) => setFecha_Finalizacion(e.target.value)}
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

        </form>
        <div className="modal_footer">
          <button className="btn" onClick={submitCreateHandler}>
            <h2>Guardar</h2>
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Compromiso