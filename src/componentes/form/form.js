import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//agregamos .scss
import './form.scss'

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='FormLabel'>Nombre</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='FormLabel'>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Label className='FormLabel'>Urgencia</Form.Label>
      <Form.Control type="text" />
      <Button type="submit" className='FormBoton'>
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;