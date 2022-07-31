import { Component } from "react";
import styled from "styled-components";

import CoffeeBeansImg from './../../resources/img/ContentCoffeeBeans.svg'

class Linebeans extends Component {
    render() {
        const LineBeans = styled.div`
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 20px 0 35px;
        `;

        const Line = styled.div`
            width: 60px;
            height: 1px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            background-color: #FFFFFF;
        `;

        return (
            <LineBeans>
                <Line></Line>
                <img src={CoffeeBeansImg} alt="" />
                <Line></Line>
            </LineBeans>
        )
    }
}

export default Linebeans;