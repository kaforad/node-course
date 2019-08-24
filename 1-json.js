//Kaforad
const fs = require('fs');
const  yargs =  require('yargs');
const bufferNoteContent = fs.readFileSync('1-json.json');
const dataToString =  bufferNoteContent.toString();
var fileOutput = JSON.parse(dataToString);
var filePlanet = fileOutput.planet;


yargs.command({
    command: 'writefile',
    describe:'Replace 1-json.json file content',
    builder : {
      'name':{
          'demandOption':true,
          'string':true,
          'describe':'Type in your name',
      },
      'age':{
          'demandOption':true,
          'number':true,
           'describe':'Type in your age',
      },
      'planet':{
            'string':true,
            'describe':'Type your Planet',
      }
    },
    handler:function(argv){

       fileOutput.name = argv.name;
       fileOutput.age = argv.age;

       if(typeof argv.planet =='undefined'){
           fileOutput.planet =  filePlanet;
       }else{
           fileOutput.planet = argv.planet;
       }


        var jsonObj = JSON.stringify(fileOutput);
        console.log(jsonObj);



        fs.writeFileSync('1-json.json',jsonObj,(err) => {
            if(err) throw err;
        });

        console.log("File content updated");


    },
});
 yargs.parse();


