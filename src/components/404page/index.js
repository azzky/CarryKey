import * as React from "react"
import Content from "./404.styled";
import Link from "@components/intl/link";

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const NotFound = () => {
    const [random, setRandom] = React.useState(null);
    React.useEffect(() => {
        setRandom(randomGenerator(1, 14))
    }, []);
    return (
        <Content>
            {random && <img src={`/404/404-${random}.png`} alt="404"/>}
            <div className="text">
                <h1>Page not found :(</h1>
                <p>You can visit</p>
                <p><Link to="/">Homepage</Link> or <Link to="/shop">Shop</Link></p>
            </div>
        </Content>
    );
}

export default NotFound;