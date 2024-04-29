import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//tenemos que importar tambien la hoja de estilos .scss
import './item.scss'

//importar la accion para remover la carta
import { useDispatch } from 'react-redux';

//importamos la accion osea el reducer
import {
  removeGoal
} from '../../reducers/goalSlice';

function Item(props) {
  const dispatch = useDispatch();
  //creamos la funcion para el evento onclick
  const deleteGoal = (e)=>{
    dispatch(removeGoal({ name: 'test1' }));
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
        <Button variant='dark' className='botonCompletar' onClick={deleteGoal}>Eliminar</Button>
        <Button variant='dark'>Editar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;