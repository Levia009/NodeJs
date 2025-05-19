//LLamado y inicializacion de las dependencias
const express = require('express');//Se incluye el framework Express
const morgan = require('morgan');
const bodyPerser = require('body-parser');
const app = express();//Instancia de express

//Configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyPerser.urlencoded({ extended: false }));//Para recibor datos por POST
app.use(bodyPerser.json());//Para resivir formato Json

//Configuracion del api
// app.get('/', (req, res) => {
//     res.send({
//         status: 200,
//         message: `Hello API - NodeJs`
//     });
// })

// app.get('/saludo', (req, res) => {
//     res.send({
//         status: 200,
//         message: `Hello World - NodeJs`
//     });
// })

// app.post('/testNewUser', (req, res) => {
//     console.log(req.body);
//     const { nombre, email, direccion, empresa} = req.body;
//     console.log(`Nombre: ${nombre}`);
//     console.log(`Email: ${email}`);
//     console.log(`Direccion: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);
//     res.send({
//         status: 201,
//         message: `Usuario creado exitosamente - NodeJs`
//     });
// })
app.use('/api/v1/users', require('./api/v1/routes/users.routes'));

//Se inicia el server en el puerto 4000
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')} ✈️  🏢🏢 = 💥🏢`);
});