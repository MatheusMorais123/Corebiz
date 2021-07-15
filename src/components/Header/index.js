import React from 'react'
import './style.scss';
import logo from '../../assets/img/logo.png';
function  header({countProducts}) {
    return (
        <section id="top">
            <div className="container">
                <nav>
                    <h1>
                        <img src={logo}/>
                        <i><p>{countProducts}</p></i>
                    </h1>
                    <form>
                        <input name="search" type="text" placeholder="O que você está procurando ?"/>
                    </form>
                    <i className="mobile"></i>
                    <ul>
                        <li><a>Minha conta</a></li>
                        <li><i></i><a>{countProducts}</a></li>
                    </ul>
                </nav>
            </div>
            <div className="banner">
               <div className="container">
               <div className="text-banner">
                    <h2>
                        Olá, o que você está buscando ?
                        <p>Criar ou migrar seu 
                            <br />
                            e-commerce ?
                        </p>
                    </h2>
                </div>
               </div>
            </div>
        </section>
    )
}
export default header
