const input = await Deno.readTextFile("6/input.txt");

for (let i = 0; i < input.length; ++i) {
  const subString = input.substring(i, i + 14);

  let found = true;
  subString.split("").forEach((char) => {
    const occurrences = subString
      .split("")
      .map((i) => i === char)
      .filter(Boolean).length;
    if (occurrences > 1) {
      found = false;
    }
  });

  if (found) {
    break;
  }
}
