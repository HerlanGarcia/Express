import shortid from "shortid";
import React from "react";
import axios from "axios";
function Copy() {
  
  //ESTADOS
  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setId] = React.useState(0);
  const [ mensajeError, setMensajeError ] =React.useState(false)
   
//Para cargar el crud
  React.useEffect(() =>{
    actualizarTareas();
  }, [])

  //Actualizar las tareas
  const actualizarTareas = async () => {
    let lasTareas = await axios.get (`http://localhost:3002/tarea`);
    setTareas(lasTareas.data);
  }

  //cambiar estado
  const cambiarEstado = (item) =>{
    setModoEdicion(true)
    setTarea(item.nombreTarea);
    setId(item.id)
  }
   

  //FUNCION PARA AGREGAR TAREA
  const agregarTarea = async e => {
    e.preventDefault()
    try { 
    if (!tarea.trim()) {
      setMensajeError(true);
      return
    }
    await axios.post('http://localhost:3002/tarea', { nombreTarea:tarea});
    console.log("success");
    setTarea("");
    actualizarTareas();
    setMensajeError(false);
     } catch(error){
       console.log(error.message);
     }
  }

  //FUNCION PARA ELIMINAR LA TAREA
 const eliminarTarea = async(id) =>{
   try{
     await axios.delete(`http://localhost:3002/tarea/${id}`);
     actualizarTareas();
   }catch(error) {
    console.log(error.message)
   }

 }
   
  


  //Funcion para editar tarea
  const editarTarea = async (e) => {
    e.preventDefault()
    try{ 
      if(!tarea.trim()) {
        setMensajeError(true);
        return
      }
      await axios.put(`http://localhost:3002/tarea/${id}`, {nombreTarea: tarea});
      actualizarTareas();
      setTarea("");
      setModoEdicion(false);
      setMensajeError(false);
     } catch (error) {
       console.log (error.message);
     }

    }

  
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.length === 0 ? (
                <li className="list-group-item">
                  <span className="lead">No existen tareas</span>
                </li>
              ) :
              (
                tareas.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{ item.nombreTarea }</span>
                    <button
                      className="btn btn-danger btn-sm float-end mx-2"
                      onClick={() => eliminarTarea(item.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning btn-sm float-end mx-2"
                      onClick={ () => cambiarEstado(item) }
                    >
                      Editar
                    </button>
                  </li>
                ))
              )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center"> { modoEdicion ? 'Editar' : 'Registrar' }</h4>
          {
            mensajeError ? (
              <h6 className="text-center text-danger">No se permiten campos vacios</h6>
            ) : ( <h2></h2> )
          }
          <h4 className="text-center">
            <form onSubmit={ modoEdicion ? editarTarea : agregarTarea }>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese tarea"
                onChange={e => setTarea(e.target.value)}
                value={tarea}
              />
              {
                modoEdicion ? (
                  <button className="btn btn-warning btn-block" type="submit">Editar</button>
                ): (
                  <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                )
              }
            </form>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Copy;
