import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div>
                {/* <!-- banner --> */}
<section class="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->
<!-- page details --> */}
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
			<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">About Us</li>
	</ol>
</div>
{/* <!-- //page details -->
	<!--about-mid --> */}
    <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Sobre os Modelos</h3>
            <div class="row mid-grids mt-lg-5 mt-3">
                <div class="col-md-5 content-w3pvt-img">
                    <img src="assets/images/rafa.jpeg" alt="" class="img-fluid" />
                </div>
                <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 class="mt-1">O físico descontraído</h5>
                    <h4>Rafael
                        <br/>Costa</h4>
                    <p class="mt-2 text-left">Com 21 anos e 1,75 de altura, Rafael impressiona com seu tipo físico e versatilidade, se adaptando a qualquer ambiente proposto para uma sessão que com certeza será glamouroza!</p>

                </div>


            </div>
            <div class="row mid-grids mt-lg-5 mt-3 py-3">

                <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                    <h5 class="mt-1">O Físico Sério</h5>
                    <h4>Bruno 
                        <br />Zanatta</h4>
                    <p class="mt-2 text-left">Bruno tem muito a seu favor, a altura, o tipo misterioso e os óculos que dão aquele charme a mais são suas armas secretas para fazer qualquer um se apaixonar, anuncie seu produto e alavanque suas vendas!</p>

                </div>
                <div class="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                    <img src="assets/images/bruno.jpeg" alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //about-mid -->
<!-- states --> */}
  <section class="stats-count">
  <div class="overlay py-5">
    <div class="container py-md-5">
      <div class="row text-center">
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
          <h5>700 +</h5>
          <h6 class="pt-2">Clientes</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>250 +</h5>
          <h6 class="pt-2">Prêmios</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>150</h5>
          <h6 class="pt-2">Estilos</h6>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
          <h5>125</h5>
          <h6 class="pt-2">Planos</h6>
        </div>
      </div>
    </div>
	</div>
  </section>
  {/* <!--//states -->

 <!--//team --> */}
    <section class="banner-bottom  py-5">
        <div class="container py-md-5">
			<h3 class="heading text-center mb-3 mb-sm-5">Nosso Time Administrativo</h3>
            <div class="row mt-lg-5 mt-4">
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/t1.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">JAMES Men spa</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                    <div class="team-img mb-4">
                        <img src="assets/images/t2.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">DEEN MUSTACHIO</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/t3.jpg" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3"> CLINT HAIRISTA</h3>
                        <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                        <ul class="list-unstyled team-icons mt-4">
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="t-icon">
                                    <span class="fa fa-twitter"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>

            </div>
	
        )
    }
}
export default About