
// styled
import styled from 'styled-components'

// formspree
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqplbek");
  if (state.succeeded) {
      return <h5>Message Sent!</h5>;
  }
  return (
      <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">
        Full Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Enter message..."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </StyledForm>
  );
}
const StyledForm = styled.div`
display: flex;
flex-direction: column;
height: 60%;
width: 90%;
background: #c4c4c4;
padding-bottom: 2em;
  @media (max-width: 1250px){
        width: 90%;
        margin: auto;
        align-items: center;
      }
    input {
        height: 40px;
        width: 80%;
        border: none;
        border-bottom: 1px solid #121619;
        color: black;
        background: #c4c4c4;
    }
    textarea {
        margin-top: 15px;
        height: 70px;
        width: 80%;
        border: none;
        border-bottom: 1px solid #121619;
        color: black;
        background: #c4c4c4;
    }
    input::placeholder,
    textarea::placeholder {
        font-weight: 700;
        color: black;
        letter-spacing: 1px;
    }
    input:focus,
    textarea:focus {
        outline: none;
    }
    label {
        margin: 1em 0;
        color: #2b2b2b;
        background: #c4c4c4;
        letter-spacing: 1px;
        @media (max-width: 1250px){
            font-size: 2em;
        }
    }
    button {
        margin-top: 40px;
        width: 140px;
        height: 40px;
        border: none;
        background-color: #121619;
        color: whitesmoke;
        font-size: 1.2em;
        letter-spacing: 1px;
        cursor: pointer;
        border-radius: 8px;
        transition: 0.3s;
        @media (max-width: 1250px){
            font-size: 2em;
        }
        &:hover, &:focus {
            background: #ffffff;
            color: black;
            transform: scale(1.1);
        }
    }
`;

export default ContactForm;