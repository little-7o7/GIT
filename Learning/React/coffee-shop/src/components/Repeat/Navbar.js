import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CoffeeBeansImg from './../../resources/img/CoffeeBeans.svg'

const SpansDiv = styled.div`
        position: relative;
        left: -10px;
        display: flex;
        gap: 40px;
        font-family: 'Merienda';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        
        a {
            cursor: pointer;
            text-decoration: none;
            color: #FFFFFF;
        }
`;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            display: "flex",
            alignItems: "flex-end",
            paddingTop: this.props.top + 'px',
            paddingLeft: this.props.left + 'px',
            margin: this.props.margin
        }
    }

    render() {
        return (
            <div style={this.styles}>
                <Link to='/'>
                    <img style={{ cursor: "pointer" }} src={CoffeeBeansImg} alt="" />
                </Link>
                <SpansDiv>
                    <Link to='/'>Coffee house</Link>
                    <Link to='/coffees'>Our coffee</Link>
                    <Link to='/for_your_pleasure'>For your pleasure</Link>
                </SpansDiv>
            </div>
        )
    }
}

export default Navbar;