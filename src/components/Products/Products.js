import React from 'react'
import './Products.css'
import BannerProducts from './../ProductDetail/banner-products.png'
import { Link } from 'react-router-dom'

export const Products = () => {

    const [product, setProduct] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect');
        infoAPI()
    }, [])

    const infoAPI = async () => {
        const data = await fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
        const productos = await data.json()
        //console.log(products);
        setProduct(productos)
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
                            <div className="card" key={item._id} style={{width: "100%"}}>
                                <img src={item.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5>{item.product_name}</h5>
                                    <p><span className="price">${item.price}</span></p>
                                    <Link to={`/products/${item._id}`} className="btn btn-outline-dark">Detalles</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
         </div>
    )
};