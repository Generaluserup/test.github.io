var mr = require ('mrcolor');
mr.take (8) .forEach (function (color) {
    console.log ('rgb (' + color.rgb (). join (',') + ')');
});
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');
const say = require('say');
say.speak("HOHOHO", 1)
console.log(colors.rainbow("OMG it's amaizin"));
const filename = 'Test.css';
function task3(file) {
    let fullpath = __dirname + "\\" + filename;
    console.log(fullpath);
    console.log(path.basename('C:\\Users\\mikan\\Desktop\\Test\\JS\\pz_2.13.js'));
    console.log(os.platform());
}
task3(filename);
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function task4() {
    console.log("play in orel or reshka");
    console.log("enter 1 or 2");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('', (answer) => {
        const monetka = getRandomInt(2)+1;
        console.log(monetka);
        monetka==answer? console.log('you win') : console.log('you lose');
        rl.close();
    });
}
task4();