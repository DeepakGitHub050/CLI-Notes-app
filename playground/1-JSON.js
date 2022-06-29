const fs = require("fs");
const book = {
  title: "Ramdas",
  author: "Binkahal baba",
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-JSON.json", book);

//const data = fs.readFileSync("1-JSON.json").toString();
//console.log(JSON.parse(data).title);
