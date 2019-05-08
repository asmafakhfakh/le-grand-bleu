import React, { Component } from 'react';
import {Row, Col} from 'react-grid-system'

import MyNavbar from '../Navbar';
import Item from './item'
import './menuPage.css'
import {menusandwichs, 
    menusburgers, 
    menustacos, 
    menuspaninis, 
    menuenfant, 
    texmex, 
    assiettes, 
    sandwichs, 
    burgers, 
    paninis, 
    tacos, 
    extras, 
    desserts, 
    boissons} from "./menu"



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
        <MyNavbar/>
        <div className="parallax" id="trans3">
            <div class="txt left">Notre Menu</div>
        </div>

        <div className="content container">
            <p>Lorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iusto minus aliquid quaerat? Saepe inventore deserunt hic ullam dolorum esse, consectetur aliquid qui sapiente odit iure sit illo minus ipsa! Lorem</p>
        </div>

        <div className='container'>
            <h1>Menus sandwichs</h1>
            <Row>
                {menusandwichs.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>

            <br/>
            <h1>Menus burgers</h1>
            <Row>
                {menusburgers.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Menus tacos</h1>
            <Row>
                {menustacos.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Menus paninis</h1>
            <Row>
                {menuspaninis.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Menu enfant</h1>
            <Row>
                {menuenfant.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Tex-Mex</h1>
            <Row>
                {texmex.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Assiettes</h1>
            <Row>
                {assiettes.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Sandwichs</h1>
            <Row>
                {sandwichs.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Burgers</h1>
            <Row>
                {burgers.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Paninis</h1>
            <Row>
                {paninis.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Tacos</h1>
            <Row>
                {tacos.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Extras</h1>
            <Row>
                {extras.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Desserts</h1>
            <Row>
                {desserts.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
            
            <br/>
            <h1>Boissons</h1>
            <Row>
                {boissons.map((el,i)=><Col lg={4} md={6} sm={6}> <Item key={i} item={el}/> </Col>)}
            </Row>
        </div>
</div> );
    }
}
 
export default Menu;