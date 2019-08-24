const chalk = require('chalk');
const  yargs =  require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
//  yargs.version('1.2.0');

// Create add command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })




// yargs.command ({
//     command :'list',
//     describe: 'List file content',
//     handler: function(){
//         console.log('List file content')
//     }
// }),

// yargs.command ({
//     command :'read',
//     describe: 'Reads file content',
//      builder:{
//          title:{
//              describe :'Note Title',
//          }

//     },
//     handler: function(argv){
//         console.log('Reads file content',argv);
//     },

// }),
yargs.command({
    command :'add',
    describe :'Add Notes',
    builder:{
        title:{
            describe:'Note Title',
            string:true,
            demandOption:true,
        },
        body:{
            describe:'Note Body',
            string:true,
            demandOption:true,
        }
    },
    handler: function(argv){
        console.log('Title:' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

yargs.parse()

