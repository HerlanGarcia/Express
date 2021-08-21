import { mostrarUsuarios, insertarUsuarios, actualizarUsuarios, eliminarUsuarios, bloquearUsuarios, copiarUsuarios, opcionesUsuarios,desbloquearUsuarios } from "../controllers/user";
import { Router } from 'express'
const router = Router();

router.get('/usuarios', mostrarUsuarios);
router.post('/usuarios', insertarUsuarios);
router.put('/usuarios', actualizarUsuarios);
router.delete('/usuarios', eliminarUsuarios);

router.lock('/usuarios', bloquearUsuarios);
router.copy('/usuarios', copiarUsuarios);
router.options('/usuarios', opcionesUsuarios);
router.unlock('/usuarios', desbloquearUsuarios);


module.exports = router;
