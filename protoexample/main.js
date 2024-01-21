const fs = require("fs");

const messages = [];

messages.push({
  name: "Sagar",
  age: 30,
  message: "Hi I tried calling you",
});

messages.push({
  name: "Sagar1",
  age: 31,
  message: "Hi I tried calling you1",
});

console.log("this is a test commit");
fs.writeFileSync("abc.json", JSON.stringify(messages));
