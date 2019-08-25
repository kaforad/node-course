const fs = require('fs');
const chalk =require('chalk');

const getNotes = function (){
    return "Your notes.....";
}

const addNote = function(title,body){
const notes = loadNotes();
const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const loadNotes = function(){
    try {
    const noteContent = fs.readFileSync('notes.json'); //readFileSync returns data buffer
    const contentToString = noteContent.toString();
    const contentToJson = JSON.parse(contentToString);
    return(contentToJson);

    } catch (error) {
        return [] ; //return empty array if  note/note content does not exist
    }

}

const saveNotes = function(notes){

    const jsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',jsonData);

}

const removeNote = function(title){
    console.log(`Remove Note By Title ${title}`);
    const getContent = loadNotes();
    const contentLength =  getContent.length;
    //return content without requested title to be removed
    const removeDuplicates =getContent.filter(function(data){

        return data.title !== title;
    });
// save content when a requested title exist
    if(removeDuplicates.length < contentLength){
        saveNotes(removeDuplicates);
        console.log(`Title:${title} removed!`);
    }
    else{
        console.log('Nothing Removed!');
    }
}


module.exports = {
    getNotes : getNotes,
    removeNote: removeNote,
    addNote:addNote,
};