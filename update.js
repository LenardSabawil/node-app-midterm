const fs = require('fs')
const update = function(id,oldNote){
  const note = JSON.parse(oldNote)

  const newNote = note.map(function(n,i) 
  {
    if(n.id = note.id)  {
      n.title = note.title
      n.body = note.body

      return n.id == id
    }
  })
  fs.writeFileSync('./note.txt', JSON.stringify(newNote))

  }

  module.exports = update