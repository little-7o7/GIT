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
            data: AppBase,
            term: '',
            filter: 'all'
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);

            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);

            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onChangeSalary = (id, value) => {
        this.setState(({data}) => {
            data.map(emp => {
                if (emp.id === id) {
                    return emp.salary = value
                }
                return emp;
            })
        })
        console.log(value);
    }

    render() {
        const { data, term, filter } = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo EmployersListLenght={employers} EmployersIncreasedListLenght={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary} />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;