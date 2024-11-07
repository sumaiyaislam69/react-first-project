import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Banner from './images/banner.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header></Header>
 

      <img src={Banner} alt=''/>
      <h1>Hello react app</h1>



      <Button variant="warning">Warning</Button>
    </div>
  );
}

export default App;
