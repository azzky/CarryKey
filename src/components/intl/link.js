import React from "react"
import { Link } from "gatsby";

const IntlLink = (props) => {
    const {to, lang, children, className, activeClassName} = props;
    const langStr = lang !== 'en' ? '/' + lang : '';

    return (
        <Link to={langStr + to} className={className} activeClassName={activeClassName}>
            {children}
        </Link>
    )
}

export default IntlLink