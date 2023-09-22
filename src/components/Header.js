import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { selectCars } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';
const Header = () => {
    const[burgerStatus , setburgerStatus] = useState(false);
    const cars = useSelector(selectCars)

  return (
    <Container>
        <a href = "/">
            <img src = "/images/logo.svg" alt="Tesla" />
        </a>

        <Menu>
            {cars && cars.map((car , index) => (
            <a key = {index} href="/">{car}</a> 
            ))}
        </Menu>

        <RightMenu>
            <a href="/">shop</a>
            <a href="/">tesla account</a>
            <CustomMenu onClick = {() => setburgerStatus(true)}>
                <MenuIcon/>
            </CustomMenu>
        </RightMenu>

        <BurgerNav show = {burgerStatus}>
            <CustomClose onClick = {() => setburgerStatus(false)}>
                <CloseIcon/>
            </CustomClose>
            {cars && cars.map((car , index) => (
            <li key = {index} ><a href="/">{car}</a></li> 
            ))}
            <li><a href="/">Solar Roof</a></li>
            <li><a href="/">Solar Panels</a></li>
            <li><a href="/">Existing Inventory</a></li>
            <li><a href="/">Used Inventory</a></li>
            <li><a href="/">Trade-In</a></li>
            <li><a href="/">Demo Drive</a></li>
            <li><a href="/">Insurance</a></li>
            <li><a href="/">Powerwall</a></li>
            <li><a href="/">Commercial Energy</a></li>
            <li><a href="/">Utilities</a></li>
            <li><a href="/">Charging</a></li>
            <li><a href="/">Find Us</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Account</a></li>
        </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height : 60px;
    position : fixed;
    display:flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    top: 0;
    left : 0;
    right : 0;
    z-index : 1;
`

const Menu = styled.div`
    display : flex;
    align-items :center;
    justify-content : center;
    flex: 1;
    a {
        font-weight : 600;
        text-transform : uppercase;
        padding : 0 10px;
    }
    @media (max-width : 768px){
        display: none;
    }

`
    
const RightMenu = styled.div`
    display : flex;
    align-items : center;
    a {
        font-weight : 600;
        text-transform : uppercase;
        margin-right : 10px;
    }
    
`

const CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`

const BurgerNav = styled.div`
    background: white;
    position : fixed;
    top : 0;
    bottom : 0;
    right : 0;
    width : 300px;
    padding : 33px;
    display : flex;
    flex-direction : column;
    text-align : start;
    transform : ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition : all 0.3s ease-in-out;
    overflow-y : auto;
    li{
        border-bottom: 1px solid rgba(0 ,0 ,0 , .2);
        padding: 10px 7px;
        cursor: pointer;
        margin: 3px;

        a{
            font-weight : 600;
        }
        
    }
    li:hover{
        background-color: rgba(0 ,0 ,0 , .2);
        border-radius: 11px;
        transition : all 0.3s ease-in-out;
    }
`


const CustomClose = styled.div`
    cursor : pointer;
    display : flex;
    justify-content : flex-end;
`