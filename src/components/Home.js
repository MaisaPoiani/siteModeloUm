import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
            <div>      
{/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Físcos.com</h2>
								<p>Sua melhor opção em modelos.</p>
								<Link to='/contact' class="btn">Mensagem</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg2">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">Estilo e profissionalismo </h4>
								<p>Muito mais que modelagem, experiência!</p>
								<Link to='/about' class="btn">Saiba Mais</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navigation"> 
			<div>
			  <label for="slides_1"></label>
			  <label for="slides_2"></label>
			</div>
		</div>
	</div>
</div>
  {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
    <section class="content-info py-5" id="about">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Sobre</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">

                <div class="title-desc text-center px-lg-5">
					<img src="assets/images/sobre.jpeg" alt="news image" class="img-fluid" />
                    <p class="px-lg-5">A R&Bmodels, segmento da agência Físicos.com, oferece a oportunidade para os clientes encontrarem em um único trabalho uma grande capacidade de adaptação dos modelos ao ambiente e coleção.Além disso, oferece uma gama de facilidade para os seus clientes, como por exemplo a praticidade.
						Prezando sempre um atendimento de qualidade e eficiente, sem burocracias.</p>
                    
					<Link to="/about" class="btn mt-lg-4 mt-3 read scroll" role="button">Saiba Mais</Link>
                </div>
            </div>
        </div>
    </section>
     {/* <!-- //banner bottom grids --> */}
 
	{/* <!-- opções -->  */}
<section class="pricing py-5">	
	<div class="container py-md-5">
		<h3 class="heading text-capitalize text-center mb-3 mb-sm-5">Opções</h3>
		<div class="row pricing-grids">
			<div class="col-lg-6  mb-lg-0 mb-5">
				<div class="padding">
					 <h3>EXPERIÊNCIAS RAFAEL COSTA</h3>
					{/* <!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio no estúdio</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$7</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item my-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio na praia</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$10</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio em salão</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$15</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Apresentação em eventos </h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$15</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio espaço urbano</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$20</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio personalizado</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$25</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends --> */}
				</div>
			</div>
			<div class="col-lg-6  mb-lg-0 mb-5">
				<div class="padding">
					<h3>EXPERIÊNCIAS BRUNO ZANATTA</h3>
					{/* <!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio no estúdio</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$27</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item my-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio espaço urbano</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$21</h6>
							</div>
						</div>
						
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio na natureza</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$25</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio no exterior</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$28</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Ensaio personalizado</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$30</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					<div class="menu-item mt-4">
						<div class="row border-dot no-gutters">
							<div class="col-8 menu-item-name">
								<h6>Apresentação em eventos</h6>
							</div>
							<div class="col-4 menu-item-price text-right">
								<h6>$35</h6>
							</div>
						</div>
					</div>
					{/* <!-- Item ends --> */}
				</div>		
			</div>
					
		</div>		
	</div>		
</section>
   {/* <!-- //pricing -->
//   <!--/order-now--> */}
    <section class="order-sec py-5">
        <div class="container py-md-5">
            <div class="test-info text-center">
                <h3 class="tittle order">
                    <span>LIGUE E AGENDE JÁ</span>Nossa equipe espera ansiosamente para atende-lo!</h3>
                <h4 class="tittle my-2">+55 34 99999-0000  </h4>

                <div class="read-more mx-auto m-0 text-center">
					<Link to="/contact" class="read-more scroll btn">Mais opções de contato</Link> 
				</div>
            </div>
        </div>
    </section>
    {/* <!--//order-now-->
//  <!--/feedbacks--> */}
    <section class="testimonials py-5" id="testimonials">
        <div class="container py-md-5">
               <h3 class="heading text-center mb-3 mb-sm-5">Feedbacks</h3>
            <div class="row mt-3">

                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>O novo conceito de modelos masculinos, nunca vi nada igual.</p>
                        <h3 class="mt-md-4 mt-3">Gisele Bündchen</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/gisele.jpg" class="img-fluid" alt="user-image"/>
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="https://www.facebook.com/Gisele">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="https://twitter.com/giseleofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                    <div class="test-info">

                        <p>Talvez nem a minha esposa faça uma modelagem tão bem feita.</p>
                        <h3 class="mt-md-4 mt-3">Tom Brady</h3>
                        <div class="test-img text-center mb-3">
                            <img src="assets/images/tom.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="https://www.facebook.com/TomBrady">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="https://twitter.com/tombrady">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 test-grid text-left px-lg-3">
                    <div class="test-info">

                        <p>Mereciam dividir o título de Mister Universo</p>
                        <h3 class="mt-md-4 mt-3">Anitta</h3>

                        <div class="test-img text-center mb-3">
                            <img src="assets/images/anitta.jpg" class="img-fluid" alt="user-image" />
                        </div>
                        <div class="mobl-footer test-soc text-center">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="https://www.facebook.com/AnittaOficial">
							<span class="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li class="mx-1">
                                    <a href="https://twitter.com/Anitta?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
							<span class="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

 {/* <!--//feedbacks-->
// <!-- footer --> */}
    
    </div>
        )
    }
}
export default Home