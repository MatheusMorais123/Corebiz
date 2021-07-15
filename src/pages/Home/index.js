import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.scss';
function Home() {
    const [produtcs, setProdutcs] = useState([]);
    const [countProducts, setProducts] = useState(0);
    useEffect(() => {
        fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(res => {
                setProdutcs(res)
            }).catch((e) => {
                alert('error')
            });
    }, []);
    function ConvertPrice(number) {
        if (number) {
            return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }
    }
    return (
        <section>
            <Header countProducts={countProducts} />
            <div className="container">
                <h3>Mais Vendidos</h3>
                <div className="scroll-top">
                    <div className="row">
                        {produtcs && produtcs.map((e) => (
                            <div className="card">
                                <div className="thumbnail">
                                    <img src={e.imageUrl} />
                                </div>
                                <div className="description">
                                    <div className="product-name">
                                        <p>{e.productName}</p>
                                    </div>
                                    <div className="stars">
                                        <ReactStars
                                            count={e.stars}
                                            size={24}
                                            color={'#F8475F'}
                                        />
                                    </div>
                                    <div className="price">
                                        <strong> Por {ConvertPrice(e.price)}</strong>
                                        {e.installments.length > 0 ? (
                                            <>
                                                <p> ou em {e.installments[0]?.quantity}x de {ConvertPrice(e.installments[0]?.value)}</p>
                                            </>
                                        ) : null}
                                    </div>
                                    <button onClick={() => setProducts(countProducts + 1)} >Comprar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Home