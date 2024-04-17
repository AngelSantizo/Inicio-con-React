import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './componentes/item/item.js';
import Menu from './componentes/menu/menu.js';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Item></Item>
    </div>
  );
}

export default App;
