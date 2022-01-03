import React from 'react'
import FooterPage from '../Footer'
import Header from '../Header'
import MenuHeader from '../MenuHeader'

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <MenuHeader/>
            {props.children}
            
        </div>
    )
}
