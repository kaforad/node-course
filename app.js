const yargs = require('yargs');
const notes = require('./notes.js');
//remove command
yargs.command({
    command :'remove',
    describe:'Remove object by Title',
    builder:{
        'title':{
            'demandOption':true,
            'string':true,
            'describe':'Data Key Title',
        },
    },
    handler:function(argv){
      notes.removeNote(argv.title);

    }

});


yargs.command({
    command :'add',
    describe:'Add a new note',
    builder:{
        'title':{
            'demandOption':true,
            'string':true,
            'describe':'Note Title',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title, argv.body)

    }

});

yargs.parse();