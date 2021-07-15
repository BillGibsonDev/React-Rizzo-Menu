// styled
import styled from 'styled-components';

// routers
import { Link } from 'react-router-dom';

// images
import PizzaIcon from '../images/pizzaIcon.png'
import Hamburger from '../images/hamburgerWhite2.png';

const Nav = () => {
    
    function toggleNav() {
        var x = document.getElementById("mobileNav");
          if (x.style.width === "100%") {
              x.style.width = "0%";
            } else {
              x.style.width = "100%";
            }
          }


    return (
        <StyledNav id="nav">
            <Link id="logo" to="/"><img src={PizzaIcon} alt="pizza logo"/>Rizzo's</Link>
            <nav>
                <Link to="/MenuPage" >Menu</Link>
                <Link to="/AboutPage">About Us</Link>
                <Link to="/ContactPage">Contact Us</Link>
                <Link to="/Cart">Cart</Link>
            </nav>
            <div id="mobileNav" className="overlay">
              <button id="closeNavButton" onClick={toggleNav}>&times;</button>
              <div className="overlay-content" onClick={toggleNav}>
                <Link to="/" >Home</Link>
                <Link to="/MenuPage" >Menu</Link>
                <Link to="/AboutPage">About Us</Link>
                <Link to="/ContactPage">Contact Us</Link>
                <Link to="/Cart">Cart</Link>
              </div>
            </div>
            <button id="openNavButton" onClick={toggleNav}><img src={Hamburger} alt="menu" id="hamburgerIcon" /></button>
        </StyledNav>
    )
};
const StyledNav = styled.div`
height: 10vh;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
background: #333333;
@media (max-width: 850px){
    justify-content: space-between;
  }
#logo {
    display: flex;
    align-items: center;
    font-size: 3em;
    color: white;
    text-shadow: #FF4E4E 2px 2px 2px;
    letter-spacing: 1px;
    transition: 0.3s;
        &:hover{
        transform: scale(1.1);
        }
    img {
        width: 60px;
        }
    }
nav{
    @media (max-width: 850px){
    display: none;
  }
    a {
        font-size: 2em;
        margin: 0 1em;
        color: white;
        transition: 0.3s;
        letter-spacing: 1px;
            &:hover{
                color: #FF4E4E;
                transform: scale(1.2);
            }
        }
    }
    //
/* Slide out menu */
//
.overlay {  
  height: 100%;
  width: 0;
  position: fixed; 
  z-index: 99; 
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.9); 
  overflow-x: hidden; 
  transition: 0.5s;
}


.overlay-content {
  position: relative;
  top: 25%; 
  width: 100%; 
  text-align: center; 
  margin-top: 30px; 
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; 
  transition: 0.3s; 
}


.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
  transform: scale(1.2);
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

#openNavButton, #closeNavButton {
  background: none;
  border: none;
  cursor: pointer;
}
#closeNavButton {
  font-size: 10rem;
  color: white;
  position: absolute;
  top: 20px;
  right: 45px;
  &:hover{
    transform: scale(1.2);
  }
}
#openNavButton {
  display: none;
  margin-right: 1em;
  @media (max-width: 850px){
    display: flex;
    margin-right: 10px;
}
}
#openNavButton img{
  width: 50px;
  @media (max-width: 750px){
    width: 40px;
  }
  &:hover{
    transform: scale(1.2);
  }
}
`;
export default Nav;