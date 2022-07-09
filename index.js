const createFile = require('./dist/fileWriter');

const htmlPath = "./public/index.html";
const cssPath = "./public/assets/css/style.css"; 

createFile(htmlPath, "hello world");
createFile(cssPath, "hello world");