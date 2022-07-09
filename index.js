const createFile = require('./dist/fileWriter');
const indexGenerator = require('./dist/indexGenerator');
const cssGenerator = require('./dist/cssGenerator');
const engineer = require('./lib/Engineer');
const Engineer = engineer.Engineer;

const htmlPath = "./public/index.html";
const cssPath = "./public/assets/css/style.css";
const data = [new Engineer({name: "mikey", id: "4", email: "mk@mc.com", github: "lunbmp"})];


// data must be an array of objects
createFile(htmlPath, indexGenerator(data));
createFile(cssPath, cssGenerator());