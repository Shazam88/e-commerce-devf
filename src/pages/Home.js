import React from 'react'
import './../styles/home.css'


export const Home = () => {
    return (
        <div>
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
                    <div className="card" style={{ width: "15rem", padding: "15px" }}>
                        <img src="./../../home.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Manera segura de realizar compras desde casa.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15rem", padding: "15px" }}>
                        <img src="./../../money.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Nosotros sí cuidamos tu dinero con mejores precios.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15rem", padding: "15px" }}>
                        <img src="./../../people.svg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Siempre con las mejores medidas de seguridad.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid reticula">
                <div className="row">

                <div class="about contaImg"></div>
                    


                </div>
            </div>
            <div className="container">
                <div className="cVideo">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/I26xiKYK-cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="question">
                        <h3>¿Qué es un e-commerce?</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
