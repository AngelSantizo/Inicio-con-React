import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//tenemos que importar tambien la hoja de estilos .scss
import './item.scss'

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
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
        <Button variant='dark' className='botonCompletar'>Eliminar</Button>
        <Button variant='dark'>Editar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;