import React from 'react'
import './../styles/home.css'


export const Home = () => {
    return (
        <div className="cContainer">
            <section>
                <div className="content">
                    <div className="title">
                        <h1>Bienvenido a tu tienda virtual</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Commodi ex placeat nemo itaque soluta.
                            Sunt soluta quam tenetur illum commodi debitis dolores libero ipsum ipsa?
                            Voluptatum tenetur ea consectetur in?</p>
                    </div>
                    <div className="img-MobDesk">
                        <img src="./../../banner-home.png" alt="..." />
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="cCards">
                    <div className="card" style={{ padding: "15px" }}>
                        <img src="./../../home.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Manera segura de realizar compras desde casa.</p>
                        </div>
                    </div>
                    <div className="card" style={{ padding: "15px" }}>
                        <img src="./../../money.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Nosotros sí cuidamos tu dinero con mejores precios.</p>
                        </div>
                    </div>
                    <div className="card" style={{ padding: "15px" }}>
                        <img src="./../../people.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Siempre con las mejores medidas de seguridad.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="iCommerce" style={{backgroundImage: "url(./../../e-commerce.jpg)"}}>

                </div>
                <div className="tinfoCommerce">
                    <h3>Somos <span>la mejor Web</span> para que realices tus compras de manera <span>fácil y segura</span>.</h3>
                </div>
            </div>
            <div className="container-fluid reticula">
                <div className="row">
                    <div class="about contaImg" style={{backgroundImage: "url(./../../payment.jpg)"}}></div>
                </div>
            </div>
            <div className="content">
                <div className="iCommerce icOrder" style={{backgroundImage: "url(./../../banner2.png)"}}>

                </div>
                <div className="tinfoCommerce tiOrder">
                    <h3>Somos <span>la mejor Web</span> para que realices tus compras de manera <span>fácil y segura</span>.</h3>
                </div>
            </div>
        </div>
    )
}
