import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//tenemos que importar tambien la hoja de estilos .scss
import './item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Realizar proyecto</Card.Title>
        <Card.Text className='fw-bold'>
          Descripcion
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de desarrollo web por Angel Santizo
        </Card.Text>
        <Button variant="primary">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;