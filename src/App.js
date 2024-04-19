import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './componentes/item/item.js';
import Menu from './componentes/menu/menu.js';
import Formulario from './componentes/form/form.js';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Formulario></Formulario>
      <Item></Item>
    </div>
  );
}

export default App;
