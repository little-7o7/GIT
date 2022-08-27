import { Routes, Route } from "react-router-dom";

import './App.scss';

import Admin from "../admin/Admin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/*" element={<Admin />}></Route>
                <Route path="/" element={''} />
                <Route path="/" element={''} />
                <Route path="/" element={''} />
            </Routes>
        </div>
    );
}

export default App;
