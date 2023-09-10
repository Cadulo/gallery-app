//App configura servidor
// ------------------------------------------------------------------------
//                  Importacion de dependencias
// ------------------------------------------------------------------------
const express = require('express');
const morgan = require('morgan'); //Permite ver peticiones que llegan al back

const cookieParser = require('cookie-parser') // Permite leer cookies
const cors = require('cors') // Permite comunicacion entre dominios

const authController = require('./controllers/auth.controller.cjs')
const imageController = require('./controllers/images.controller.cjs')
const orderController = require('./controllers/order.controller.cjs')
const adminController = require('./controllers/admin.controller.cjs')

const app = express();
app.use(morgan('dev')); //Muestra mensaje corto por consola
app.use(express.json({ limit: '10mb' })); //Permite leer en formato json
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });


app.use('/api', authController);
app.use('/api', imageController);
app.use('/api', orderController);
app.use('/api', adminController);

module.exports=app;