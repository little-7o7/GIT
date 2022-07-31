import { Component } from "react";
import styled from "styled-components";

import Navbar from "../Repeat/Navbar";

import MainBgImg from './../../resources/img/MainBg.png'

const MainBg = styled.div`
    background-image: url(${MainBgImg});
    width: 100%;
    height: 959px;
    background-repeat: no-repeat;
`;

class Home extends Component {
    render() {
        return(
            <MainBg>
                <Navbar top={30} left={148} margin=''/>
            </MainBg>
        );
    }
}

export default Home;