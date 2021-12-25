import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage,getProductsBySlug } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card/index";

export default function ProductPage(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;
  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  const url = (e) => {
    return `http://localhost:2000${e}`;
  };
  console.log(product)
  return (
    <div style={{ margin: "0 10px" }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}
            >
              <img src={url(banner.img)} alt="" />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {page.products &&
          page.products.map((product, index) => (
            <div>
              <Card key={index}>
                <img src={url(product.img)} alt="" />
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
