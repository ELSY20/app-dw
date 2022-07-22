import axios from "axios";

export const getActasRequest = async () =>
  await axios.get("http://localhost:4000/actas");

export const createActasRequest = async (props) =>
  await axios.post("http://localhost:4000/actas", props);
