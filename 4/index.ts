const input = await Deno.readTextFile("4/input.txt");

const sections = input.split("\r\n");

let total = 0;

for (let sec of sections) {
  const [f, s] = sec.split(",");
  const [f1, f2] = f.split("-");
  const [s1, s2] = s.split("-");
  // PART 1
  // if ((+f1 <= +s1 && +f2 >= +s2) || (+s1 <= +f1 && +s2 >= +f2)) {
  // PART 2
  if (
    (+f1 <= +s1 && +f2 >= +s1) ||
    (+f1 <= +s2 && +f2 >= +s2) ||
    (+s1 <= +f1 && +s2 >= +f1) ||
    (+s1 <= +f2 && +s2 >= +f2)
  ) {
    total++;
  }
}
console.log(total);
