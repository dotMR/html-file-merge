var jsdom = require("jsdom").jsdom;
var fs = require('fs');

var header = fs.readFileSync('header.html', 'utf8');
var main = fs.readFileSync('main.html', 'utf8');
var footer = fs.readFileSync('footer.html', 'utf8');

var document = jsdom(main);
var window = document.createWindow();
var $ = require('jquery').create(window)

console.log('---- main doc  ----');
console.log(window.document.innerHTML);
console.log('---- header ----');
console.log(header);
console.log('---- footer ----');
console.log(footer);
console.log('---- merged doc ----');

$('.main-body').before(header);
console.log(window.document.innerHTML);

$('.main-body').after(footer);
console.log(window.document.innerHTML);

fs.writeFileSync('index.html', window.document.innerHTML, 'utf-8');
