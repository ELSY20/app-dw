import axios from "axios";

export const IniciarSesion = async (username, password) => {
  const rta = await axios.post("http://localhost:4000/login", {
    username,
    password,
  });
  console.log(rta);
};

(() => {
  IniciarSesion("matos", "1234");
})();
