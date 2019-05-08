import React, { Component } from 'react';

import MyNavbar from '../Navbar';
import Footer from '../Footer'
import './homePage.css'


class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <MyNavbar/>
            <div className="gallery-wrap">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-3"></div>
                <div class="item item-4"></div>
                <div class="item item-5"></div>
                <p className='bannerText'>Le Grand Bleu</p>
            </div>
            

                <div className="container">                    
                    <h1>Votre meilleur Fast Food du coin</h1>
                    <p></p>
                    
                </div>
                <div>
                <div className="parallax" id="trans1">
                    <div class="txt left">Nos ingrédients</div>
                </div>

                <div className="content">
                    <p>Produits halal bla bla</p>
                    <p>Choisis avec soin bla bla</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iusto minus aliquid quaerat? Saepe inventore deserunt hic ullam dolorum esse, consectetur aliquid qui sapiente odit iure sit illo minus ipsa!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iusto minus aliquid quaerat? Saepe inventore deserunt hic ullam dolorum esse, consectetur aliquid qui sapiente odit iure sit illo minus ipsa!</p>
                </div>

                <div className="parallax" id="trans2">
                    <div class="txt left">Notre personnel / Nos valeurs</div>
                </div>
                <div className="content">
                <p>Nous veillons sur votre confort</p>
                    <p>Nous veillons sur votre santé</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iusto minus aliquid quaerat? Saepe inventore deserunt hic ullam dolorum esse, consectetur aliquid qui sapiente odit iure sit illo minus ipsa!</p>
                    <p>Nous avons des valeurs</p>
                    </div>
            </div>
        <Footer/>
        </div> );
    }
}
 
export default Accueil;