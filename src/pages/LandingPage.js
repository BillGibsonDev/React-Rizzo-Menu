
import { useEffect } from 'react';

// router
import { Link } from 'react-router-dom';

// styled
import styled from 'styled-components';

// images 
import LandingImage from '../images/LandingImage.jpg';

const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
    <StyledLanding >
        <div className="landingTextContainer">
            <h2>Rizzo's Italian Bistro</h2>
            <h3>Gourmet Italian Classics your whole family will enjoy!</h3>
            <Link to="/MenuPage" id="orderButton">Order Now</Link>
        </div>
        <img src={LandingImage} alt="pizza" />        
    </StyledLanding>
    )
}

const StyledLanding = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    background: #dbdbdb;
    .landingTextContainer {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
        align-items: center;
        @media (max-width: 750px){
            width: 90%;
            margin: auto 6px;
        }
        h2, h3, a {
            letter-spacing: 1px;
        }
        h2 {
            font-size: 3em;
        }
        h3 {
            font-size: 1.5em;
            font-weight: 400;
            margin-top: 10px;
        }
        a {
            display: flex;
            background: #FF4E4E;
            width: 250px;
            justify-content: center;
            padding: 14px 1em;
            margin-top: 2em;
            border: black 2px solid;
            border-radius: 12px;
            font-size: 2em;
            font-weight: 700;
            color: black;
            transition: 0.3s;
            &:hover, &:focus {
                color: white;
                border: #FF4E4E solid 2px;
                background: black;
                transform: scale(1.1);
            }
        }
    }

    img {
        width: 50%;
        object-fit: cover;
    }
`;

export default LandingPage;