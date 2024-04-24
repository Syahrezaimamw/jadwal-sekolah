import React, { useState } from 'react'
import { Appcontex } from './Appcontex'

export const Datacontex = ({children}) => {
    const [show,setShow]=useState(false)

  return (
    <Appcontex.Provider value={{show,setShow}}>
        {children}
    </Appcontex.Provider>
  )
}
