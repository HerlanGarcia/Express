import { db } from "../config/database";

const  eliminarUsuarios = async (req, res) =>{
    try{
        await db.user.destroy({
            where : { id: req.params.id},
        });
        res.status(200).send ({ message:"ok"});
    } catch (error) {
        res.status(500).send(error.message);
    }
}



//actualizar usuarios
const actualizarUsuarios = async (req, res ) => {
    try{
        await db.user.update(
            {
                title: req.body.title,
                description: req.body.description,
                published: req.body.published
            },
            {
                where:{ id:req.params.id}
            }
        );
        res.status(200).send({
            message: "modificado satisfactoriamente",
        });
    } catch(error){
        res.status(200).send({
            message: error.message,
        });
    }
   
};

//Mostrar usuarios
const mostrarUsuarios = async (req, res) => {
    try{
        const results = await db.user.findALll();
        res.status(200).send(results);
    } catch (error){
        res.status(200).send({
            message: error.message,
        });
    }
};

//insertar usuarios
const insertarUsuarios = async (req, res) =>{
    try{
        await db.user.create({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published,
        });
        res.status(200).send({
            message: "Registrado satisfactoriamente",
        });
    } catch (error){
        res.status(500).send({
            message: error.message,
        });
    }
};















const bloquearUsuarios = async (req, res ) => {
    console.log("estas bloqueando usuario");
    res.status(200).send({
        message: 'estas bloqueando usuario'
    });
}

const copiarUsuarios = async (req, res ) => {
    console.log("estas copiando un usuario");
    res.status(200).send({
        message: 'estas copiando un usuario'
    });
}

const opcionesUsuarios = async (req, res ) => {
    console.log("estas entrando a opciones de usuario");
    res.status(200).send({
        message: 'estas entrando a opciones de usuario'
    });
}

const desbloquearUsuarios = async (req, res ) => {
    console.log("estas eliminando un usuario");
    res.status(200).send({
        message: 'estas eliminando un usuario'
    });
}

export{
    eliminarUsuarios,
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    bloquearUsuarios,
    copiarUsuarios,
    opcionesUsuarios,
    desbloquearUsuarios
}