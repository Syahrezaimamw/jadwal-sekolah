import React, { useEffect } from 'react'
import { useState } from 'react';
import { getJadwalApi } from '../service/getJadwalApi';
import { Perjadwalmobile } from './Perjadwalmobile';
import Modaladdpr from '../components/Modaladdpr';
import { tanggal } from '../service/tanggal';
import { ModalData } from '../components/ModalData';
import Skeleton from 'react-loading-skeleton'
import Loading from '../components/Loading';
export const JadwalMobile = ({ modal, setModal, dataModal, setDataModal, prModal, setshowprmodal, dataaddpr, setDataaddpr
}) => {
    const [data, setData] = useState()
    useEffect(() => {

        getJadwalApi((data) => setData(data))
    }, [])
    const [dataPer, setDataPer] = useState();
    let date = new Date();
    let hariini = date.getDay();
    const [hari, setHari] = useState(hariini== 0 || hariini == 6 || hariini == 7 ? 1 : hariini);
    const newdate = tanggal()

    function gantiHari(id) {
        // setHari([])
        setDataPer()
        setTimeout(()=>{
            setHari(id)
            console.log('selesai')
        },1000)
    }
    useEffect(() => {
        fetch('https://65557ea384b36e3a431dce2b.mockapi.io/mapel/' + hari)
            .then((a) => a.json())
            .then((a) => setDataPer(a))
        tanggal()
    }, [hari])
    function dataSelect(data) {
        setDataModal(data)
        setModal(true)
    }
    return (
        <>
            <div className='relative w-full sm:hidden'>
                {/* ss */}
                <ul className='sticky top-0 z-10 flex items-center justify-between w-full gap-0 px-3 mt-2 overflow-x-scroll bg-white'>

                    {
                        data?
                        data.map((a, i) => (
                            <li key={i} className='relative px-1 py-2 text-lg font-semibold ' onClick={() => gantiHari(a.id)}>{a.hari}
                            <span className={` w-full h-[3px]  absolute left-0 bottom-0  ${i+1 == hari ?'bg-red-900':'bbg-transparent'}`}></span>
                            
                            </li>)):
                            <div className='bg-gray-100 w-full h-[40px] flex justify-center items-center '>
                                tunggu lagi loading
                                <Loading/>
                            {/* dsdada */}
                            </div>
                    }
                </ul>
                {/* bg-[rgb(244,244,245)] */}
                <div className='px-3 bg-[rgb(244,244,245)]  dark:bg-navy pb-10 min-h-[70dvh] mt-[70px]'>
                    <div className='relative w-full bg-red-900  top-[-25px] h-[20px]'>

                        <div onClick={() => dataSelect(dataPer)} className='absolute w-full flex justify-between items-center px-3 bg-red-900  t-0 l-0 h-[50px] text-white'>
                            <h1 className='text-xl font-bold'>{dataPer ? dataPer.hari : '...'}</h1>
                            <p className='text-end'>{newdate}</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        {
                            dataPer ?
                                dataPer.jadwal.map((a, i) => (


                                    <div key={i} className={`relative flex justify-center w-full py-2 mb-1 font-semibold group  ${a.mapel=='istirahat'?'bg-red-200 dark:bg-red-200':'bg-indigo-200  dark:bg-neutral-100'} items-center`}>
                                        <h1 className={`${a.pr.status ? 'text-red-500' : ''}`}>

                                            {a.mapel.toUpperCase()}
                                        </h1>
                                        {
                                            a.pr.status ?
                                                <div className='absolute top-0 hidden px-4 py-1 text-white bg-[rgb(45,62,80)] group-hover:block'>
                                                    {a.pr.desk}
                                                </div>
                                                : ''
                                        }
                                    </div> 
                                )) : <><Skeleton count={9} className='h-[40px] mt-2' /></>
                        }
                    </div>
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
                        <Modaladdpr setshowprmodal={setshowprmodal} dataaddpr={dataaddpr}></Modaladdpr> : <></>
                }

            </div>
        </>)
}

{/* <div className='w-full px-3 min-h-[100dvh] bg-gray-200 mt-[70px]'>

<div className='w-full h-[20px] relative top-[-40px] bg-[#790604]'>
    <div className='absolute w-full bg-[#790604] h-[200px]'></div>
</div>
<div className='mt-[160px] flex flex-col gap-1'>
    {
        data.map((a,i)=>(
            <Accor data={a}/>
        ))
    }
</div>
</div> */}

function Accor({ data }) {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full py-2 bg-[rgb(45,62,80)] transition-all duration-500 text-white ps-2' onClick={() => open ? setOpen(false) : setOpen(true)}>
            <p>

                {data.hari.toUpperCase()}
            </p>
            {
                open ?
                    <>
                        <p className='duration-500'>adsa</p>
                    </> : ''
            }

        </div>
    )
}