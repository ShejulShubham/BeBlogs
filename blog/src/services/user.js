import axios from "axios";

export async function register(name, email, password, phone) {
  const body = {
    name,
    email,
    password,
    phone,
  };

  //make call to api
  const response = await axios.post(`http://localhost:4000/user/register`, body);

  return response.data;
}

export async function login(email, password) {
  const body = {
    email,
    password,
  };

  //make call to api
  const response = await axios.post(`http://localhost:4000/user/login`, body);

  return response.data;
}
