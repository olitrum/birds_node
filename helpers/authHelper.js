export const getToken = () => {
  const token = localStorage.getItem("token");
  alert(token);
  return token;
};
export const setToken = token => {
  localStorage.setItem("token", token);
};

