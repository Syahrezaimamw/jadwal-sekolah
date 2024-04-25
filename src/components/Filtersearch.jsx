import React from 'react'
import { useContext } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { NavContex } from '../contex/Navcontex';
import { FaMagnifyingGlass } from "react-icons/fa6";
export const Filtersearch = () => {
    const { data, searchvalue, handleChange } = useContext(NavContex)
    return (
        <div className="relative z-[99] flex w-[80%] lg:w-[100%] items-center gap-3 px-5 py-2 border-2 border-solid lg:flex group border-neutral-200">
            <FaMagnifyingGlass className='text-xl text-gray-500' />
            <input

                type="search"
                placeholder='Cari pelajaran'
                onChange={(e) => handleChange(e.target.value)}
                className={`relative w-[100%] m-0 block flex-auto rounded border border-none bg-transparent bg-clip-padding px- py-[0.25rem] text-base font-normal text-black  leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill focus:activ  placeholder:text-[15px] dark:focus:border-primary  bg-red-900"
        placeholder="Apa yang ingin anda pelajari?"
        aria-label="Search"
        id="exampleFormControlInput2"
        aria-describedby="button-addon2`} />


            {searchvalue.length > 0 ?
                <div className='absolute bg-white top-[55px] border-2 border-solid border-neutral-200 left-0 w-full h-[200px] '>
                    <div className='relative w-full h-full '>
                        <div className='w-full overflow-y-scroll  h-[150px]' id='style-4'>
                            <ul className='flex flex-col w-full gap-3 px-4 pt-3 pb-3'>
                                {
                                    data.length > 0 ?
                                        data.map((a, i) => {
                                            if (i >= 0) {

                                                return (

                                                    <li key={i} className='px-4 py-2 border-2 border-neutral-200'>{a.hari}</li>
                                                )
                                            }else if(i == 0){
                                                <div className='flex items-center justify-center w-full h-[120px] '>
                                            <h1 className='text-[15px]'>Kelas yang anda cari tidak ditemukan</h1>
                                        </div>
                                            }
                                        }) : <div className='flex items-center justify-center w-full h-[120px] '>
                                            <h1 className='text-[15px]'>Kelas yang anda cari tidak ditemukan</h1>
                                        </div>
                                }
                            </ul>

                        </div>
                        <div className='absolute bottom-0 left-0 flex items-center justify-between w-full px-3 py-3 border-t-2 border-neutral-200'>
                            <div>
                                <p className='text-[15px]'>Lihat semua kelas</p>
                            </div>
                            <FaAngleRight className='text-[15px]' />
                        </div>
                    </div>

                </div>
                : <></>
            }

        </div>
    )
}
