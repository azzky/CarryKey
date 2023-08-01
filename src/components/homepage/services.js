import React from "react"
import { Wrapper, List } from "./services.styled"

const Services = ()=> {
    return (
        <Wrapper>
            <h2>Services</h2>
            <List>
                <li>
                    <h3 className="title">Standard</h3>
                    <p>Consultation</p>
                    <p>1 hour shooting</p>
                    <p>50 retouched photos</p>
                    <p>Delivery in 2 weeks</p>
                    <p className="price">$89</p>
                    <button className="button">I want this package</button>
                </li>
                <li>
                    <h3 className="title">Premium</h3>
                    <p>Consultation</p>
                    <p>2 hour shooting</p>
                    <p>80 retouched photos</p>
                    <p>Delivery in 2 weeks</p>
                    <p className="price">$149</p>
                    <button className="button">I want this package</button>
                </li>
            </List>
        </Wrapper>
    )
}

export default Services