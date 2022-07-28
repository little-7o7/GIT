import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fitler/app-fitler";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-app-form/employers-app-form";

import "./app.css";

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList />

            <EmployeesAddForm />
        </div>
    );
}

export default App;