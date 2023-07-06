import React from "react";
import { addToCart } from "../Services/Actions/actions";

function Home(props){
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://s3b.cashify.in/gpro/uploads/2019/07/04134341/apple-iphone-x-front.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        IPhone X
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'iphonex'})}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;