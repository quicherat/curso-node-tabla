
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta=10) => {    

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        let producto = base * i;
        salida += `${base} * ${i} = ${producto}\n`;
        consola += colors.rainbow(`${base} * ${i} = ${producto}\n`);
        
    };
     if (listar) {
        console.log(colors.brightWhite('=========================='));
        console.log(colors.red.bold('     Tabla del: ', base  ));
        console.log(colors.brightWhite('=========================='));
        console.log(consola);
     }

    try {
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
    
        //     console.log('tabla creada');
        // });
        const nombreArchivo = `./salida/tablaSync-${base}.txt`
        fs.writeFileSync(nombreArchivo, salida);    
        //console.log('tablaSync creada');
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo //Es equivalente a "crearArchivo: crearArchivo"
}