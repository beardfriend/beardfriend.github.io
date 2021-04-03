import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import  Logo from '../../images/text.png'
const index = () => {
  return (
    <NavContainer>

     <Link to='/'> <img className="logo" src={Logo}/></Link>
    </NavContainer>
  )
}

export default index

const NavContainer = styled.nav`
display:flex;
flex:auto;
justify-content:center;

 

  .logo{


    height:auto;
     width:120px;
    margin-top:5%;
  }
 

`