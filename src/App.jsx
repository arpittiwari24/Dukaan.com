import  { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Navbar/LoginPage';
import Home from '../Home';


class App extends Component {
  render() {
    return (
       <Router> 
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/googleoauth' element={< Login />}></Route>
          </Routes>
          
       </Router>
   );
  }
}

export default App
