import React from 'react'
import styled from 'styled-components'

import  Logo from '../../images/text.png'
const index = () => {
  return (
    <NavContainer>

      <img className="logo" src={Logo}/>
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