import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer class="footer-content">
        <div class="layer footer">
            <div class="container-fluid">
                <div class="row footer-top-inner-w3ls">
                    <div class="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <a href="index.html">R&B Models</a>
                        </h2>
                        <p class="my-3">Anos de experiência trouxeram para R&Bmodels a capacidade de oferecer um trabalho excepcional. Todos os trabalhos são feitos após um pré preparação dos modelos, para que tudo seja perfeito.</p>
                        <p>
                            Um sistema de atendimento único, a Físicos.com busca oferecer sempre o melhor, investindo cada vez mais em tecnologia para o conforto dos clientes.
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Horários de Atendimento</h3>
                            <hr/>
                            <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                <li>
                                    <p> Segunda - Sexta: 08:00 - 20:00</p>

                                </li>
                                <li class="my-2">
                                    <p> Sábados 08:00 - 13:00</p>

                                </li>
                                <li class="my-2">
                                    <p> Domingo e feriado apenas </p>
                                    <p> com agendamento prévio</p>

                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Entre em contato</h3>
                            <hr/>
                            <div class="last-w3ls-contact">
                                <p>
                                    <a href="mailto:exemplo@email.com">fisicos@models.com</a>
                                </p>
                            </div>
                            <div class="last-w3ls-contact my-2">
                                <p>+55 34 99999-0000</p>
                            </div>
                            <div class="last-w3ls-contact">
                                <p>Ou preencha o formulário
                                    <br/>na página <a href='/contact'>Contato</a></p>
                            </div>
                        </div>
                    </div>

                </div>

                <p class="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 Físicos.com. Todos os direitos reservados | Produzido por:
                    <a href="https://www.meninasdafisica.com.br/"> Meninas da Física </a>
                </p>
                <div class="w3ls-footer text-center mt-4">
                    <ul class="list-unstyled w3ls-icons">
                        <li>
                            <a href="https://www.facebook.com/meninasdafisica/">
							<span class="fa fa-facebook-f"></span>
						</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/meninasdafisica/">
							<span class="fa fa-twitter"></span>
						</a>
                        </li>
                    </ul>
                </div>
                <div class="move-top text-right"><a href="#home" class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
        )
    }
}
export default Footer