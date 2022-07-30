import './app-fitler.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'like', label: 'На повышению' },
        { name: 'moreThen1000', label: 'З/П большее 1000$' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        let styles = '';
        if (props.filter === name) {
            styles = 'btn btn-light'
        } else {
            styles = 'btn btn-outline-light'
        }

        return (
            <button
                className={styles}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;