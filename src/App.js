import './App.css';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { Jadwal2 } from './main/Jadwal2';

function App() {
  return (
   <div className=''>
    <Navbar/>
    <Jadwal2></Jadwal2>
    {/* <Jadwal></Jadwal> */}
   </div>
  );
}

export default App;
