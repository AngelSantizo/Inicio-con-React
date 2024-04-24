import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './componentes/item/item.js';
import Menu from './componentes/menu/menu.js';
import Formulario from './componentes/form/form.js';

//Agregando el grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  //haremos un JSON para facilitar el ingreso de informacion
  const tareas = [{
    name:'Terminar proyecto curso',
    description:'Realizar todas las actividades del curso',
    dueDate:'25-04-2024'
  },
  {
    name:'Terminar tareas curso',
    description:'Realizar todas las actividades del curso',
    dueDate:'27-04-2024'
  }]
  return (
    <div className="App">
      <Menu></Menu>
        <Container>
         <Row>
            <Col><Formulario></Formulario></Col>
            <Col>
              {
                /**en este espacio entre corchetes podemos escribir codigo JS en lugar de codigo JSX */

                tareas.map((tarea)=>{
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
