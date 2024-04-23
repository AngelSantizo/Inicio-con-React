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
  return (
    <div className="App">
      <Menu></Menu>
        <Container>
         <Row>
            <Col><Formulario></Formulario></Col>
            <Col>
              <Item name={'Terminar proyecto curso'} description={'Realizar todas las actividades del curso'} dueDate={'25-04-2024'}></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
