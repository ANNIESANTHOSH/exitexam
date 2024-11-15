import { Route, Routes } from 'react-router-dom'
// import TodoItem  from './components/TodoItem';
import Home from './components/Home';



function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </>
  );
}