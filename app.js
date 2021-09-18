/*
const getmultiplicacion = (i) =>{

    
    let res = 0;
   
    for(let num = 1;num <= 10 ;++num) {
        res = i + res;
        console.log(`${i} x ${num} = ${res}`) ;      
    };   
};

getmultiplicacion(5);*/

const { crearArchivo } =  require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);

//console.log(argv);


//console.log(base);
crearArchivo( argv.b , argv.h , argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
