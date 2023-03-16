export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const capitalizeName = (str) => {
  return str
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");
};
