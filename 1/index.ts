const input = await Deno.readTextFile("./1/input.txt");

const elves = input.split("\r\n\r\n");

let elveCallories: number[] = [];

for (const elve of elves) {
  elveCallories.push(sum(elve));
}

elveCallories = elveCallories.sort((a, b) => a - b);
console.log(
  elveCallories
    .slice(elveCallories.length - 3)
    .reduce((acc, num) => acc + (+num ?? 0), 0)
);

// helper functions
function sum(numbersString: string): number {
  const numbers = numbersString.split("\r\n");
  return numbers.reduce((acc, num) => acc + (+num ?? 0), 0);
}
