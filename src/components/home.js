import React, { Component } from 'react';
import axios from 'axios';

import '../comp.css';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            products: [],
            cartItems: []
        }
    }


    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:8081/products') // GET method
        this.setState({
            products: response.data
        })
    }


    addToCart(item) { }

    updateCart(item) { }

    deleteItem(item) { }

    render() {
        const { products } = this.state;
        if (!products.length) {
            return <div className="text-primary font-weight-bold loading">Loading ...</div>
        }
        return (
            <div className="shopping-container">
                {products.map((item, index) => {
                    return (<div className="bg-white m-4 item p-4 border text-center" key={index}>
                        <p className="font-weight-bold text-muted">{item.title}</p>
                        <img src={item.image} alt={item.title} width="100" />
                        <p className="my-3 font-weight-bold">Price: ${item.price}</p>
                        <div className="d-flex justify-content-end ">
                            <button type="button" className="btn btn-link text-secondary">Details</button>
                            <button type="button" className="btn btn-outline-info addtocart" onClick={() => this.addToCart(item)}>Add to cart</button>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}

export default Home;