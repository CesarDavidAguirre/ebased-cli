const fs = require('fs');

// creo estructura de carpetas
const directories = ["./domain","./handler","./schema","./schema/input","./schema/output","./service"]

directories.forEach(folder => {
    if(!fs.existsSync(folder)) fs.mkdirSync(folder)
});



// proximamente se agregara la coleccion de templates

// const dataTemplate = [
//     [ "tHandler.js" , "./handler" ],
//     [ "tDomain.js"  , "./domain"  ]
// ]

// nombre del nuevo elemento pasado por parametro
const nameElement = process.argv[2]
// saco donde esta el directorio del newElement.js
var path =  process.argv[1] + ""
path = path.substring(0 , path.length -13 )
// templorales para probar funcionamiento
const filesTemplate = "tHandler.js"
const pathToFile = "./handler" 

// remplazo nombre en el del template y genero el js para referenciarse entre los templates
fs.readFile(path+"template/"+filesTemplate, 'utf8', function (err,data) { 
    if (err) { 
    return console.log(err); 
    } 
    var result = data.replace(/XXX/g, nameElement); 

    fs.writeFile(pathToFile+"/"+nameElement+".js", result, 'utf8', function (err) { 
    if (err) return console.log(err); 
    }); 
}); 