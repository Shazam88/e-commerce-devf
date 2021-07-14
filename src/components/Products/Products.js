import React from 'react'
import './Products.css'
import PropTypes from "prop-types";

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
        <div>
            <div>
                <img src="./../../banner-products.png" alt="..."/>
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
                                    <a className="btn btn-outline-dark" >Detalles</a>
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

Products.propTypes = {
   product_name: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    image: PropTypes.string,
  };