const chalk = require("chalk");
const fs = require("fs");
//const { title } = require("process");

const getNotes = () => {
  return "Getting notes";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateTitle = notes.filter((note) => note.title === title);
  if (duplicateTitle.length == 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("Note added"));
  } else {
    console.log(chalk.red("not added"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToTake = notes.filter((note) => note.title !== title);
  console.log(notes.length, notesToTake.length);
  if (notes.length > notesToTake.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToTake);
  } else {
    console.log(chalk.red.inverse("Not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
};
