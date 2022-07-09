const createFile = require('./dist/fileWriter');
const indexGenerator = require('./dist/indexGenerator');
const engineer = require('./lib/Engineer');
const Engineer = engineer.Engineer;

const htmlPath = "./public/index.html";
const cssPath = "./public/assets/css/style.css";


// data must be an array of objects
createFile(htmlPath, indexGenerator(data));
createFile(cssPath, "hello world");