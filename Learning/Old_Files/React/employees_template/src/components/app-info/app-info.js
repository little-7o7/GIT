import './app-info.css';

const AppInfo = ({EmployersListLenght, EmployersIncreasedListLenght}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {EmployersListLenght}</h2>
            <h2>Премию получат: {EmployersIncreasedListLenght}</h2>
        </div>
    )
}

export default AppInfo;