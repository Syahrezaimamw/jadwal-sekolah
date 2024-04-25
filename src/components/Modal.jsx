import React, { useContext } from 'react'
import { Appcontex } from '../contex/Appcontex'
import { FaArrowRight } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { Filtersearch } from './Filtersearch';
import { Button } from './Button';

export const Modal = ({setShow}) => {
    const sw = useContext(Appcontex)
  return (
    <div className={`fixed ${sw.show? 'block':'hidden'} z-50 lg:hidden top-0 left-0 w-full h-full bg-white`}>
        <div className='flex items-center justify-between w-full px-8 py-5'>
        <Filtersearch></Filtersearch>
            
        <FaX onClick={()=>{
            sw.show?sw.setShow(false):sw.setShow(true)
        }}></FaX>
        </div>
        <div className='flex items-center justify-center gap-4 py-6 mt-4 bg-neutral-50'>
            <Button>
                Masuk
            </Button>
            <Button type={true}>
                Daftar
            </Button>
        </div>
        <div className='w-full mt-5'>
            <ul className='flex flex-col gap-8 px-8 font-semibold'>
                {['Learning Path', 'Langganan', 'Program', 'Lainnya'].map((a,i)=>(
                    <li key={i} className='flex items-center justify-between'>{a} <FaArrowRight/></li>
                ))}
                <li className='flex items-center justify-between'>
                <span className='flex items-center gap-2'>click to switch mode to {sw.mode =='light'? 'Dark' : 'Light'} <FaArrowRight/></span>
                    <span>

                    {
                        sw.mode == 'dark'?
                        <FaRegSun
                        onClick={()=>{
                            setShow(false)
                            sw.setMode('light')
                        }}/>:
                    <FaRegMoon onClick={()=>{
                        sw.setMode('dark')
                        setShow(false)
                    }}
                    
                    />
                }
                </span>
                    </li>
            </ul>
        </div>
    </div>
  )
}
