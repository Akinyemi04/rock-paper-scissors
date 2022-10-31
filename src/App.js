import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './Components/Game';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route exact path ='/' element={<Home/>}></Route>
          <Route path='/rock' element={<Game player='rock'/>}/>
          <Route path='/paper' element={<Game player='paper'/>}/>
          <Route path='/scissors' element={<Game player='scissors'/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
