const priya = 'Asif Akbar';
const meye = "Meye tumi ki dokko chino";
//backtick quote 
const kobita = `kobita tumi sopno charini`;

//example of oldschool multiline system
const multiline = 'this is my first line. \n' +
    'this is my second line. \n' +
    'this is my third line. \n' +
    'this is my fourth line.\n';

//example of new multiline system on es6;
const newMultiline = `This is my first new line. 
This is my second new line.
This is my thrid new line.
This is my fourth new line.`;

//more example about backtick;
//string er modde variable er name diye variable er man boshanoke string interpolation bole.
//oldschool system;
const fnCount = 5;
const old = '<h3 class="friend-name">friend-5</h3>'
const old2 = '<h3 class="friend-name">friend-' + fnCount + '</h3>';
//new system
const new1 = ` <h3 class="friend-name">friend-${fnCount}</h3>`;
//=========================
//more about string interpolation
//template literals string er bitore iccemoto javaScript er code(expression) likte parbo.
const first = 'Mamun';
const last = 'Chowdhury';
const fullNameOldSys = 'This person name is: ' + first + ' ' + last;
const fullNameNewSys = `This is person name is: ${first} ${last}. He lives in Dhaka.`;

