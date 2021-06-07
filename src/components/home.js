import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
        //API calls are asynchronus
        //JSON ---- Array of Objects

        // fetch('https://fakestoreapi.com/products') // GET method
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         this.setState({
        //             products: data
        //         })
        //     })


        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json();
        // this.setState({
        //     products: data
        // })


        const response = await axios.get('https://fakestoreapi.com/products') // GET method
        console.log(response)

        this.setState({
            products: response.data
        })
    }


    async addToCart(item) {
        // fetch('https://fakestoreapi.com/products', { // Add to cart
        //     method: "POST",
        //     body: JSON.stringify(item) //payload
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))


        // const response = await fetch('https://fakestoreapi.com/products', { // Add to cart
        //     method: "POST",
        //     body: JSON.stringify(item) //payload
        // })
        // const data = await response.json()



        // axios.post('https://fakestoreapi.com/products', { item }
        // )
        //     .then(data => console.log(data))


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
            <div className="container">
                {products.map((item, index) => {
                    return (<div className="bg-white my-4 py-4">
                        <p>{item.title}
                            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                        </p>
                        <img src={item.image} alt={item.title} width="100" />
                        <p>Price: ${item.price}</p>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => this.addToCart(item)}>Add to cart</button>
                            <button type="button" className="btn btn-warning mx-2" onClick={() => this.updateCart(item)}>update product</button>
                            <button type="button" className="btn btn-danger mx-2" onClick={() => this.deleteItem(item)}>Delete product</button>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}

export default Home;