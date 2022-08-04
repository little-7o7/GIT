import { Component } from "react";
import styled from "styled-components";

import CoffeeBeansImg from '../../resources/img/ContentCoffeeBeansBlack.svg'

class About extends Component {
    render() {
        const Container = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            font-family: 'Merienda';
            color: #000000;
            height: 520px;
            padding-top: 80px;

            h1 {
                font-size: 24px;
                line-height: 35px;
                margin: 0;
                font-weight: 400;
            }

            p {
                width: 589px;
                height: 223px;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                text-align: center;
            }
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
            background-color: #000000;
        `;

        return (
            <Container>
                <h1>About Us</h1>
                <LineBeans>
                    <Line></Line>
                    <img src={CoffeeBeansImg} alt="" />
                    <Line></Line>
                </LineBeans>
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br></br>
                    <br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </Container>
        )
    }
}

export default About;