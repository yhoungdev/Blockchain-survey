import {BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import './App.css'
import { Description } from './pages/Description'
import { Form } from './pages/Form'
import Homepage from './pages/Homepage'
import { Verification } from './pages/Verification'

function App() {
 

  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='/' element={<Form/>}/>
           <Route path='/survey' element={<Form/>} />
           <Route path='/description' element={<Description />}  />
           <Route path='/verification' element={<Verification/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
