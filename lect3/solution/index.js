import readline from "readline";
import fs from "fs";
import path from "path";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("whats up?", (answer) => {
//   console.log(`Answer:${answer}`);
//   rl.close();
// });
const resultPath = path.join(path.dirname(process.argv[1]), "roots.txt");
// fs.unlinkSync(resultPath);
let a, b, c;

// function callbackForA(answer) {
//   a = answer;
//   rl.question("Enter b ", callbackForB);
// }

// function callbackForB(answer) {
//   b = answer;
//   rl.question("Enter c ", callbackForC);
// }

// function callbackForC(answer) {
//   c = answer;
//   quadraticEquation(a, b, c);
//   process.exit(0);
//   rl.close();
// }

export function quadraticEquation(a, b, c) {
  let d = Math.sqrt(+b * +b - 4 * +a * +c);

  console.log("Дискриминант = ", +d);
  let result;
  const opts = { flag: "a" };

  if (d > 0) {
    let x1 = (-b + d) / (2 * a);
    let x2 = (-b - d) / (2 * a);
    console.log(`X1 = ${x1}, X2 = ${x2}`);
    result = `При a=${a}, b=${b}, c=${c} X1 = ${x1}, X2 = ${x2} \n`;
  } else if (d === 0) {
    let x = -b / (2 * a);
    console.log(`x = ${x}`);
    result = `При a=${a}, b=${b}, c=${c} x = ${x} \n`;
  } else {
    console.log("нет корней");
    result = `При a=${a}, b=${b}, c=${c} - корней нет \n`;
  }
  fs.writeFileSync(resultPath, result, opts);
  console.log(a, b, c);
  rl.close();
  return result;
}

// rl.question("Enter a ", callbackForA);
