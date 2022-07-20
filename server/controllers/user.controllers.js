import { pool } from "../db.js";

export const crearUsuario = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [result] = await pool.query("SELECT * FROM usuario");
    const users = result.map((user) => user.username);
    const respuesta = users.some((nombre) => nombre === username);

    if (!respuesta) {
      const [result] = await pool.query(
        "INSERT INTO usuario(username, password) VALUES (?, ?)",
        [username, password]
      );
      res.status(200).send({
        id: result.insertId,
        username,
        password,
      });
    } else {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const LoginUsuario = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [result] = await pool.query("SELECT * FROM usuario");
    const users = result.map((user) => user.username);
    const existeusuario = users.some((nombre) => nombre === username);
    const rta = result.find((user) => user.username === username);
    console.log(rta);

    if (existeusuario) {
      res
        .send({
          message: { id_user: rta["id_user"], username: rta["username"] },
          code: 200,
        })
        .code(200);
    } else {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
