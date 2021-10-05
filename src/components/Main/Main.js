import React from 'react';
import './Main.css';
import data from '../../data';

const Main = () => {
  return (
    <main>
      <div>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                {/* image size: 680px by 830px */}
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  {/* example of empty star */}
                  {/* <span> <i className="fa fa-star-o"></i> </span>> */}
                  {/* example of half empty star */}
                  {/* <span> <i className="fa fa-star-half-o"></i> </span> */}
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
