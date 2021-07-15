import { useEffect } from 'react';

// styled
import styled from 'styled-components';

// images
import AboutImage from '../images/aboutImage3.jpg';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <StyledAbout>
            <img src={AboutImage} alt="restaurant" />
            <div className="aboutTextContainer">
                <h2>About Rizzo's</h2>
                <p>Rizzo's Italian Bistro is a family owned and operated Italian Resturant.  Rizzo's has been serving Manhattan area for over 40 years! Rizzo's Italian Bistro loves bringing our customers joy in the form of Italian Classics!</p>
            </div>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    height: 90vh;
    background: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    @media (max-width: 1250px){
        flex-direction: column;
    }
    img {
        width: 40%;
        height: 50vh;
        margin: auto;
        border-radius: 12px;
        @media (max-width: 1250px){
            width: 90%;
            margin: 1em auto;
        }
    }
    .aboutTextContainer {
        width: 50%;
        margin: auto;
        @media (max-width: 1250px){
            width: 90%;
            margin: 1em auto;
        }
        h2 {
            font-size: 3em;
            border-bottom: 2px black solid;
            margin-bottom: 1em;
            color: #FF4E4E;
        }
        p {
            font-size: 2em;
        }
    }
`;

export default AboutPage;