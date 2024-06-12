import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<AddEmployee/>}/>
    <Route path='/View'element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
