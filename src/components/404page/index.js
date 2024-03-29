import * as React from "react"
import Content from "./404.styled";
import { Link } from "gatsby";



const NotFound = () => {
    return (
        <Content>
            <img src={`/404/404-${Math.floor(Math.random()*14) + 1}.png`} alt="404"/>
            <div className="text">
                <h1>Page not found :(</h1>
                <p>You can visit</p>
                <p><Link to="/">Homepage</Link> or <Link to="/shop">Shop</Link></p>
            </div>
        </Content>
    );
}

export default NotFound;