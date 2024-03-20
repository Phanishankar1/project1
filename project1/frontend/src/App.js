import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Gallary from './Gallary';
import Form from './Form';
import Done from './Done';
import Adminform from './Adminform';
import Done2 from './Done2';
import Employeedetails from './Employeedetails';
import Employes from './Employes';
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
      <Routes>
       <Route path="/gallery"element={<Gallary/>}/>
       <Route path="/employes"element={<Employes/>}/>
       <Route path="/employeedetails"element={<Employeedetails/>}/>
       <Route path="/employes/:name"element={<Employeedetails/>}/>
       <Route path="/form"element={<Form/>}/>
       <Route path="/done"element={<Done/>}/>
       <Route path="/"element={<About/>}/>
       <Route path="/adminform"element={<Adminform/>}/>
       <Route path="/form/:data"element={<Done/>}/>
       <Route path="/done2"element={<Done2/>}/>
       <Route path="/adminform"element={<Done2/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
