import { useSelector } from 'react-redux';

import HeroesFiltersBtn from '../heroesFiltersBtn/HeroesFiltersBtn';

// TODO Задача для этого компонента:
// TODO Фильтры должны формироваться на основании загруженных данных
// TODO Фильтры должны отображать только нужных героев при выборе
// TODO Активный фильтр имеет класс active
// TODO Изменять json-файл для удобства МОЖНО!
// TODO Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const { filters } = useSelector(state => state);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filters.map((item, idx) => <HeroesFiltersBtn key={idx} item={item} idx={idx} />)}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;