import {BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import './App.css'
import Approve from './pages/Approval'
import { Description } from './pages/Description'
import { Form } from './pages/Form'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import { Verification } from './pages/Verification'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

function App() {


  
  //check if localStorage is present
  

  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/approve-user/verify' element={<Approve/>} />
           <Route path='*' element={<NotFound/>} />
           <Route path='/survey' element={<Form/>} />
           <Route path='/description' element={<Description />}  />
           <Route path='/verification' element={<Verification/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
