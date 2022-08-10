import { Routes, Route } from "react-router-dom";
import Topimage from "../TopImage/Topimage";
import Loginform from "../Loginform/Loginform";

import './App.css';

function App() {
    let langs = [
        { path: '/', title: 'Login', phone: 'Phone', pass: 'Password', btn: 'Login' },
        { path: '/ru', title: 'Логин', phone: 'Номер', pass: 'Пароль', btn: 'Вход' },
        { path: '/uz', title: 'Login', phone: 'Telefon', pass: 'Parol', btn: 'Login' },
        { path: '/id', title: 'Gabung', phone: 'Telepon', pass: 'Kata sandi', btn: 'Gabung' },
    ]

    return (
        <div className='App'>
            <div className="login-form">
                <Topimage />
                <Routes>
                    {langs.map(lang => (
                        <Route key='' path={lang.path} element={<Loginform language={lang} />} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default App;