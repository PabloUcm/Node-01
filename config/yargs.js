const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: false,
                    default: false
                })
                .option('e', {
                    alias: 'end',
                    type: 'number',
                    demandOption: false,
                    default: 10
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;


module.exports = argv;