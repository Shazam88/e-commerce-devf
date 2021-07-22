import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    
console.log(useParams());

    const {id} = useParams()
    console.log(id);

    const [detalles, setDetalles] = React.useState([])


    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
            const info = await data.json()
            //console.log(detalles);
            setDetalles(info)
        }
        obtenerDatos()
    }, [id])

   

    return (
        <div>
            <h1>Producto</h1>
            <h5>{detalles._id}</h5>
            <p>SKU: {detalles.product_name}</p>
            <p>Descripción: {detalles.description}</p>
        </div>
    )
}

export default Detail
