import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug, getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import { IoPhonePortrait } from "react-icons/all";
import { Form } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { generatePublicUrl } from "../../../urlConfig";
import Price from "../../../components/UI/Price";
import Rating from "../../../components/UI/Rating";
import { Link } from "react-router-dom";
import "./style.css";

export default function ProductStore(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;
  console.log(product);
  console.log(props);
  const params = getParams(props.location.search);
  console.log(params);
  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  const url = (e) => {
    return `http://localhost:2000${e}`;
  };
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
    <>
      <Carousel style={{ padding: "10px" }} renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}
            >
              <img
                style={{ padding: "10px", height: " 300px" }}
                src={url(banner.img)}
                alt=""
              />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "50px",
            fontSize: "20px",
          }}
        >
          <b>
            <IoPhonePortrait /> {Object.keys(product.products).length}{" "}
            {page.title} Phone
          </b>
        </div>
        <div>
          <Form style={{ display: "flex", margin: "40px", fontSize: "20px" }}>
            {["sale off", "new", "contribute 0%", "monopoly"].map((type) => (
              <div
                style={{ display: "flex" }}
                key={`default-${type}`}
                className="mb-3"
              >
                <Form.Check
                  style={{ justifyContent: "space-between", margin: "10px" }}
                  type="checkbox"
                  id={`default-${type}`}
                  label={`${type}`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
      <div className="productRow">
        {product.products.length >0 ? renderProduct(product.products) : <h2 style={{font: 'center'}}>Not Product Found</h2>}
      </div>
    </>
  );
}
