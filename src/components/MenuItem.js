
// styled
import styled from 'styled-components';

const MenuItem = ({ items, title, price, img, id }) => {
    
	return (
		<StyledMenuItem key={id} id={id}>
            <img src={img} alt={title}/>
            <div className="menuTextWrapper">
                <h4>{title}</h4>
                <h5>${price}</h5>
            </div>
            <div className="hoverDesc">
                <p>Includes a desciption fitting for this item. Wow much tasty! Looks great doesn't it!</p>
                <div className="hoverTextWrapper">
                    <h4>{title}</h4>
                    <h5>${price}</h5>
                </div>
                <button>Add to Cart</button>
            </div>
        </StyledMenuItem>
	);
};


const StyledMenuItem = styled.div`
    position: relative;
    margin-top: 1em;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
        &:hover, &:focus {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            transform: scale(1.1);
        }
    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        }
    button {
        width: 100%;
        height: 80px;
        font-size: 2em;
        background: #FF4E4E;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        &:hover, &:focus {
            background: #cccccc;
            border-radius: 12px;
        }
    }
    .menuTextWrapper{
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: auto;
        h4, h5 {
        margin: 1em 0;
        font-size: 2em;
        color: #000000;
        @media (max-width: 1450px){
                font-size: 1.5em;
            }
        }
    }
    .hoverDesc{
        position: absolute;
        width: 100%;
        height: 100%;
        margin: auto;
        opacity: 0;
        background: #000000b7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 12px;
        transition: 0.3s;
            &:hover{
                opacity: 1;
            }
        p { 
            color:white;
            margin: auto 12px;
            font-size: 1.5em;
            @media (max-width: 1250px){
            font-size: 2em;
            }
        }
        .hoverTextWrapper{
            display: flex;
            justify-content: space-between;
        h4, h5 {
            color: white;
            margin: 6px;
            font-size: 2em;
            @media (max-width: 1250px){
                font-size: 2.5em;
            }
        }
    }
}

`;


export default MenuItem;
