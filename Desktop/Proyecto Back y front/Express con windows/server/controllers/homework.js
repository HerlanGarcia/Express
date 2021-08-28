import db from "../database/";

const insertarTarea = async (req, res) => {
    try{
        let tarea = req.body;
        await db.homework.create(
            tarea
        );
        res.status(200).send({message: "ok"});
    }catch (error) {
        res.status(500).send(error.message);
    }
}


const mostrarTarea = async (req, res) => {
    try{
        const respuesta = await db.homework.findAll();
        res.status(200).send(respuesta);
    }catch (error) {
        res.status(500).send(error.message);
    }
}
const  eliminarTarea = async (req, res) =>{
    try{
        await db.homework.destroy({
            where : { id: req.params.id},
        });
        res.status(200).send ({ message:"ok"});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const editarTarea = async (req, res) =>{
    try{
        let tarea = req.body;
        await db.homework.update(
            tarea
            ,
            {
                where:{ id: req.params.id},
            }

        );
        res.status(200).send({ message: "ok"});
    } catch (error) {
        res.status(500).send(error.message);
    }
}
export {
    insertarTarea,
    mostrarTarea,
    eliminarTarea,
    editarTarea
};
