import React from 'react'
import Prductos from './Prductos'



function Tienda({productos, agregarProducto}) {
    return (
        <div>
            <h1>Tienda</h1>
            <Prductos productos={productos} agregarProducto={agregarProducto}/>
        </div>
    )
}



export default Tienda
