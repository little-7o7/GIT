import { Component } from "react";
import styled from "styled-components";

import Navbar from "../Repeat/Navbar";
import Content from "./Content";
import About from "./AboutUs";
import Ourbest from "./OurBest";

import MainBgImg from '../../resources/img/MainBg.png'
import Footer from "./Footer";

class Home extends Component {
    render() {

        const Header = styled.div`
            background-image: url(${MainBgImg});
            background-repeat: round;
            display: flex;
            flex-direction: column;
            height: 640px;
        `;

        return (
            <>
                <Header>
                    <Navbar top={30} margin='0 auto' width={1440} />
                    <Content />
                </Header>
                <About />
                <Ourbest />
                <Footer />
            </>
        );
    }
}

export default Home;