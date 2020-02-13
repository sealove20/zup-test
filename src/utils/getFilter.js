export default function getFilter(users, where) {
  let res = [];
  if (where === "/lixeira") {
    return (res = users.filter(user => user.isTrash));
  } else if (where === "/atendidos") {
    return (res = users.filter(user => user.isAttended));
  } else {
    return users;
  }
}
