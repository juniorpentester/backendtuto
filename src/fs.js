const fs = require('node:fs/promises');
const path = require('node:path');
const { buffer } = require('node:stream/consumers');

//creation d'une function asynchrone

async function creeEcrire(){
    try {

        await fs.writeFile('./subfolder/journals.txt', 'i now grasp await!', 'utf8');
        console.log('successfully created and wrote to the journal.txt file!');

        //ajouter du contenu
        await fs.appendFile('./subfolder/journals.txt', 'i have taken a long time before understanding it.', 'utf8');
        console.log('appended successful at the end of journals.txt!')

        //now read what i wrote
        const pathObj = path.join(__dirname, './subfolder', 'journals.txt') // 
        const content = await fs.readFile(pathObj, buffer);
        console.log(`${content} 
Above are the lines i wrote and now reading.`);

}        
    catch (err) {
        console.error('failed: ', err.message);
        
    }
}
   
creeEcrire()

module.exports = creeEcrire;
/*const sayHi= () => {
    console.log('debut du programme');
}

sayHi()

readFile('./subfolder/asyncfile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return;
        }
console.log(data);
  
});

writeFile('./subfolder/writetofile.txt', '${try.txt}', 'utf8', (err,data) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});

console.log('fin du programme');

module.exports = { sayHi, readFile };*/