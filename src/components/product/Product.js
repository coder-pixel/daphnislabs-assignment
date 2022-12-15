import React from 'react'
import "./product.css"

const Product = () => {
    return (
        <div className='product'>
            <div className="productImg">
                <img src="./images/asset1.jpg" alt="" />
            </div>

            <div className="productText">
                <h2 className="productTitle">Favipiravir 400mg (Fabiflu) Tablets</h2>
                <h2 className="productPrice">Rs 1,775 <span>/ stripe</span></h2>

                <div className="productAddress">
                    <h2>Glenmark Pharmaceutical Limited</h2>
                    <span>Parvat Patiya, Surat, Gujrat</span>
                </div>

                <span className='divider'></span>

                <div className="contact">
                    <span className="material-symbols-outlined">send</span>
                    <span className='parentSpan'>Contact Supplier  <span className='childSpan'></span></span>
                </div>

            </div>
            <span className="bottomBg"></span>
        </div>
    )
}

export default Product