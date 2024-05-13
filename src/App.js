import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './componentes/item/item.js';
import Menu from './componentes/menu/menu.js';
import Formulario from './componentes/form/form.js';

//Agregando el grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//accederemos a nuestros estados usando useSelector
import { useSelector, useDispatch } from 'react-redux';

//importaremos el backend y useEfect que permitira accionar cuando se renderice algun componente
import { useEffect } from 'react';
import todoSlice, {
  initAddTodo
} from './reducers/todoSlice.js';

function App() {
  //exploraremos ahora la informacion de los estados para pasarlo a las cards y agregarlas
  const dispatch = useDispatch();
  const goal = useSelector((state)=>state.goal.value);
  
  //aqui haremos la peticion inicial del backend
  function initFetch(){
    //aqui usaremos metodo GET
    fetch('https://localhost:3001/tasks/getTasks',{
      //usaremos primero el metodo post, los headers
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          //aqui incluiremos el API key
          "Authorization":"AuthKey123"
      },
    }).then((response)=>
      response.json()
    ).then((response)=>{
      //vamos hacer un mapeo de nuestras tareas y los enviaremos a todos los estados 
      response.map((task)=>{
        dispatch(initAddTodo(task));
      })
    }).catch(err=>{
      //si existe algun error lo mostraremos en consola
      console.log(err);
    })
  }
  //hacemos uso de effect
  useEffect(()=>{
    initFetch();
  },[])

  return (
    <div className="App">
      <Menu></Menu>
        <Container>
         <Row>
            <Col><Formulario></Formulario></Col>
            <Col>
              {
                /**en este espacio entre corchetes podemos escribir codigo JS en lugar de codigo JSX */

                goal.map((tarea)=>{
                  return <Item name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}></Item>
                })
              }
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
