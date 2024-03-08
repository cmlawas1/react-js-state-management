import React, {useState} from 'react';
import './Items.css';

//formats the list of items to be printed
export default function ItemsList(props) {
    let items = props.data;

    const [cartItems, setCartItems] = useState([]);

    //adds item to cart
    const addToCart = (item) => {
        const newCartItem = {id: cartItems.length+1, name: item.name}; //gets relevant info for new cart item from item info
        setCartItems([...cartItems, newCartItem]); //appends new cart item to cartItems
        console.log(item.name + " is successfully added to cart.");
    }

    //deletes item in cart
    const deleteFromCart = (itemId) => {
        const index = cartItems.findIndex(item => item.id == itemId); //finds index of item in cartItems using id
        if (index != -1) { //if index exists
            const updatedCartItems = cartItems.filter(item => item.id != itemId); //remove item
            setCartItems(updatedCartItems.map(item => { //updates cartItems
                if (item.id > itemId) {
                    return { ...item, id: item.id - 1 }; //edits indices of items after deleted item so that there will be no duplication
                } else {
                    return item;
                }
            }));
        }
    }

    //returns the header that is a flex item
    return(
        <>
            <div class = "flex-body"> {/* flex container for the body of the page */}
                <div id = "items-list">
                    <div class = "cards-container">
                        {/* item card details and layout */}
                        {
                            items.map((item) => {
                                return <><div class = "item-container"><img class="item-pic" src={item.image}/><p class="item-name">{item.name}</p><button class="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button></div></>
                            })
                        }
                    </div>
                </div>

                {/* flex container with the cart contents on the right side */}
                <div className="cart-contents">
                    <h2>Shopping Cart (Total: {cartItems.length})</h2>
                    {/* cart details and layout */}
                    {
                        cartItems.map((cartItem) => {
                            return (
                                <div key={cartItem.id} className="cart-item">
                                    <span className="cart-item-name">{cartItem.name}</span>
                                    <span className="item-quantity">QTY: 1</span>
                                    <button className="delete-button" onClick={() => deleteFromCart(cartItem.id)}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}