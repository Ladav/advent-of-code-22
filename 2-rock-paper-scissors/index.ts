enum Move {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
}
const opponentMoves: Record<string, Move> = {
  A: Move.ROCK,
  B: Move.PAPER,
  C: Move.SCISSORS,
};
const ourMoves: Record<string, Move> = {
  X: Move.ROCK,
  Y: Move.PAPER,
  Z: Move.SCISSORS,
};
const movePoints: Record<Move, number> = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const input = await Deno.readTextFile("2-rock-paper-scissors/input.txt");

const rounds = input.split("\r\n");

let totalPoints = 0;

// ####### PART 1
// for (const round of rounds) {
//   const [opponentMove, ourMove] = round.split(" ");

//   totalPoints += movePoints[ourMoves[ourMove]];

//   // draw
//   if (opponentMoves[opponentMove] === ourMoves[ourMove]) {
//     totalPoints += 3;
//   }

//   // win
//   if (
//     [
//       opponentMoves[opponentMove] === Move.ROCK &&
//         ourMoves[ourMove] === Move.PAPER,
//       opponentMoves[opponentMove] === Move.PAPER &&
//         ourMoves[ourMove] === Move.SCISSORS,
//       opponentMoves[opponentMove] === Move.SCISSORS &&
//         ourMoves[ourMove] === Move.ROCK,
//     ].some(Boolean)
//   ) {
//     totalPoints += 6;
//   }
//   // loss will be 0 pts
// }

// ##### PART 2
const cheatSheet: Record<string, Record<string, Move>> = {
  // want to loss
  X: {
    // opponents move : our move
    A: Move.SCISSORS,
    B: Move.ROCK,
    C: Move.PAPER,
  },
  // want to draw
  Y: {
    // opponents move : our move
    A: Move.ROCK,
    B: Move.PAPER,
    C: Move.SCISSORS,
  },
  // want to win
  Z: {
    // opponents move : our move
    C: Move.ROCK,
    A: Move.PAPER,
    B: Move.SCISSORS,
  },
};

for (const round of rounds) {
  const [opponentMove, ourPlan] = round.split(" ");

  totalPoints += movePoints[cheatSheet[ourPlan][opponentMove]];
  // draw
  if (ourPlan === "Y") {
    totalPoints += 3;
  }

  // win
  if (ourPlan === "Z") {
    totalPoints += 6;
  }
  // loss will be 0 pts
}

console.log(totalPoints);
