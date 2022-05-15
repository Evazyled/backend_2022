import { quadraticEquation } from "./solution/index.js";
import art from "ascii-art";
import colors from "colors";

let result = quadraticEquation(-1, 7, 8);

// art.font(result, "Doom", (err, rendered) => {
//   if (err) return;
//   console.log(rendered);
// });

console.log(result.blue);
