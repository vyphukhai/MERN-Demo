import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByKey } from "../../actions";
import getParams from "../../utils/getParams";
import Price from "../../components/UI/Price";
import Rating from "../../components/UI/Rating";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import Layout from "../../components/Layout";
import './style.css';

export default function ProductPage(props) {
  const dispatch = useDispatch();
  console.log(props);
  const product = useSelector(state => state.product)
  console.log(product)
  const params = getParams(props.location.search);
  useEffect(()=>{
    dispatch(getProductByKey(params))
  },[])
  return (
    <Layout>
      <div className="textResult">Find {Object.keys(product.productSearch).length} result: </div>
    <div>
      {Object.keys(product.productSearch).map((key)=>{
        return (
          <div>
            
            <div style={{ display: "flex",  flexWrap:'wrap' }}>
              {product.productSearch[key].map((product) => (
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
              ))}
            </div>
          </div>
        )
          
      })  
      }
    </div>
    </Layout>
  );
}
