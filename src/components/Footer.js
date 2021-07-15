// styled 
import styled from 'styled-components';

// icons / images
import Facebook from '../images/FB.png';
import Twitter from '../images/twitterBlack.png';
import Linkedin from '../images/linkedinBlack.png';
import Instagram from '../images/instaBlack.png';

const Footer = () => {

    return (
        <StyledFooter>
            <h4>Stay Connected</h4>
            <div className="iconContainer">
                <a href="https://facebook.com"><img src={Facebook} alt="facebook link" /></a>
                <a href="https://twitter.com"><img src={Twitter} alt="facebook link" /></a>
                <a href="https://linkedin.com"><img src={Linkedin} alt="facebook link" /></a>
                <a href="https://instagran.com"><img src={Instagram} alt="facebook link" /></a>
            </div>
            <h5>&copy;RizzosItalianBistro.com</h5>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
height: 30vh;
background: #FF4E4E;
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
h4 {
    display: flex;
    justify-content: center; 
    font-size: 2em;
    border-bottom: white 2px solid;
    width: 40%;
    margin: 1em auto;
    letter-spacing: 1px;
    @media (max-width: 1250px){
        width: 80%;
    }
}
.iconContainer {
    display: flex;
    width: 40%;
    justify-content: space-around;
    margin: 2em auto;
    @media (max-width: 1250px){
        width: 90%;
    }
    a {
        transition: 0.3s;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
h5 {
    margin: 2em auto;
    @media (max-width: 1250px){
        font-size: 2em;
    }
}
`;
export default Footer;