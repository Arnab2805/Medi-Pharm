import React from 'react'

const CustomGrid = () => {
  return (
    <>
    <p className="text-secondary" style={{ marginLeft: '105px', marginTop: '55px' }}>
        OUR PRODUCTS
    </p>
    <h4 style={{ color: '#41B675', marginLeft: '105px' , color:'yellow'}}>
        SHOP BY CATEGORIES
    </h4>
    <div className="container-sm" style={{ marginTop: '70px', marginBottom: '70px' }}>
      <div className="row">
        <div className="col">
          <a href="#">
            <img src="/images/product-1.jpg" className="img-fluid" alt="Product 1" />
          </a>
        </div>
        <div className="col">
          <a href="#">
            <img src="/images/product-2.jpg" className="img-fluid" alt="Product 2" />
          </a>
        </div>
        <div className="col">
          <a href="#">
            <img src="/images/product-3.jpg" className="img-fluid" alt="Product 3" />
          </a>
        </div>
        <div className="col">
          <a href="#">
            <img src="/images/product-4.jpg" className="img-fluid" alt="Product 4" />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default CustomGrid