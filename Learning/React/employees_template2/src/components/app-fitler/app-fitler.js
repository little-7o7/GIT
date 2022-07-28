import './app-fitler.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышению
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П большее 1000$
            </button>
        </div>
    )
}

export default AppFilter;