import React from 'react';
import React from 'react';
import './style.css'; // Importe o arquivo CSS para o componente Home

const Home = () => {
    return (
        <div>
            {<>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
                />
                <title>CompanyTagLine</title>
                <link rel="stylesheet" href="style.css" />
                {/*cabeçalho do site*/}
                <nav>
                    <img src="PngItem_7053235.png" alt="" />
                    <div className=" cabeçalho">
                        <ul>
                            <li>
                                <a href="#">Início</a>
                            </li>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Produtos</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section id="inicio">
                    <h2>A tecnologia no seu bolso</h2>
                    <p>
                        Explore nossa seleção de celulares incríveis. Encontre o modelo perfeito
                        para você. Desfrute de recursos avançados, design elegante e excelente
                        desempenho. Descubra a próxima geração de tecnologia móvel em nossa loja
                        online. Encontre seu celular dos sonhos hoje mesmo!
                    </p>
                    <div className="btn">
                        <a className="btn2" href="#">
                            Leia mais
                        </a>
                        <a className="btn3" href="#">
                            ServiçosX
                        </a>
                    </div>
                </section>
                <section id="Caract">
                    <h1>Serviços incríveis</h1>
                    <p>Não perca tempo e garanta já seu smartphone de última geração</p>
                    <div className="icons-caract">
                        <div className="icons">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAThJREFUSEvd1bsuRVEQBuDvdAqdawgST6BUUpDwAkgUCglPQLyAQuIBJEShoVQSCQW1RqtwS9wbPTKydnKyhbOPc3ZjqnWZ9f+zZv5Zq6Jkq5SM738RHGOkSSk7wWhgVafoo0ngGcwX9m8EL2gvSPqMtpxvTYJdzBQkCN+pogQPOMASYhzWjU0Mp/kZ5vFUtb+OMXSktR9vkJdugJ8nkuogbzCE11zkWS0LE+xgFvtYSWAR7QQ2sNgowR160IXHBDaIS1xjoFGCW/SiDzEO68dVmsd6tdWdom3MpRQtowWrmMRWKnZDBKGKC3TmIo3bRJGjX+oiCGkeJpnep5NRg0ym7zjFQk7GaxhPtYpjNRttD9NlNFqGWc9T8YbWop1cMOiabt9S1Mzn+ig9G//sR6uZ1L84lP7pfwLDt0UZg0iZAwAAAABJRU5ErkJggg=="
                                width="40px"
                            />
                            <h3>Valorizamos seu dinheiro!</h3>
                            <p>
                                Nossos celulares possuem preços únicos no mercado e ainda podem sofrer
                                descontos inacreditáveis.
                            </p>
                        </div>
                        <div className="icons">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV5JREFUSEvt1LErhWEUBvAfA8pmMQjJgPwHDCYDAxZJKZMMFspiNGFRyiBlMWGTIpvJZjGwCZmUGJQyoLfeq+/ePvd+93I33/T2veec5zzPed5To8pfTZXrywLQhyn0ogeNuMIJdnBXrMliAA3YwnSRAu9YwTI+0+J+Agj/TzEYk/ZxgHO8oR9jmIn3e5gsB2AB63iO8hz/wGICu6jDPDYK49IYBK0vUI8RHJUwwhBCAy9oxWsyPg1gE3Oxs2L6J+sEgAA0i+1SAGcYwHB0ShYnj8cZHcbZfOekMXhCE5rxmKU6WvCAe7SXYpCzW5Y3kqsVYj+iVWurARBqpjaW7HIUq+iOHYS7UmyS97nzNRajs/JWRdAwaJmkXQlAyL9BZzgkGRQ+9UoZJBv8B8gzQZrEeRKFvd72R0O+RUfhkINN19D1S5teYinNphm3Qnlh5ayD8ionZKgoMWtS1Rl8AcMvTxmOxWwzAAAAAElFTkSuQmCC"
                                width="40px"
                            />
                            <h3>Suporte 24/7</h3>
                            <p>Estamos disponíveis a qualquer momento para sanar suas dúvidas.</p>
                        </div>
                        <div className="icons">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT1JREFUSEvN1CEsRlEYxvHfNyMQbaaZTBNIkiJogsJIhqIwySbaREwwQzFBExRBMoJEUBTFRjCbYAI7du929+377j1cn3nLDec57/8853nPrWhwVRrc358CPhI3r9jG/G+4yzpIAWnfIZyWhdS6okWs4hgjjQC04wFN6MJ9GUi9kPcxXqLxIcbC/nqAAZyXANygNw8Q1q7Rg0nsRcKCbgJLSY6572AaW7hEfwSgDU9oQSceixy0JqLw7cNVAWQKOzjBcKotesnrmMMuQoO8OsNgEm4I+auKACGDkMUbOvBSh9CNOzwnuvdYQNClJ1vAWh3ACpaTzGaymiIHQRvm+SAi5CAJ433xXUAzbhGuIa+OMFotiHEQefjasljABmaxmUxVtlveWuEUpY2yv/LqQ+WtRQMa7uDHOcRm8H8Bn2QFNRlXu2umAAAAAElFTkSuQmCC"
                                width="40px"
                            />
                            <h3>Variedades</h3>
                            <p>
                                Encontre sua marca favorita no nosso site. E caso não tenha uma
                                favorita, pode ter agora!
                            </p>
                        </div>
                    </div>
                </section>
                <section id="populares">
                    <h1>Populares</h1>
                    <p>Veja os queridinhos do momento e adquira agora mesmo!</p>
                    <div className="popular-box">
                        <div className="cells">
                            <img
                                src="4933_smartphone-samsung-galaxy-s21-fe-5g-128gb-6gb-ram-processador-octa-core-camera-traseira-tripla-tela-6_m1_638152699368430142.jpg"
                                alt=""
                            />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>Samsumg S21</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$6.999,00</div>
                        </div>
                        <div className="cells">
                            <img src="51xnSf++LlL._AC_UF1000,1000_QL80_.jpg" alt="" />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>Xiaomi Mi 11</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$3.499,00</div>
                        </div>
                        <div className="cells">
                            <img src="1xg.webp" alt="" />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>Iphone 13 pro max</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$7.999,00</div>
                        </div>
                        <div className="cells">
                            <img src="6191aDbiwjL._AC_UF1000,1000_QL80_.jpg" alt="" />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>Google 6 pixel Pro</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$5.499,00</div>
                        </div>
                        <div className="cells">
                            <img src="MotorolaMotoGPower2021__1_.png" alt="" />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>Motorola G Power</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$1.599,00</div>
                        </div>
                        <div className="cells">
                            <img src="i443132.webp" alt="" />
                            <div className="detalhes">
                                <span>Versão de lançamento global</span>
                                <h6>OnePlus 9 Pro</h6>
                                <div clss="estrelas">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <div className="cost">$4.999,00</div>
                        </div>
                    </div>
                </section>
                <section id="registro">
                    <div className="reminder">
                        <p>Registra-se para ganhar um cupom exclusivo!</p>
                        <h1>Faça parte e aproveite!</h1>
                        <div className="tempo">
                            <div className="date">
                                17 <br /> dias
                            </div>
                            <div className="date">
                                23 <br /> horas
                            </div>
                            <div className="date">
                                10 <br /> min
                            </div>
                            <div className="date">
                                20 <br /> seg
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <h3>Cria uma conta e aproveite nossos preços!</h3>
                        <input type="text" placeholder="Nome" name="" id="" />
                        <input type="text" placeholder="Email" name="" id="" />
                        <input type="text" placeholder="Telefone" name="" id="" />
                        <div className="btn">
                            <a className="btn4" href="#">
                                Enviar
                            </a>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>Tops Produtos</h3>
                            <ul>
                                <li>
                                    <a href="#">Iphone 13 Pro max</a>
                                </li>
                                <li>
                                    <a href="#">Samsumg S21</a>
                                </li>
                                <li>
                                    <a href="#">Xioami Mi 11</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Contato</h3>
                            <ul>
                                <li>
                                    <a href="#">Telefone: (123) 456-7890</a>
                                </li>
                                <li>
                                    <a href="#">Email: Cellcom@gamil.com</a>
                                </li>
                                <li>
                                    <a href="#">Endereço: Rua Principal, 123</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Informações</h3>
                            <ul>
                                <li>
                                    <a href="#">Termos de Serviço</a>
                                </li>
                                <li>
                                    <a href="#">Política de Privacidade</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Redes Sociais</h3>
                            <ul>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
            }
        </div>
    );
}

export default Home;
