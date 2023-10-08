import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CoffeeBeansImg from '../../resources/img/CoffeeBeans.svg'

class Navbar extends Component {
    render() {
        const Container = styled.div`
            width: ${this.props.width + 'px'};
            display: flex;
            align-items: flex-end;
            padding-top: ${this.props.top + 'px'};
            margin: ${this.props.margin};
        `;

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

        return (
            <Container>
                <Link to='/'>
                    <img style={{ cursor: "pointer" }} src={CoffeeBeansImg} alt="" />
                </Link>
                <SpansDiv>
                    <Link to='/'>Coffee house</Link>
                    <Link to='/coffees'>Our coffee</Link>
                    <Link to='/for_your_pleasure'>For your pleasure</Link>
                </SpansDiv>
            </Container>
        )
    }
}

export default Navbar;