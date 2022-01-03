import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from "../../images/1.png";
import pic1 from "../../images/12.png";
import pic2 from "../../images/Aseri.png";
import pic3 from "../../images/1200-44-1200x44-3.png";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { getAllProduct } from "../../actions";
import { Link } from "react-router-dom";
import Rating from "../../components/UI/Rating";
import { generatePublicUrl } from "../../urlConfig";
import Price from "../../components/UI/Price";
export default function HomePage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const renderProduct = (products)=>{
    let myProducts = [];
    for(let product of products){
      myProducts.push(
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "#000",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3353)
                      </span>
                    </div>
                    <Price value={product.price} />
                  </div>
                </Link>
              
            </div>
          </div>
      )
    }
    return myProducts;
  }
  return (
    <Layout>
      <div style={{ margin: "0 10px", padding: "10px" }}>
        <Carousel renderThumbs={() => {}}>
          <div>
            <img style={{ width: "90%", height: "50%" }} src={pic1} alt="" />
          </div>
          <div>
            <img style={{ wwidth: "90%", height: "50%" }} src={pic2} alt="" />
          </div>
          <div>
            <img style={{ wwidth: "90%", height: "50%" }} src={pic} alt="" />
          </div>
        </Carousel>
        <div>
          <img
            style={{ width: "98%", height: "50%", padding: "20px" }}
            src={pic3}
            alt=""
          />
        </div>
      </div>
      <div 
        style={{
          display: "flex",
          boxShadow:'0 2px 2px -2px #2874f0',
          height:'100px'
        }}
      >
        <div style={{
          display: "flex",
          margin: "50px",
          fontSize: "20px",
        }}>
          
          <b>
           All Phone
          </b>
        </div>
        <div>
          <Form style={{display: 'flex',margin: '40px',
          fontSize: "20px"}}>
            {["sale off", "new","contribute 0%","monopoly"].map((type) => (
              <div
                style={{ display: "flex" }}
                key={`default-${type}`}
                className="mb-3"
              >
                <Form.Check
                style={{justifyContent: 'space-between',margin: '10px'}}
                  type="checkbox"
                  id={`default-${type}`}
                  label={`${type}`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
      <div className="rowPro">
      {renderProduct(product.products)}
      </div>
      
    </Layout>
  );
}
