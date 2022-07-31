import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Ourbestitem from "./OurBestItem";

import OurBestBg from './../../resources/img/OurBestBg.png'

class Ourbest extends Component {
    render() {
        const Container = styled.div`
            height: 495px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-image: url(${OurBestBg});
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
                    <Ourbestitem to='' img='' title='' price=''/>
                    <Ourbestitem to='' img='' title='' price=''/>
                    <Ourbestitem to='' img='' title='' price=''/>
                </Itembox>
            </Container>
        )
    }
}

export default Ourbest;