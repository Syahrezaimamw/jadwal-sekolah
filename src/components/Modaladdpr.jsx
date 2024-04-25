import React, { useState } from 'react'
import { FaX } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { putDataapi } from '../service/putapi';
const Modaladdpr = ({dataaddpr, setshowprmodal}) => {
  const [dataInput,setDatainput]=useState('')
  function handleChange(data){
    setDatainput(data)
  }
  function sendAddPr(e){
    e.preventDefault()
    putDataapi(dataaddpr.dataModal,dataaddpr.per,true,dataInput,dataaddpr.id)
    
    
  }
  return (
    <>
  {/* Modal toggle */}

  {/* Main modal */}
  <div
    id="authentication-modal"
    tabIndex={-1}
    aria-hidden="true"
    className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div className="relative w-full max-w-md max-h-full p-4">
      {/* Modal content */}
      <div className="relative bg-white shadow " id='bs'>
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 ">
          <h3 className="text-xl font-semibold text-gray-900 ">
            Ya elah pr lagi aja
          </h3>
          <button
          onClick={()=>setshowprmodal(false)}
            type="button"
            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
          >
          <FaX/>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <div className='flex items-center [&_p]:font-medium gap-2'>
              <p>

             {dataaddpr.dataModal.hari.toUpperCase()} 
              </p>
              <FaAngleRight className='text-[14px]'/>
              <p>

             {dataaddpr.per.mapel.toUpperCase()} 
              </p>
              <FaAngleRight className='text-[14px]'/>
              <p>

             {dataaddpr.per.jam} 
              </p>
            </div>
            <div>
              <label
                htmlFor="desk"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Add Desk
              </label>
              <input
                type="text"
                name="desk"
                onChange={(e)=>handleChange(e.target.value)}
                id="desk"
                placeholder="Beri deskripsi secara jelas"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
              />
            </div>
         
            <button
            onClick={(e)=>sendAddPr(e)}
              type="submit"
              className="w-full text-white bg-[rgb(45,62,80)]   font-medium rounded- text-sm px-5 py-2.5 text-center active:scale-95"
            >
             Tambah PR
            </button>
          
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Modaladdpr
