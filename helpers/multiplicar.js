const fs = require ('fs');
const clrs = require('colors');

let msj = '';
let consola = '';

const crearArchivo = async ( base = 5, hasta = 10 , listar = false) => {
    try{
        console.log('================'.bgGreen.black);
        console.log('  Tabla del: '.green,clrs.blue(base));
        console.log('================'.bgGreen.black);

        for (let i = 1; i <=hasta; ++i){
            msj += `${ base } x ${i} = ${ base * i} \n`;
            consola += (`${ base } x ${i} = ${ base * i} \n`).rainbow;
        };

        if(listar){
            console.log(consola);
        };

        fs.writeFileSync( `./salida/Tabla_del_${ base }.txt`, msj);
        
        return(`Tabla_del_${ base }.txt fue creado!`);
    
    }catch(err){
        throw(err);
    }    
    
};

// const crearArchivo = ( base = 5) => {
//     console.log('================');
//     console.log(`  Tabla del ${base}  `);
//     console.log('================');

//     return new Promise((resolve, reject) =>{
//         for (let i = 1; i <=10; ++i){
//             msj += (`${ base } x ${i} = ${ base * i} \n`);
//         };
        
//         const archivo = fs.writeFileSync( `Tabla_del_${ base }.txt`, msj);
        
//         (archivo)
//             ? resolve(`Tabla_del_${ base }.txt fue creado!`)
//             : reject (`No se pudo crear el archivo: Tabla_del_${ base }.txt`);
//     });
// };



module.exports = {
    crearArchivo
}