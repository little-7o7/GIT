import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fitler/app-fitler";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-app-form/employers-app-form";

import "./app.css";

function App() {

    const data = [
        {
            name: 'Makhmudkhon',
            salary: 5000
        },
        {
            name: 'Mamurxon',
            salary: 200
        },
        {
            name: 'Madixon',
            salary: 500000
        },
        {
            name: 'Marifathon',
            salary: 10000
        }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data} />

            <EmployeesAddForm />
        </div>
    );
}

export default App;