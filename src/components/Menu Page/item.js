import React, { Component } from 'react';
import './menuPage.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div>
            <div class="card mb-3" style={{maxWidth : "540px"}}>
                <div class="row no-gutters">
                    {/* <div class="col-md-4">
                    <img src={item.src} class="card-img" alt=""/>
                    </div> */}
                    {/* <div class="col-md-8"> */}
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text"><small>{item.descript}</small></p>
                        <p class="card-text price">{item.price} €</p>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div> );
    }
}
 
export default Item;