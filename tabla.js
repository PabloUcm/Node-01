const fs = require('fs');

const writeTable = async(base,list,end) => {
    let table = `===================\n  Tabla del ${base}\n===================`;

    for(let i = 1; i <= end; i++){
        table += `\n ${base} x ${i} = ${base * i}`;
    }

    try {
        fs.writeFileSync(`./salida/table-${base}`,table);
        if(list) console.log(table);
        return `Table of ${base} write with exit`;
    } catch (error) {
        throw new Error(`Table of ${base} cannot be writen`);
    }
}

module.exports = {
    writeTable
}