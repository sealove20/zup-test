export const getUsers = () =>
  fetch("https://randomuser.me/api/?nat=br&results=10")
    .then(res => res.json())
    .then(res => res);
