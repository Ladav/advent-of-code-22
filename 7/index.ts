const input = await Deno.readTextFile("7/input.txt");

const logs = input.split("\r\n");

const fileSystem: Record<string, any> = {};
let cursor = fileSystem;

for (const cmdLog of logs) {
  console.log(cmdLog);
  let isCommand = false;
  if (cmdLog.startsWith("$")) isCommand = true;

  if (isCommand) {
    const [cmd, ...args] = cmdLog.replace("$ ", "").split(" ");
    switch (cmd) {
      case "cd": {
        const dir = args[0];
        if (!dir) {
          throw new Error(`invalid dir received cmdLog:${cmdLog}`);
        }
        if (dir === "/") {
          fileSystem[dir] = {};
          cursor = fileSystem[dir];
        }
        if (dir === "..") {
          cursor = cursor[".."];
        } else {
          fileSystem[dir] = {};
          fileSystem[dir][".."] = cursor;
          cursor = fileSystem[dir];
        }
        break;
      }
      case "ls":
        break;
      default:
        throw new Error(`unknown cmd received cmdLog:${cmdLog}`);
    }
  } else {
    let isDir = false;
    if (cmdLog.startsWith("dir ")) isDir = true;

    if (isDir) {
      const dirName = cmdLog.split(" ")[1];
      if (!dirName) {
        throw new Error(`invalid dirName received cmdLog:${cmdLog}`);
      }
      cursor[dirName] = {};
    } else {
      const [size, fileName] = cmdLog.split(" ");
      if (!size) {
        throw new Error(`invalid size received cmdLog:${cmdLog}`);
      }
      if (!fileName) {
        throw new Error(`invalid fileName received cmdLog:${cmdLog}`);
      }

      cursor[fileName] = +size;
    }
  }
}

console.log(JSON.stringify(fileSystem, null, 2));
