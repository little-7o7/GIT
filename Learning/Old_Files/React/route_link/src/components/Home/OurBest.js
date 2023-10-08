import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Ourbestitem from "./OurBestItem";

import OurBestBg from '../../resources/img/OurBestBg.png'

class Ourbest extends Component {
    render() {
        const Container = styled.div`
            height: 495px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url(${OurBestBg});
            background-repeat: round;
            padding-top: 80px;

            h1 {
                font-family: 'Merienda';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 35px;
                margin-bottom: 39px;
            }

            a {
                text-decoration: none;
                color: black;
            }
        `;

        const Itembox = styled.div`
            display: flex;
            gap: 71px;
        `;

        return (
            <Container>
                <h1>Our best</h1>
                <Itembox>
                    <Ourbestitem to='/' img='Ourbestitem1.png' title='Solimo Coffee Beans 2 kg' price='10.73$$' />
                    <Ourbestitem to='/' img='Ourbestitem2.png' title='Presto Coffee Beans 1 kg' price='15.99$$' />
                    <Ourbestitem to='/' img='Ourbestitem3.png' title='AROMISTICO Coffee 1 kg' price='6.99$$' />
                </Itembox>
            </Container>
        )
    }
}

export default Ourbest;