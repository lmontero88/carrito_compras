import React from 'react';
import styled from 'styled-components';

function Carrito({carrito}) {
    
    return (
        <div>
            <h1>Carrito de compra</h1>
            {carrito.length > 0 ?
                carrito.map((producto, index) => {
                    return <Producto key= {index}>
                        <NombreProducto>
                            {producto.descripcion}
                        </NombreProducto>
                        Cantidad: {producto.cantidad}
                    </Producto>
                })
                : 'no hay productos en tu carrito'}
        </div>
    )
}

const Producto = styled.div`
    padding : 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export default Carrito
