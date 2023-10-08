import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inpValue: this.props.salary
        }
    }

    onValueChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value.slice(0, -1)
        })
        
        this.props.onChangeSalary(this.state.inpValue)
    }

    render() {
        const { name, onDelete, onToggleProp, increase, like } = this.props;

        let classNames = "list-group-item d-flex justify-content-between"

        if (increase) {
            classNames += ' increase'
        }
        if (like) {
            classNames += ' like'
        }

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} data-toggle="like" className="list-group-item-label">{name}</span>
                <input type="text"
                    className="list-group-item-input"
                    name='inpValue'
                    defaultValue={this.state.inpValue + '$'}
                    onChange={this.onValueChange} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp} data-toggle="increase" type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem;