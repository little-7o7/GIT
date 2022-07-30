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

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        let employers = this.state.data.length;
        let increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo EmployersListLenght={employers} EmployersIncreasedListLenght={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;