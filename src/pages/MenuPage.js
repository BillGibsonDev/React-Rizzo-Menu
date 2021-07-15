import { useState, useEffect} from 'react';

// styled
import styled from 'styled-components';

// Menu Items
import MenuItem from '../components/MenuItem';
import { MenuList } from '../MenuItems/MenuList';


const MenuPage = () => {

    const [ items  ] = useState([{MenuList}]);

    console.log(items);


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <StyledMenu>
            <div className="menuNav">
                <a href='apps'>Appetizers</a>
                <a href='pizzas' >Pizzas</a>
                <a href='entrees'>Entrees</a>
                <a href='subs'>Subs</a>
                <a href='soups'>Soups</a>
            </div>
            <h2>Appetizers</h2>
            <div className="menuList" id="apps">
            {MenuList.filter(items => items.catagory === 'apps').map((items, key) => (
                <MenuItem 
                    id={items.id} 
                    key={key}
                    img={items.img} 
                    title={items.title}
                    price={items.price}
                    />
                )
            )}
            </div>
            <h2>Pizzas</h2>
            <div className="menuList" id="pizzas">
            {MenuList.filter(items => items.catagory === 'pizza').map((items, key) => (
                <MenuItem 
                    id={items.id} 
                    key={key}
                    img={items.img} 
                    title={items.title}
                    price={items.price}
                    />
                )
            )}
            </div>
            <h2>Entrees</h2>
            <div className="menuList" id="entrees">
                {MenuList.filter(items => items.catagory === 'entrees').map((items, key) => (
                    <MenuItem 
                        id={items.id} 
                        key={key}
                        img={items.img} 
                        title={items.title}
                        price={items.price}
                    />
                    )
                )}
            </div>
            <h2>Subs</h2>
            <div className="menuList" id="subs">
                {MenuList.filter(items => items.catagory === 'subs').map((items, key) => (
                    <MenuItem 
                        id={items.id} 
                        key={key}
                        img={items.img} 
                        title={items.title}
                        price={items.price}
                    />
                    )
                )}
            </div>
            <h2>Soups</h2>
            <div className="menuList" id="soups">
                {MenuList.filter(items => items.catagory === 'soups').map((items, key) => (
                    <MenuItem 
                        id={items.id} 
                        key={key}
                        img={items.img} 
                        title={items.title}
                        price={items.price}
                    />
                    )
                )}
            </div>
        </StyledMenu>
    )
}
const StyledMenu = styled.div`
display: flex;
flex-direction: column;
text-align: left;
height:100%;
position: relative;
background: #d4d4d4;
h2 {
    margin: 2em 0 0 20%;
    font-size: 3em;
    border-bottom: 6px black solid;
    width: 50%;
    color: #FF4E4E;;
    @media (max-width: 1250px){
        width: 90%;
        margin: 1em 1em;
    }
}
.menuNav {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 6%;
    top: 20%;
    width: 15%;
    height: 50vh;
    justify-content: center;
    background: white;
    align-items: left;
    text-align: left;
    border-radius: 12px;
    @media (max-width: 1250px){
        display: none;
    }
    a {
        color: black;
        margin: 1em;
        font-size: 2em;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover, &:focus {
            color: #FF4E4E;
        }
        .active {
            color: #FF4E4E;
        }
    }
}
h3 {
        color: #FF4E4E;
        font-size: 3em;
        margin: 2em 0 0 20%;
    }
.menuList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    width: 70%;
    margin: 2em 0 2em 20%;
    position: relative;
    @media (max-width: 1250px){
        grid-template-columns: 1fr 1fr;
        width: 90%;
        margin: 1em auto;
    }
    @media (max-width: 750px){
        grid-template-columns: 1fr;
        width: 90%;
        margin: 1em auto;
    }
}
`;

export default MenuPage;