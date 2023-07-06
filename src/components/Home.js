import React from "react";

function Home(){
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://www.vhv.rs/dpng/d/601-6018750_add-to-cart-add-to-cart-icon-transparent.png" />
            </div>
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
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;