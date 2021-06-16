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
        console.log(response)
        this.setState({
            products: response.data
        })
    }


    addToCart = async (item) => {
        const { cartItems } = this.state;

        const response = await axios.post('http://127.0.0.1:8081/addtocart', {
            item
        })
        console.log(response);

        cartItems.push(item)
        this.props.addItems(cartItems)
        this.setState({
            cartItems
        })
    }

    updateCart(item) { }

    deleteItem(item) { }

    render() {
        const { products, cartItems } = this.state;
        console.log({ cartItems })
        return (
            products.length ? <div className="shopping-container">
                {products.map((item, index) => {
                    return (
                        <div className="bg-white m-4 item p-4 border text-center" key={index}>
                            <h6 className="font-weight-bold text-muted">{item.title}</h6>
                            <img src={item.image} alt={item.title} width="100" />
                            <p className="my-3 font-weight-bold">Price: ${item.price}</p>
                            <div className="d-flex justify-content-end ">
                                <button type="button" className="btn btn-link text-secondary">Details</button>
                                <button type="button" className="btn btn-outline-info addtocart" onClick={() => this.addToCart(item)}>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div> : <div className="text-primary font-weight-bold loading">Products Loading ...</div>
        )
    }
}

export default Home;