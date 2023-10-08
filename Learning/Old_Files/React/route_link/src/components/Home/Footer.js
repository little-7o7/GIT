import { Component } from "react";
import styled from "styled-components";

import Navbarblack from '../Repeat/NavbarBlack'
import Linebeans from "../Repeat/LineBeans";

class Footer extends Component {
    render() {
        const Container = styled.div`
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
            gap: 30px;
        `;

        return (
            <Container>
                <Navbarblack top='' left='' margin={'0 auto'} />
                <Linebeans/>
            </Container>
        )
    }
}

export default Footer;