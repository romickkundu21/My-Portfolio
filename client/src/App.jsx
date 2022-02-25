import './App.css';
// import Navbar from './components/Home/Navbar';
// import Home from './components/Home/Home';

import Components from './components/Components';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <ToastContainer/>
        <Components/>
    </div>
  );
}

export default App;
