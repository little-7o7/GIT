import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fitler/app-fitler";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-app-form/employers-app-form";
import AppBase from "../App-base/app-base"

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: AppBase
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList data={this.state.data} onDelete={this.deleteItem} />

                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;