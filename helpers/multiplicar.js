const fs = require('fs')
let colors = require('colors');

/*const crearArchivo = (base = 5 ) => {

    let salida = '';
    
    for (let i = 1; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
    }
    
    console.log(salida);
    
    fs.writeFileSync( `tabla-${base}.txt`, salida)
    
    console.log('Archivo Creado')

}*/


/*Solución 1
const crearArchivo = (base ) => {

    return new Promise ( (resolve, reject) => {

        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync( `tabla-${base}.txt`, salida)
        
        resolve(`tabla-${base}.txt`)
    })
}*/

//Solución 2
const crearArchivo = async (base, bandera, hasta ) => {

    console.log(base);
    console.log(bandera);
    console.log(hasta);
   
    try{

        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        
        if(bandera)
            console.log(salida.rainbow);
        else
            console.log('Bandera en falso')
        
        fs.writeFileSync( `./Salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt`;

    }catch(error){
        throw error;
    }

}

module.exports = {
    crearArchivo
}