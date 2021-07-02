import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Gallery extends Component{
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
		<li class="breadcrumb-item active" aria-current="page">Galeria</li>
	</ol>
</div>
    <section class="gallery py-5" id="gallery">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Alguns Trabalhos...</h3>
            <div class="gallery-content">
                <div class="row">
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal1"><img src="assets/images/g1.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal2"><img src="assets/images/g2.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal3"><img src="assets/images/g3.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal4"><img src="assets/images/g4.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal5"><img src="assets/images/g5.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal6"><img src="assets/images/g6.jpeg" alt="aegis" class="img-fluid mt-4" /></a>
                    </div>

                </div>
                <div id="gal1" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g1.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal2" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g2.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal3" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g3.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal4" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g4.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal5" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g5.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal6" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g6.jpeg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>

            </div>
        </div>


    </section>
    </div>
        )
    }
}
export default Gallery