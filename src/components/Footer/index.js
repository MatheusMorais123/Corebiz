
import React, {useState } from "react";
import axios from 'axios';
import './style.scss';
import phoneIcon from '../../assets/img/Icon.png'
import contactIcon from '../../assets/img/iconContact.png'

function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false); 
    const [invisibleEmail, setInvisibleEmail] = useState(true);
    
    async function HandleSubmit(event){
        event.preventDefault();
        setSucessEmail(true);
        const response = await axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
            name:name, 
            email:email
        });
        setInvisibleEmail(false)
    }
    return (
        <>
            <section id="newsletter">
                <div className="container">
                    {invisibleEmail && <form onSubmit={HandleSubmit}>
                        <h2>Participe de nossas news com promoções e novidades!</h2>
                        <input name="nome" required="required"  value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Digite seu nome" />
                        <input name="email" required="required" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail" />
                        <button type="submit">Eu quero!</button>
                    </form>}
                    {sucessEmail &&  <div className="newsletter-sucess">
                            <h2>Seu e-mail foi cadastrado com sucesso</h2>
                            <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                            <button>Cadastrar novo e-mail</button>
                        </div>
                    }
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="left">
                        <h2>Localização</h2>
                        <ul>
                            <li><p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP</p></li>
                            <li><p>brasil@corebiz.ag</p></li>
                            <li><p>+55 11 3090 1039</p></li>
                        </ul>
                    </div>
                    <div className="center">
                        <div className="options">
                            <button>
                                <img src={contactIcon}/>
                                Entre em contato
                            </button>
                            <button>
                                <img src={phoneIcon}/>
                                FALE COM O NOSSO
                                CONSULTOR ONLINE
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
