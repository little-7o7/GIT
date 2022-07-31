import { Component } from "react";
import styled from "styled-components";

import Navbar from "../Repeat/Navbar";
import Content from "./Content";
import About from "./AboutUs";
import Ourbest from "./OurBest";

import MainBgImg from './../../resources/img/MainBg.png'

class Home extends Component {
    render() {

        const Header = styled.div`
            background-image: url(${MainBgImg});
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            height: 640px;
        `;

        return (
            <>
                <Header>
                    <Navbar top={30} left={148} margin='' />
                    <Content />
                </Header>
                <About />
                <Ourbest />
            </>
        );
    }
}

export default Home;