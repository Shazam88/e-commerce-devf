import React from 'react'
import './ProductDetail.css'
import BannerProducts from './banner-products.png'



export const ProductDetail = () => {
    const [product, setProduct] = React.useState([])
    const [mostrarModal, setMostrarModal] = React.useState(false)

    React.useEffect(() => {
        //console.log('useEffect');
        infoAPI()
    }, [])

    const infoAPI = async () => {
        const data = await fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
        const products = await data.json()
        //console.log(products);
        setProduct(products)
        return products
    }


    const handlerOnClick = (id)=>{
        alert(id)
        //filtrar producto
        const siLoEncontre = product.find((producto)=>producto._id === id)
        //pasar ese data de producto al componete modal 
        ModalCarta(siLoEncontre)
        //dentro del modal activar clase de display
        setMostrarModal(mostrarModal)
    }


    return (
        <div>
            <div>
                <img src={BannerProducts} alt="..."/>
            </div>
            
            <div className="container cProducts">
                <div className="row">
                {
                    product.map(item => (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card " key={item._id} style={{width: "100%"}}>
                                <img src={item.image} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5>{item.product_name}</h5>
                                    <p><span className="price">${item.price}</span></p>
                                    <button type="button" className="btn btn-outline-dark" onClick={()=> handlerOnClick(item._id)}>
                                    Detalles
                                    </button>
                                </div>
                            </div>

                            
                        </div>
                    ))

                }
                </div>
            </div>
            {
                mostrarModal && <ModalCarta/> 
                
            }
         </div>
    )
}

const ModalCarta = (producto)=>{
    return(
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{producto.product_name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex">
                        <div>
                            <img src={producto.image} className="card-img-top" alt="..." />
                        </div>
                        <div>
                            <p>SKU: {producto.sku}</p>
                            <p>Descripción: {producto.description}</p>
                            <p>Precio: ${producto.price}</p>
                            <p>Categoría: {producto.category}</p>
                            <p>{producto.brand}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}