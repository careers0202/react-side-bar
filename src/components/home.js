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


        const response = await axios.get('https://fakestoreapi.com/products') // GET method
        console.log(response)

        this.setState({
            products: response.data
        })
    }


    async addToCart(item) {
        const { email, password } = this.state;
        const resp = await axios.post('https://fakestoreapi.com/login', { email, password })
    }


    updateCart(item) {
        console.log('item', item)
        fetch(`https://fakestoreapi.com/products/${item.id}`, { // have to pass ID compulsory --- update item in cart
            method: "PUT",
            body: JSON.stringify({ //payload
                title: "chnage the title"
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    deleteItem(item) {
        fetch(`https://fakestoreapi.com/products/${item.id}`, { // have to pass ID compulsory --- delete item in cart
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        const { products } = this.state;
        return (
            <div className="shopping-container">
                {products.map((item, index) => {
                    return (<div className="bg-white m-4 item p-4">
                        <p className="font-weight-bold text-muted">{item.title}</p>
                        <img src={item.image} alt={item.title} width="100" />
                        <p className="my-3 font-weight-bold">Price: ${item.price}</p>
                        <div className="d-flex justify-content-end ">
                            <button type="button" class="btn btn-link text-secondary">Details</button>
                            <button type="button" className="btn btn-outline-info addtocart" onClick={() => this.addToCart(item)}>Add to cart</button>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}

export default Home;