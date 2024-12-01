import { data } from "./data.js";
import { useParams } from 'react-router-dom';

function Product(){
    console.log(data)

    const { productId } = useParams();
    const product = data.find((o) =>o.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className="product px-5">
            <h1 className="text-left p-5 product-name">{product.name}</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-8 mb-5">
                        <div id="carouselExampleDark" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={product.images[0]} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={product.images[1]} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={product.images[2]} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 text-center">
                        <img src={product.images[3]}width="80%"/>
                        <br />
                        <img className="p-4" src={product.images[4]} width="60%" />
                        <br />
                        <h6 className="text-start text-center mx-5 product-price">{product.price}</h6>
                        <br />
                        <button className="button-buy-blue">Purchase</button>
                        <br />
                        <button className="button-buy mt-4">Add to Cart</button>
                        <br />
                        <button className="button-buy mt-4">Add to Wishlist</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p className="py-5 product-description">{product.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <h3>Acheivements</h3>
                        <div class="container text-center">
                            <div className="row">
                                <div className="col acheivements1 col-md-3 col-sm-6 col-6 p-4">
                                    <img src={product.achievements[0].img} width={"100%"} />
                                    <div className="p-3">
                                        <h6 className="acheivement-title">{product.achievements[0].title}</h6>
                                        <p className="acheivement-description">{product.achievements[0].description}</p>
                                    </div>
                                </div>
                                <div className="col acheivements2 col-md-3 col-sm-6
                                col-6  p-4">
                                    <img src={product.achievements[1].img} width={"100%"} />
                                    <div className="p-3">
                                        <h6 className="acheivement-title">{product.achievements[1].title}</h6>
                                        <p className="acheivement-description">{product.achievements[1].description}</p>
                                    </div>
                                </div>
                                <div className="col acheivements3 col-md-3 col-sm-6 
                                col-6 p-4">
                                    <img src={product.achievements[2].img} width={"100%"} />
                                    <div className="p-3">
                                        <h6 className="acheivement-title">{product.achievements[2].title}</h6>
                                        <p className="acheivement-description">{product.achievements[2].description}</p>
                                    </div>                                </div>
                                <div className="col acheivements4 col-md-3  col-sm-6 
                                col-6 p-4">
                                    <img src={product.achievements[3].img} width={"100%"} />
                                    <div className="p-3">
                                        <h6 className="acheivement-title">{product.achievements[3].title}</h6>
                                        <p className="acheivement-description">{product.achievements[3].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;