import art from "ascii-art";

art.font("backend", "Doom", (err, rendered) => {
  if (err) return;
  console.log(rendered);
});
