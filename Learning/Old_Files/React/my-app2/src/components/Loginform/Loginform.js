import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Loginform.css';

const Loginform = (props) => {
    const { title, phone, pass, btn } = props.language

    const [passType, setPassType] = useState('password')

    function setpasstype() {
        if (passType === "password") {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    function setMonkey() {
        if (passType === 'password') {
            return '🙈'
        } else {
            return '🐵'
        }
    }

    return (
        <div className="login-form">
            <div className="container">
                <div className="left cont">
                    <div className='login-logo'>
                        <a href="/">
                            <img src="https://api.modme.uz/uploads/osq4Bjs2zDVhtmAb.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="right cont">
                    <div className="py-4">
                        <div className="langs">
                            <Link to='/en'>EN</Link>
                            <div></div>
                            <Link to='/ru'>RU</Link>
                            <div></div>
                            <Link to='/uz'>UZ</Link>
                            <div></div>
                            <Link to='/id'>ID</Link>
                        </div>
                        <h6>{title}</h6>
                        <form className="av-tooltip tooltip-label-bottom" onSubmit={(e) => e.preventDefault()}>
                            <fieldset>
                                <fieldset className="form-group has-float-label has-prepend flex-nowrap mb-4" id="__BVID__19">
                                    <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__19__BV_label_"></legend>
                                    <div>
                                        <div className="extInput w-100">
                                            <label>{phone}<span className="text-danger ml-1">*</span></label>
                                            <div role="group" className="input-group flex-nowrap">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">+998</div>
                                                </div>
                                                <input type="text" className="form-control" id="__BVID__23" />
                                            </div>
                                            <div className="invalid-feedback"></div>
                                        </div></div>
                                </fieldset>
                                <fieldset className="form-group has-float-label mb-4" id="__BVID__24">
                                    <div>
                                        <div className="input-password">
                                            <label>{pass}<span className="text-danger ml-1">*</span></label>
                                            <div className="input">
                                                <div className="switcher" onClick={setpasstype}>{setMonkey()}</div>
                                                <input type={passType} className="form-control" id="__BVID__29" />
                                                <div className="invalid-feedback"></div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="_login_btn">{btn}</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginform;