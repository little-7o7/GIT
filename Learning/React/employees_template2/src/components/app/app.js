import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fitler/app-fitler";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-app-form/employers-app-form";
import AppBase from "../App-base/app-base"

import "./app.css";

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={AppBase} />

            <EmployeesAddForm />
        </div>
    );
}

export default App;