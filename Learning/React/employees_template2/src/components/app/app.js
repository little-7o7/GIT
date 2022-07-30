import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

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
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: uuidv4()
        }
        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            }
        });
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

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;