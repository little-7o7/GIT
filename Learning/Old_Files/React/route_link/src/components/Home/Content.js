import { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import CoffeeBeansImg from '../../resources/img/ContentCoffeeBeans.svg'

class Content extends Component {
    render() {
        const Container = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            font-family: 'Merienda';
            font-style: normal;
            font-weight: 700;
            color: #FFFFFF;
            margin-top: 111px;

            h1 {
                font-size: 40px;
                line-height: 58px;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin: 0;
            }

            h2 {
                font-size: 24px;
                line-height: 35px;
                margin: 0;
            }

            h2.aaa {
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-top: 20px;
            }
        `;

        const Button = styled.button`
            width: 120px;
            height: 30px;
            border: 1px solid #FFFFFF;
            border-radius: 3px;
            color: #FFFFFF;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            background-color: transparent;
            font-family: 'Merienda';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            cursor: pointer;
            margin-top: 18px;
        `;

        const LineBeans = styled.div`
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 20px 0 40px;
        `;

        const Line = styled.div`
            width: 60px;
            height: 1px;
            background-color: #ffffff;
        `;

        return (
            <Container>
                <h1>Everything You Love About Coffee</h1>
                <LineBeans>
                    <Line></Line>
                    <img src={CoffeeBeansImg} alt="" />
                    <Line></Line>
                </LineBeans>
                <h2>We makes every day full of energy and taste</h2>
                <h2 className="aaa">Want to try our beans?</h2>
                <Link to='/coffees'>
                    <Button>More</Button>
                </Link>
            </Container>
        )
    }
}

export default Content;