import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return(
			<div>
<section class="inner-page-banner" id="home">
</section>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
		<Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Contato</li>
	</ol>
</div>
    <section class="content-info py-5">
        <div class="container py-md-5">
            <div class="text-center px-lg-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Contate a agência:</h3>
                <div class="title-desc text-center px-lg-5">
                    <p class="px-lg-5 sub-wthree">Para contratar os modelos, entre em contato com a agência e faça seu orçamento, esperamos ansiosos pela sua mensagem!</p>
                </div>
            </div>
            <div class="contact-w3pvt-form mt-5">
                <form action="#" class="w3layouts-contact-fm" method="post">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Nome</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="form-group">
                                <label>Sobrenome</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="form-group">
                                <label>E-mail</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Mensagem</label>
                                <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div class="form-group mx-auto mt-3">
                            <button type="submit" class="btn submit">Enviar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>

    <div class="map-w3layouts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.291936352241!2d-48.26036498549255!3d-18.918467912534688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44574c062bad3%3A0x656d242f316ee167!2sUniversidade%20Federal%20de%20Uberl%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1625174114961!5m2!1spt-BR!2sbr" allowfullscreen=""></iframe>
    </div>
	</div>
        )
    }
}
export default Contact