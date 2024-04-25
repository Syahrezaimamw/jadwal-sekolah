import React, { useEffect, useState } from 'react'
import { Appcontex } from './Appcontex'

export const Datacontex = ({children}) => {
    const [show,setShow]=useState(false)
    const [mode,setMode]=useState('light')
    useEffect(()=>{
      if(mode == 'dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
    },[mode])

  return (
    <Appcontex.Provider value={{show,setShow,setMode,mode}}>
        {children}
    </Appcontex.Provider>
  )
}
