const fs = require('fs');
// fs.writeFileSync('notes.txt','My  name is Oyedoyin Agbaje');
let fd;
try{
    fd = fs.openSync('notes.txt','a');
    fs.appendFileSync(fd,'')
    fs.appendFileSync(fd,'I was born in october','utf8');

}catch(err){
    console.log(err);

}finally{
    if(fd!==undefined)
        fs.closeSync(fd);
}
