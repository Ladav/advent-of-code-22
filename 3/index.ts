// PART 1
// const input = await Deno.readTextFile("3/input.txt");

// const sacks = input.split("\r\n");

// const sharedItems: Record<string, number> = {};

// const pr: Record<string, number> = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26,
//   A: 27,
//   B: 28,
//   C: 29,
//   D: 30,
//   E: 31,
//   F: 32,
//   G: 33,
//   H: 34,
//   I: 35,
//   J: 36,
//   K: 37,
//   L: 38,
//   M: 39,
//   N: 40,
//   O: 41,
//   P: 42,
//   Q: 43,
//   R: 44,
//   S: 45,
//   T: 46,
//   U: 47,
//   V: 48,
//   W: 49,
//   X: 50,
//   Y: 51,
//   Z: 52,
// };

// for (const sack of sacks) {
//   const [first, sec] = [
//     sack.substring(0, sack.length / 2),
//     sack.substring(sack.length / 2),
//   ];
//   // console.log(first, sec);
//   const seen: string[] = [];
//   for (const char of first) {
//     if (sec.includes(char) && !seen.includes(char)) {
//       seen.push(char);
//       // console.log(char);
//       sharedItems[char] = (sharedItems[char] || 0) + 1;
//     }
//   }
// }
// // console.log(sharedItems);

// const ans = Object.entries(sharedItems).reduce((acc, [char, freq]) => {
//   const code = pr[char];
//   // console.log(code);
//   return acc + code * freq;
// }, 0);

// console.log(ans);

// ### PART 2
const input = await Deno.readTextFile("3/input.txt");

const sacks = input.split("\r\n");

const sharedItems: Record<string, number> = {};

const pr: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

for (let i = 0; i < sacks.length; i += 3) {
  const first = sacks[i];
  const sec = sacks[i + 1];
  const third = sacks[i + 2];
  for (const char of first) {
    if (sec.includes(char) && third.includes(char)) {
      sharedItems[char] = (sharedItems[char] || 0) + 1;
      break;
    }
  }
}
// console.log(sharedItems);

const ans = Object.entries(sharedItems).reduce((acc, [char, freq]) => {
  const code = pr[char];
  // console.log(code);
  return acc + code * freq;
}, 0);

console.log(ans);
