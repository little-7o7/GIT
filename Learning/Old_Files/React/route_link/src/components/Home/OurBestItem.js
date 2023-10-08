import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Ourbestitem extends Component {
    render() {
        const Item = styled.div`
            width: 176px;
            height: 226px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.65);
            border-radius: 8px;
            padding: 22px;
            text-align: end;
            font-family: 'Merienda';
            font-style: normal;
            white-space: nowrap;

            img {
                width: 100%;
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

            div.div1 {
                display: flex;
                align-items: center;
                flex: 1;
            }
        `;

        const { to, img, title, price } = this.props;

        return (
            <Link to={to}>
                <Item>
                    <div className="div1">
                        <img src={require(`././../../resources/img/${img}`)} alt="fff" />
                    </div>
                    <div>
                        <h1>{title}</h1>
                        <span>{price}</span>
                    </div>
                </Item>
            </Link>
        )
    }
}

export default Ourbestitem;