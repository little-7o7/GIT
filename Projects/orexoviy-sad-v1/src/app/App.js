import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../UserAuthContext";

import './App.scss';

import Admin from "../admin/Admin";

function App() {
    return (
        <div className="App">
            <UserAuthContextProvider>
                <Routes>
                    <Route path="/admin/*" element={<Admin />}></Route>
                    <Route path="/" element={''} />
                    <Route path="/" element={''} />
                    <Route path="/" element={''} />
                </Routes>
            </UserAuthContextProvider>
        </div>
    );
}

export default App;
