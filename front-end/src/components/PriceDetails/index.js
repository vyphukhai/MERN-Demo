import React from 'react';
import Card from "../../components/UI/Card/index";
import './style.css';

export default function PriceDetails(props) {
    return (
        <Card headerLeft={"Price Details"} style={{ maxWidth: "380px" }}>
          <div
            style={{
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <div className="flexRow" style={{ margin: "10px 0" }}>
              <div>Price ({props.totalItem} items)</div>
              <div >{props.totalPrice}</div>
            </div>
            <br></br>
            <div className="flexRow" style={{ margin: "10px 0px" }}>
              <div>Delivery Charges</div>
              <div>FREE</div>
            </div>
            <br></br>
            <div className="flexRow" style={{ margin: "10px 0" }}>
              <div className='total'><b>Total Amount</b></div>
              <div className='total'><b>{props.totalPrice}</b></div>
            </div>
          </div>
        </Card>
      );
    };
