import servidor from './server/';

servidor.listen(3001, () => {
  console.log("servidor corriendo en el puerto 3001")
})