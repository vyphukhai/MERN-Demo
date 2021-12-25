import React from "react";
import Layout from "../../components/Layout";
import ProductStore from "./productStore";
import ProductPage from './productPage'
import getParams from '../../utils/getParams'
import "./style.css";
import ClothingAndAccessories from "./ClothingPage";

export default function ProductListPage(props) {
  const renderProduct = ()=>{
    console.log(props);
    const params = getParams(props.location.search);
    console.log(params);
    let content = null;
    // eslint-disable-next-line default-case
    switch(params.type){
      case 'store':
        content = <ProductStore {...props}/>;
        break;
      case 'page':
        content = <ProductPage {...props}/>
        break;
      default:
        content = <ClothingAndAccessories {...props}/>;

    }
    return content;
  }
  return (
    <Layout>
      {renderProduct()}
    </Layout>
  );
}
