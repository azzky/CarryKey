import * as React from "react"
import Content from "./404.styled";
import Link from "@components/intl/link";
import { FormattedMessage } from "react-intl";

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
                <h1><FormattedMessage id="404.title"/></h1>
                <p><FormattedMessage id="404.description"/></p>
                <p><Link to="/"><FormattedMessage id="menu.home"/></Link> or <Link to="/shop"><FormattedMessage id="menu.shop"/></Link></p>
            </div>
        </Content>
    );
}

export default NotFound;