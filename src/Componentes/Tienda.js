import React from 'react'
import Prductos from './Prductos'



function Tienda({productos}) {
    return (
        <div>
            <h1>Tienda</h1>
            <Prductos productos={productos}/>
        </div>
    )
}



export default Tienda
