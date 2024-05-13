import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//tenemos que importar tambien la hoja de estilos .scss
import './item.scss'

//importar la accion para remover la carta
import { useDispatch } from 'react-redux';

//importamos la accion osea el reducer
import {
  removeTodo
} from '../../reducers/todoSlice';

function Item(props) {
  const dispatch = useDispatch();

  //agregaremos aqui ahora el removeTodo
  const removeItem = (e) =>{
    e.preventDefault();

    dispatch(removeTodo(props.id));
  }
  
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Body className='CardBody'>
        <Card.Title className='CardTitle'>{props.name}</Card.Title>
        <Card.Text className='fw-bold'>
          Descripcion
        </Card.Text>
        <Card.Text>
          {props.description} 
        </Card.Text>
        <Card.Text className='fw-bold'>
          Due date
        </Card.Text>
        <Card.Text>
          {props.dueDate} 
        </Card.Text>
        <Button variant='dark' className='botonCompletar' onClick={removeItem}>Eliminar</Button>
        <Button variant='dark'>Editar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;