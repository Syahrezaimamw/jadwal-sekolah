import React, { useState,useEffect } from 'react'
import { Button } from './Button'
import { FaX } from "react-icons/fa6";
import { putDataapi } from '../service/putapi';
export const ModalData = ({ setModal, dataModal, setshowprmodal,setDataaddpr}) => {

  const [inputValue, setInputvalue] = useState('')

  function tugasSelesai(dataModal, per, id) {
    putDataapi(dataModal, per, false, '',id)

  }
  function addPr(dataModal, per, id) {
    setDataaddpr({dataModal,per,id})
  }
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="flex overflow-y-auto mt-10 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
     
    >
      <div className="relative w-full max-w-2xl max-h-full p-4">
        {/* Modal content */}
        <div className="relative bg-white shadow "  id='bs'>
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
            <h3 className="text-xl font-semibold text-gray-900">
              {dataModal.hari}
            </h3>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
            >
              <FaX />
            </button>
          </div>
          {/* Modal body */}
          <div className="py-4 space-y-4  md:p-5 h-[260px]  overflow-y-scroll" id='style-4'>
            {dataModal.jadwal.map((a, i) => (
              <div key={i} className='flex items-start justify-between w-full px-3 py-1 cursor-pointer '>
                <h1 className='font-semibold '>{a.mapel} <span className='font-normal ms-3'>({a.jam})</span></h1>
                <div className='flex items-center justify-between gap-2'>
                  {
                    a.pr.status ?
                      <button className='px-3 py-1 active:scale-95 border-[1px] border-[rgb(45,62,80)] text-[rgb(45,62,80)]' onClick={() => tugasSelesai(dataModal, a, dataModal.id)}>Selesai</button>
                      :

                      <button className='px-3 active:scale-95 py-1 border-[1px] border-[rgb(45,62,80)] text-[rgb(45,62,80)] ' onClick={() => {
                        setModal(false)
                        setshowprmodal(true)
                        addPr(dataModal, a, dataModal.id)
                      }}>Tambah PR</button>

                  }
                </div>
              </div>
            ))}

          </div>
          {/* Modal footer */}
          <div className="flex items-center gap-3 p-4 border-t border-gray-200 rounded-b md:p-5">
            <Button>Masuk</Button>
            <Button type={true}>Daftar</Button>
          </div>
        </div>
      </div>
    </div>

  )
}
