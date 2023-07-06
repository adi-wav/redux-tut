import React from "react";
import { addToCart } from "../Services/Actions/actions";

function Header(props){
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://www.vhv.rs/dpng/d/601-6018750_add-to-cart-add-to-cart-icon-transparent.png" />
            </div>
        </div>
    )
}

export default Header;