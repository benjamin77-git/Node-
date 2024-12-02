const fs = require("fs");
// fs.writeFile("message.txt", "You are about to get There", (err) => {
//   if (err) throw err;
//   console.log("The data has been saved");
// });
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
