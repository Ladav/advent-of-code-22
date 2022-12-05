const input = await Deno.readTextFile("5/input.txt");

const moves = input.split("\r\n");

const stacks = [
  ["N", "W", "B"].reverse(),
  ["B", "M", "D", "T", "P", "S", "Z", "L"].reverse(),
  ["R", "W", "Z", "H", "Q"].reverse(),
  ["R", "Z", "J", "V", "D", "W"].reverse(),
  ["B", "M", "H", "S"].reverse(),
  ["B", "P", "V", "H", "J", "N", "G", "L"].reverse(),
  ["S", "L", "D", "H", "F", "Z", "Q", "J"].reverse(),
  ["B", "Q", "G", "J", "F", "S", "W"].reverse(),
  ["J", "D", "C", "S", "M", "W", "Z"].reverse(),
];

for (const move of moves) {
  const [, toBeMoved, , fromIdx, , toIdx] = move.split(" ");

  // PART 1
  // for (let i = 0; i < +toBeMoved; i++) {
  //   const el = stacks[+fromIdx - 1].pop();
  //   if (el) {
  //     stacks[+toIdx - 1].push(el);
  //   }
  // }

  // PART 2
  const els = [];
  for (let i = 0; i < +toBeMoved; i++) {
    const el = stacks[+fromIdx - 1].pop();
    if (el) els.push(el);
  }
  stacks[+toIdx - 1].push(...els.reverse());
}

console.log(stacks);
