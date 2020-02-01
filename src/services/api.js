export const getUsers = () =>
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(res => res);
