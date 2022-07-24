import axios from "axios";

export const getCompromisosRequest = async () =>
  await axios.get("http://localhost:4000/compromisos");

export const createCompromisosRequest = async (props) =>
  await axios.post("http://localhost:4000/compromisos", props);
