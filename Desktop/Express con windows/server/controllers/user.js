const mostrarUsuarios = async (req, res ) => {
    console.log("hola mundo");
    res.status(200).send({
        message: 'hola mundo'
    });
}

const insertarUsuarios = async (req, res ) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}

const actualizarUsuarios = async (req, res ) => {
    console.log("estas actualizando un usuario");
    res.status(200).send({
        message: 'estas actualizando un usuario'
    });
}

const eliminarUsuarios = async (req, res ) => {
    console.log("estas eliminando un usuario");
    res.status(200).send({
        message: 'estas eliminando un usuario'
    });
}




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
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
    bloquearUsuarios,
    copiarUsuarios,
    opcionesUsuarios,
    desbloquearUsuarios
}
