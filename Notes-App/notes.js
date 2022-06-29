const fs = require("fs");

const getNotes = function () {
  return "your notes";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
};

const saveNotes = function (notes) {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = JSON.stringify(dataBuffer);
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
