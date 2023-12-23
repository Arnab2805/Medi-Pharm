import React from 'react'

const CustomSection = () => {
  return (
    <>
    <div style={{ fontSize: '70px', color: 'white', marginLeft: '140px', marginBottom: '50px' }}>
    Discounted Products Today
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card border-success rounded-5" style={{ borderWidth: '2px' }}>
            <div className="card-body">
            <div className="discount-level bg-danger text-light rounded-5"
                  style={{ marginLeft:'13px', marginTop:'2px', width: '40%', height:'8%', padding: '5px', position: 'absolute', top: 0, left: 0, fontSize: '12px', alignItems:'center', display:'flex' }}>
                  20% discount
                </div>
                <a href="#">
                  <img src="/images/Vicks-Vaporub.jpg" alt="Product" style={{ width: '100%', marginTop: '20%' }}/>
                </a>
            <h6 style={{ marginLeft: '35px' }}>Vicks Vapo Rub</h6>
            <div style={{ marginLeft: '15px' }}>
              <b>Best Price: </b>Rs. 290.00
            </div>
            <button type="button" className="btn btn-light btn-sm border-success rounded-5 d-block" style={{ borderWidth: '2px', marginLeft: '37px', marginTop: '20px' }}>
        Add to Cart &#128722; </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-success rounded-5" style={{ borderWidth: '2px', height: '355px'}}>
            <div className="card-body">
            <div className="discount-level bg-danger text-light rounded-5"
                  style={{ marginLeft:'13px', marginTop:'2px', width: '40%', height:'8%', padding: '5px', position: 'absolute', top: 0, left: 0, fontSize: '12px', alignItems:'center', display:'flex' }}>
                  15% discount
                </div>
                <a href="#">
                  <img src="/images/Protinex.jpg" alt="Product" style={{ width: '100%', marginTop: '20%' }}/>
                  </a>
            <h6 style={{ marginLeft: '60px', marginTop:'35px' }}>Protinex</h6>
            <div style={{ marginLeft: '8px', marginTop:'35px'}}>
              <b>Best Price: </b>Rs. 1,240.00
            </div>
            <button type="button" className="btn btn-light btn-sm border-success rounded-5 d-block" style={{ borderWidth: '2px', marginLeft: '37px', marginTop: '20px' }}>
        Add to Cart &#128722; </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-success rounded-5" style={{ borderWidth: '2px' }}>
            <div className="card-body">
            <div className="discount-level bg-danger text-light rounded-5"
                  style={{ marginLeft:'13px', marginTop:'2px', width: '40%', height:'8%', padding: '5px', position: 'absolute', top: 0, left: 0, fontSize: '12px', alignItems:'center', display:'flex' }}>
                  5% discount
                </div>
                <a href="#">
                  <img src="/images/Moov.jpg" alt="Product" style={{ width: '100%', marginTop: '20%' }}/>
                </a>
            <h6 style={{ marginLeft: '67px' }}>Moov</h6>
            <div style={{ marginLeft: '18px' }}>
              <b>Best Price: </b>Rs. 42.00
            </div>
            <button type="button" className="btn btn-light btn-sm border-success rounded-5 d-block" style={{ borderWidth: '2px', marginLeft: '37px', marginTop: '20px' }}>
        Add to Cart &#128722; </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-success rounded-5" style={{ borderWidth: '2px' }}>
            <div className="card-body">
            <div className="discount-level bg-danger text-light rounded-5"
                  style={{ marginLeft:'13px', marginTop:'2px', width: '40%', height:'8%', padding: '5px', position: 'absolute', top: 0, left: 0, fontSize: '12px', alignItems:'center', display:'flex' }}>
                  10% discount
                </div>
                <a href="#">
                  <img src="/images/Savlon.jpg" alt="Product" style={{ width: '100%', marginTop: '20%' }}/>
                  </a>
            <h6 style={{ marginLeft: '67px' }}>Savlon</h6>
            <div style={{ marginLeft: '15px' }}>
              <b>Best Price: </b>Rs. 307.00
            </div>
            <button type="button" className="btn btn-light btn-sm border-success rounded-5 d-block" style={{ borderWidth: '2px', marginLeft: '37px', marginTop: '20px' }}>
        Add to Cart &#128722; </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default CustomSection