const read = require('./read')
const add = require('./add')
const del = require('./del')
const update = require('./update')

//get user input


const cmd = process.argv

if(cmd[2] ==="add"){
  //build the object
  const note = {
    "id":cmd[3],
    "title":cmd[4],
    "body":cmd[5]
  }

  //get note.txt contents
  const oldNote = read()

  //add note to note.txt
  add(note,oldNote)
}

if(cmd[2]==='read'){ //read
  console.log(read())
}

if(cmd[2]==="delete"){
  const id=cmd[3]
  const oldNote=read()
  const del=require('./del')
  //delete an item from note array
  del(id,oldNote)
  console.log(read())
}

if(cmd[2]==="update") {
  const id=cmd[3]
  const oldNote=read()
  const update=require('./update')
  //delete an item from note array
  update(id,oldNote)
  console.log(read())
}