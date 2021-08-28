import servidor from './server/';

servidor.listen(3002, () => {
  console.log("servidor corriendo en el puerto 3002")
})