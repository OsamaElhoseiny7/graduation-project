import './App.css';
import { lazy, Suspense } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const Login=lazy(()=> import("./components/Login") );
const Signup=lazy(()=> import("./components/Signup") );
// import Login from './components/Login';
// import Signup from './components/Signup';


function App() {
  return (
   <Suspense>
    <BrowserRouter>
     {/* <Login/> */}
     <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
