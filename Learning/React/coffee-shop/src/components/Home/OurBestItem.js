import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Ourbestitem extends Component {
    render() {
        const Item = styled.div`
            display: flex;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.65);
            border-radius: 8px;
            padding: 22px;
            text-align: end;
            font-family: 'Merienda';
            font-style: normal;

            img {
                width: 151px;
                height: 130px;
                margin: 0 auto;
                margin-bottom: 14px;
            }
            
            h1 {
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 10px;
            }

            span {
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
            }
            `;

        const { to, img, title, price } = this.props;

        return (
            <Link to={to}>
                <Item>
                    <img src={img} alt="Item" />
                    <h1>{title}</h1>
                    <span>{price}</span>
                </Item>
            </Link>
        )
    }
}

export default Ourbestitem;