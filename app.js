const argv = require('./config/yargs');
const { writeTable } = require('./tabla.js');


console.clear();
console.log(argv);

writeTable(argv.b, argv.l, argv.end)
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));