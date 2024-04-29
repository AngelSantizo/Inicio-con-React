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
import { useSelector } from 'react-redux';

function App() {
  //exploraremos ahora la informacion de los estados para pasarlo a las cards y agregarlas
  const goal = useSelector((state)=>state.goal.value);
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
