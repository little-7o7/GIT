import { Component } from "react";
import styled from "styled-components";

import CoffeeBeansImg from '../../resources/img/ContentCoffeeBeansBlack.svg'

class Linebeans extends Component {
    render() {
        const LineBeans = styled.div`
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 20px 0 40px;
        `;

        const Line = styled.div`
            width: 60px;
            height: 1px;
            background-color: #000000;
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