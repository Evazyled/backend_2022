import * as http from "http";

let field = [
  ["X", "", ""],
  ["", "X", "0"],
  ["", "X", ""],
];

const srv = new http.Server((req, res) => {
  const { method, url } = req;
  if (method == "GET" && url == "/field") {
    res.end(JSON.stringify(field));
  } else if (method == "POST" && url == "/field/clean") {
    field = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    res.end("field clean");
  } else if (method == "POST" && url == "/field/makeMove") {
    let dataArr = [];
    req.on("data", (chunk) => {
      dataArr.push(chunk);
    });
    req.on("end", () => {
      const dataStr = Buffer.concat(dataArr).toString();
      const data = JSON.parse(dataStr);
      console.log("dataStr", dataStr);
      field[data.x][data.y] = data.player;
      res.end("move");
    });
    process.on("uncaughtException", function (err) {
      console.log("Caught exception: ", err);
    });
  } else {
    res.statusCode = 404;
    res.end("not found");
  }
});

srv.listen(2000);
