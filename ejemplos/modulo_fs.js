const { error } = require('console');
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        console.log(data); // Mostrar Buffer
        callback(data.toString());// Mostrar Resultado
    })
}

function escribir(ruta, contenido) {
    fs.writeFile(ruta, contenido, function (error) {
        if (error) {
            console.error(`Error al escibir el archivo`+error)
        }
    })
}

//escribir(`${__dirname}/archivoTest.txt`, `Contenido inicial del archivo`)
leer(`${__dirname}/archivoTest.txt`, console.log);