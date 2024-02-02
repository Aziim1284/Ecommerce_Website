import React from 'react'
import logo from '../assets/logo/logo.svg'
import facebook from '../assets/socials/facebook.svg'
import twitter from '../assets/socials/twitter.svg'
import instagram from '../assets/socials/instagram.svg'
import NavLinks from './NavLinks'

const socals_list = [
    {id:1, name:'facebook', img:facebook},
    {id:2, name:'twitter', img:twitter},
    {id:3, name:'instagram', img:instagram},
]

function Socals() {
    return(
        socals_list.map(item=>(
            <img key={item.id} src={item.img} alt={item.name} className='img_socials' />
        ))
    )
}

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footerUnderLine' />
        <div className='boxRow space_between footerLink'>
           <h1 className='front'>AudioSphere</h1>
            <ul className='boxRow gap_3'>
                <NavLinks />
            </ul>
        </div>

        <div className='gap_3 footerSocals'>
            <div className='w_50 gap_3 boxColumn left'>
                <p className='header_body opacity_50'>
                AudioSphere - where your audio needs find a home. Our small team of music aficionados and sound specialists is dedicated to maximizing your personal audio enjoyment. Experience it for yourself at our demo facility, open 7 days a week                </p>
                <p className='text_body_white opacity_50 w_100'>
                    Copyright 2024. All Rights Reserved
                </p>
            </div>
            <div className='box_row gap_1 right w_50'>
                <Socals />
            </div>
        </div>
    </footer>
  )
}

export default Footer
