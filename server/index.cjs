//Arranca servidor


// ------------------------------------------------------------------------
//                  Llamada de Modelos
// ------------------------------------------------------------------------
const DB = require('./db.cjs');
const app = require('./app.cjs')

app.listen(5000)
console.log("Server on port ", 5000)



