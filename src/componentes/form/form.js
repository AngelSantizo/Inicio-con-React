import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//agregamos .scss
import './form.scss'
//agregamos dispatch para hacer uso de eventos con reux
import { useDispatch } from 'react-redux';

//importamos la accion osea el reducer
import {
  addGoal
} from '../../reducers/goalSlice';

//importaremos useRef para obtener la informacion del formulario (esto ya es de react)
import { useRef } from 'react';

function Formulario() {
  //crearemos variables para obtener la informacion del formulario
  const inputRefName = useRef();
  const inputRefDes = useRef();
  const inputRefDate = useRef();
  const dispatch = useDispatch();

  //ahora haremos la funcion para agregar la meta en el item
  const addItem = (e)=>{
    e.preventDefault();
    dispatch(addGoal({
      'name':inputRefName.current.value,
      'description': inputRefDes.current.value,
      'dueDate': inputRefDate.current.value
    }));
  }

  return (
    <Form className='formulario-general'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='FormLabel'>Nombre</Form.Label>
        <Form.Control type="text" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='FormLabel'>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} ref={inputRefDes}/>
      </Form.Group>
      <Form.Label className='FormLabel'>Deadline</Form.Label>
      <Form.Control type="date" ref={inputRefDate}/>
      <Button type="submit" className='FormBoton' onClick={addItem}>
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;