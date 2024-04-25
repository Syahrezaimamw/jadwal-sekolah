import './App.css';
import { useState } from 'react';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { Jadwal2 } from './main/Jadwal2';
import { JadwalMobile } from './main/JadwalMobile';

function App() {

  const [modal, setModal] = useState(false)
    const [dataModal, setDataModal] = useState({})
    const [prModal, setshowprmodal] = useState(false)
    const [dataaddpr,setDataaddpr]=useState({})
  return (
   <div className=''>
    
    <Navbar
    />
    <Jadwal2
    modal={modal}
    setModal={setModal}
    dataModal={dataModal}
    setDataModal={setDataModal}
    prModal={prModal}
    setshowprmodal={setshowprmodal}
    dataaddpr={dataaddpr}
    setDataaddpr={setDataaddpr}
    ></Jadwal2>
    <JadwalMobile
     modal={modal}
     setModal={setModal}
     dataModal={dataModal}
     setDataModal={setDataModal}
     prModal={prModal}
     setshowprmodal={setshowprmodal}
     dataaddpr={dataaddpr}
     setDataaddpr={setDataaddpr}></JadwalMobile>
   </div>
  );
}

export default App;
