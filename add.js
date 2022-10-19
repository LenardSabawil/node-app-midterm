const fs = require('fs')
const add = function(note,oldNote){
  //parse oldNote from string to object of arrays
  const newNote = JSON.parse(oldNote)

  //add new note to oldNote
  newNote.push(note)

  //save new note to notee.txt again
  fs.writeFileSync('note.txt',JSON.stringify(newNote))
}

module.exports = add

