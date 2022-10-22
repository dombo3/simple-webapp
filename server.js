const { readFileSync, writeFileSync } = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const count = readFileSync(`${__dirname}/count.txt`);
  console.log("count: ", parseInt(count));
  const newCount = parseInt(count) + 1;
  writeFileSync(`${__dirname}/count.txt`, String(newCount));

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=devide-width, inital-scale=1" />
      <title>RPi Hosted Website</title>
    </head>
    <body>
      <h1>Welcome to my RPi website!</h1>
      <p>This Page has been viewed ${newCount} times!</p>
    </body>
  </html>
  `);
});

app.listen(5000, () => {
  console.log(`http://localhost:5000/`);
});
