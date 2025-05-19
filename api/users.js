const { where } = require('sequelize');
const db = require('../models');
const { Router } = require('express');
//Creamos el router para poder usar los verbos HTTP
const router = Router();//Llamamos al metodo Router de Express

// req => request => En request llegan los datos del body
// res => response => Se envia los datos hacia al cliente
router.get("/", (req, res) => {
    res.send({Title:'Hello ADSO!'});
});

module.exports = router;

router.post('/new', async (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try{
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(400).send('El Usuario no pudo ser creado');
    }
});

router.get('/all', async (req, res) => {
    try{
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(200).send('No se pudieron obtener los usuarios');
    }
})

router.delete('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        await db.User.destroy({
            where:{
                id,
            }
        });
        res.status(200).send('Usuario eliminado correctamente');
    } catch (error) {
        res.status(200).send('No se pudo eliminar el usuario');
    }
})
