import logo from './logo.svg';
import Homepage from './Homepage/Homepage'
import  { 
  BrowserRouter as Router,  Route,} from 'react-router-dom'
import Orderpg from './Order/Orderpg';
import ModalCont from './Modal/ModalCont';
import { Modal } from '@material-ui/core';



  function App() {
  return (
    <Router>
    <div className='App'>
    <Route exact path='/'component={Homepage}/>
    <Route path='/orderpg'component={Orderpg}/>
    <Route path='/modalcont'component={ModalCont}/>
 
 </div>
    </Router>
  );
}

export default App;
