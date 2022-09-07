import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import './App.scss';

const Admin = lazy(() => import('../admin/Admin'));

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/*" exact element={<Admin />}></Route>
                <Route path="/" exact element={<Navigate to="/home" replace />} />
                <Route path="/home" exact element={'home'} />
                <Route path="/page" exact element={'page'} />
                <Route path="*" element={'404'} />
            </Routes>
        </div>
    );
}

export default App;
