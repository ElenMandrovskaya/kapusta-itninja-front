import axios from "axios";

axios.defaults.baseURL = "https://kapusta-finance-tracker.herokuapp.com";

export async function signUp(credentials) {
  const data = await axios.post(`/api/user/signup`, credentials);
  return data;
}

export async function signIn(credentials) {
  const data = await axios.post(`/api/user/login`, credentials);
  return data;
}

export async function getCurrentUser() {
  const data = await axios.get(`/api/user/current`);
  return data;
}

export async function signOut() {
  const data = await axios.get(`/api/user/logout`);
  return data;
}

export async function googleAuth() {
  const data = await axios.get(`/api/user/google`);
  console.log(data);
  return data;
}

// GET:/user/google - зарегистрировать/залогинить нового пользователя через гугл
// редиректит по ссылке FRONTEND_URL/?token=”userToken”&email=”test@gmail.com”
