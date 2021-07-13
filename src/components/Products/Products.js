import React from 'react'
import './../../styles/API.css'

export const Products = () => {

    const [product, setProduct] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect');
        infoAPI()
    }, [])

    const infoAPI = async () => {
        const data = await fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
        const products = await data.json()
        //console.log(products);
        setProduct(products)
    }


    return (
        <div className="container">
            <div className="row">
            {
                product.map(item => (
                    <div className="col-md-3 my-2">
                    <div className="card " key={item._id} style={{width: "18rem"}}>
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{item.product_name}</p>
                            <p className="card-text">{item.price}</p>
                        </div>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
