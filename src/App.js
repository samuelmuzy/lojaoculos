import SecondPage from './SecondPage'
import Loja2 from './Loja2'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loja2/>}/>
          <Route path='/SecondPage' element={<SecondPage/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
