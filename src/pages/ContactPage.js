import { useEffect } from 'react';

// styled
import styled from 'styled-components';

// components
import ContactForm from '../components/ContactForm.js';
import Map from '../components/Map.js'


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <StyledContact>
            <div className="leftContainer">
                <Map />
                <h4>Address</h4>
                <h5>2525235 Chambers St</h5>
                <h5>Manhattan, NY, 646564</h5>
            </div>
            <div className="formWrapper">
                <h1>Contact Us</h1>
                <ContactForm />
            </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
height: 100%;
    background: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    @media (max-width: 1250px){
        flex-direction: column;
    }
    .leftContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        justify-content: center;
        margin: 2em 0;
        @media (max-width: 1250px){
            width: 90%;
            margin: 1em auto;
        }
        h4 {
            font-size: 2em;
            border-bottom: 2px solid black;
            width: 60%;
            margin-top: 1em;
            text-align: center;
            letter-spacing: 1px;
        }
        h5 {
            margin: 10px;
            font-size: 1.5em;
            
        }
    }
.formWrapper{
    width: 50%;
    align-items: center;
    margin: 2em auto;
    @media (max-width: 1250px){
            width: 90%;
            margin: 1em auto;
        }
    h1{
        font-size: 3em;
        border-bottom: 4px solid black;
        width: 60%;
        margin: 1em 0;
        @media (max-width: 1250px){
            width: 90%;
            margin: 1em auto;
        }
    }
}
`;

export default ContactPage;