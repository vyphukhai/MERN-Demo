import React from 'react'
import {  Jumbotron,Container,Row,Col } from 'react-bootstrap'
import Layout from '../../components/layout';
import './style.css';
import { NavLink} from 'react-router-dom'


export default function Home() {


    return (
       <Layout sidebar>
           
           {/* <Jumbotron style={{margin: '6rem'}} className="text-center">
               <h1>Wellcome</h1>
           </Jumbotron> */}
       </Layout>
    )
}
