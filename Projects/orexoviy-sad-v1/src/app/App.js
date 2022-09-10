import { StrictMode, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import './App.scss';

const Admin = lazy(() => import('../admin/Admin'));
const Client = lazy(() => import('../client/Client'));

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/*" exact element={<Admin />} />
                <Route path="/*" exact element={<Client />} />
            </Routes>
        </div>
    );
}

export default App;
