import React from 'react'
import Header from '../Header'
const index = ({children}:any) => {
    return (
        <div>
         <Header/>
         {children}
        </div>
    )
}

export default index
