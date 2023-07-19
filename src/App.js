import './App.css';
import ItemListContainer from './component/ItemListContainer';
import Navbar from './component/Nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar nombre="Eve-Dreams"></Navbar>
      <div className="container">
        
      <ItemListContainer></ItemListContainer>
      </div>
    </div>
  );
}

export default App;
