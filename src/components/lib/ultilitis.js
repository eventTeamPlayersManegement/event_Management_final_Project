export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const capitalizeName = (str) => {
  return str
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");
};
// export const capitalizeSentence = (str) => {
//   return str.split(".").map((el)=>{console.log(el)})
// console.log(capitalizeSentence("zukgafkahwe. ushefslekuh. skujhfeliu"))
