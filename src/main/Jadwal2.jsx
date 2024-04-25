import React, { useEffect, useState } from 'react'
import { ModalData } from '../components/ModalData'
import Modaladdpr from '../components/Modaladdpr'
import { getJadwalApi } from '../service/getJadwalApi'
export const Jadwal2 = ({  modal,  setModal,dataModal,setDataModal,prModal,setshowprmodal,dataaddpr,setDataaddpr
}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getJadwalApi((data)=>setData(data))
    }, [])
  
    function dataSelect(data) {
        setDataModal(data)
        setModal(true)
    }
    
    return (
        <>
            <div className='m-auto hidden sm:block  max-w-[1450px] px-8  mt-10'>
                <div className='flex '>
                    {
                        data.map((a, i) => (
                            <div key={i} className='w-[calc(100%/5)]'>
                                <h1 onClick={() => dataSelect(a)} className='flex items-center justify-center px-8 py-3 font-bold bg-[rgb(45,62,80)]  text-white border-r-2  border-y-2 jis justiy'>
                                    {a.hari.toUpperCase()}
                                </h1>
                                <div className='w-full'>
                                    {
                                        a.jadwal.map((e, r) => (
                                            <div key={r} className={` cursor-pointer flex font-medium capitalize items-center justify-center relative px-8 py-2 text-[14px] border-b-2 group border-r-2 ${e.mapel == 'istirahat' ? 'bg-red-200' : 'bg-indigo-200'}  ${e.pr.status ? 'text-red-600' : ''}`} >
                                                {e.mapel.toUpperCase()}
                                                {
                                                    e.pr.status ?
                                                    <div className='absolute z-10 top-0  hidden px-2 text-white bg-[rgb(45,62,80)]  ext-white py-2 group-hover:block'>{e.pr.desk}</div>
                                                    :<></>
                                                }
                                                </div>
                                        ))
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>
                {
                    modal ?
                        <ModalData 
                        setModal={setModal}
                         setDataaddpr={setDataaddpr} 
                         setshowprmodal={setshowprmodal}
                          dataModal={dataModal}></ModalData>
                        : <></>
                }
                {
                    prModal ?
                        <Modaladdpr  setshowprmodal={setshowprmodal} dataaddpr={dataaddpr}></Modaladdpr> : <></>
                }
            </div>

        </>
    )
}
