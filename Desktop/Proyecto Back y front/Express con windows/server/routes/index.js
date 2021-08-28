import { mostrarUsuarios, insertarUsuarios, actualizarUsuarios, eliminarUsuarios } from "../controllers/user";
import{
    insertarTarea,
    mostrarTarea,
    eliminarTarea,
    editarTarea

} from "../controllers/homework";
import { Router } from 'express';
const router = Router();

router.get('/usuarios', mostrarUsuarios);
router.post('/usuarios', insertarUsuarios);
router.put('/usuarios', actualizarUsuarios);
router.delete('/usuarios', eliminarUsuarios);


//rutas de tareas 
router.get("/tarea", mostrarTarea);
router.post("/tarea", insertarTarea);
router.delete("/tarea/:id", eliminarTarea);
router.put("/tarea/:id", editarTarea);




module.exports = router;
