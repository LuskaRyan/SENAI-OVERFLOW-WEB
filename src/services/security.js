import { api } from "./api";

const USER_KEY = "@user";

export const signIn = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  //Setando o token como padrão em todas as reqisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  localStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { student } = JSON.parse(localStorage.getItem(USER_KEY));

  return student;
};

export const isSignedIn = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  if (user && user.token) {
    //verificar se o token é valido

    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  }
  return false;
};
