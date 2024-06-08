import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import SearchPhoto from './components/SearchPhoto';
import Delete from './components/Delete';
import ViewPhoto from './components/ViewPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPhoto/>}/> 
    <Route path='/Search' element={<SearchPhoto/>}/> 
    <Route path='/Delete' element={<Delete/>}/> 
    <Route path='/View' element={<ViewPhoto/>}/> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
