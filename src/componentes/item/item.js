import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//tenemos que importar tambien la hoja de estilos .scss
import './item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body className='CardBody'>
        <Card.Title className='CardTitle'>Realizar proyecto</Card.Title>
        <Card.Text className='fw-bold'>
          Descripcion
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de desarrollo web por Angel Santizo
        </Card.Text>
        <Button variant='dark' className='botonCompletar'>Eliminar</Button>
        <Button variant='dark'>Editar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;