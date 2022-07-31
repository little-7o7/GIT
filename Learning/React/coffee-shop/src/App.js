import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coffees" element={''} />
                <Route path="/for_your_pleasure" element={''} />
                <Route path="/about_it" element={''} />
            </Routes>
        </div>
    );
};

export default App;