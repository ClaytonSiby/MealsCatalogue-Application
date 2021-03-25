export const truncate = (str, num) => {
  return str.length <= num ? str : `${str.slice(0, num)}. . .`
}
