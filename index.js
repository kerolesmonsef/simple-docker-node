// basic express app
const express = require('express');
const app = express();
const port = 3000;
// const fs = require('fs');


app.get('/', (req, res) => {
  // read file called file.txt and res.send file content
  console.log ("hello world");
  // const fileContent = fs.readFileSync('file.txt', 'utf-8');
  res.send("hello world");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}! http://localhost:${port}`);
});