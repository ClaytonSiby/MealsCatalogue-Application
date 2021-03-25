export const truncate = (str, num) => (str.length <= num ? `${str}` : `${str.slice(0, num)}. . .`);
