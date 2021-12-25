import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions";
import { productConstants } from "../../actions/constants";
import {Nav, Link} from 'react-bootstrap';
import "./style.css";

export default function MenuHeader() {
    const category = useSelector(state => state.category);
    console.log(category)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCategory());
    },[]);

  const renderCategories = (categories) => {
    let myCategories = [];
    // console.log(categories);
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
            {
            category.parentId ? <Nav.Link href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Nav.Link>:
            <span><Nav.Link href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Nav.Link></span>
            }
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
          
        </li>
      );
    }
    return myCategories;
  };
  return <div className="menuHeader">
    
      <ul>
          {category.categories.length > 0 ? renderCategories(category.categories) : null}
          {/* {renderCategories(category.categories)} */}
          
      </ul>
      
  </div>;
}
