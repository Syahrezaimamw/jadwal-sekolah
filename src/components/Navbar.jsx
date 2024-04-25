import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { Button } from './Button';
import { FaArrowRight } from "react-icons/fa6";
import { Appcontex } from '../contex/Appcontex';
import { Filtersearch } from './Filtersearch';
import { getMealsApi } from '../service/getapi';
import { NavContex } from '../contex/Navcontex';
import { Modal } from './Modal';
// import Logo from '../image/letris.j'
import Logoo from '../image/ls.png'
export const Navbar = () => {
    const {show,setShow,setMode,mode}=useContext(Appcontex)    
    const [searchvalue, setSeachvalue] = useState('')
    const [data, setData] = useState([])
    function handleChange(value) {
        setSeachvalue(value)

    }
    useEffect(()=>{
        fetch('https://65557ea384b36e3a431dce2b.mockapi.io/mapel')
        .then(res => res.json())
        .then(res => {
            const result = res.filter((a,i)=>{
                return a.hari.toLowerCase().includes(searchvalue)
            })
            setData(result)
    },[])
        
    },[searchvalue])
    return (
        <NavContex.Provider value={{
            data, searchvalue, handleChange
        }}>

        <div className='flex flex-col-reverse bg-white lg:flex-col ' style={{zIndex:'999'}}>
            <div className='flex  items-center justify-center cursor-pointer bg-[rgb(244,244,245)] w-full group py-4'>
                <div className='flex flex-wrap px-3 sm:px-8 items-center gap-2 md:gap-5 text-[rgb(63,67,75)] font-semibold text-[15px]'>Kelas terbaik dan paling produktif menciptakan keunggulan 2024!<p className='flex items-center gap-3  text-[rgb(26,119,215)]'>LIhat di sini <FaArrowRight className='duration-500 group-hover:translate-x-4' /></p></div>
            </div>
            <div className='static px-3 sm:px-8 xl:px-5 flex items-center justify-between w-full lg:max-w-[1450px] py-4 lg:py-3 m-auto'>
                <div className='flex items-center justify-between gap-5'>
                    <img src={Logoo} alt="logo" className='w-[40px]' />
                    <div className='hidden lg:block'>
                        <Filtersearch
                        
                        >
                            
                        </Filtersearch>
                    </div>

                    <ul className=' hidden lg:flex items-center text-black text-[15px] h-full   font-medium'>
                        {['Learning Path', 'Langganan', 'Program', 'Lainnya'].map((e, i) => (
                            <li key={i} className='h-full px-4 py-4 cursor-pointer hover:bg-gray-200'>{e}</li>
                        ))}
                        {/* <li>  <FaRegSun onClick={()=>{
                    console.log(mode)
                    mode == 'dark'?setMode('light'):setMode('dark')
                    }}/></li> */}
                    </ul>

                </div>
                <div className='items-center hidden gap-2 lg:flex'>
                    <Button >Masuk</Button>
                    <Button type={true}> Daftar</Button>
                </div>

                <FaBars className='text-xl lg:hidden' onClick={() => {
                    show ? setShow(false) : setShow(true)
                }}></FaBars>
              
            </div>
        </div>
        <Modal setShow={setShow}/>
                    </NavContex.Provider >
    )
}
