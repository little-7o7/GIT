import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

import { filtersFetching, filtersFetched, filtersFetchingError, heroPosting, heroPosted } from '../../actions';

// TODO Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// TODO Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// TODO Дополнительно:
// TODO Элементы <option></option> желательно сформировать на базе
// TODO данных из фильтров

const HeroesAddForm = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request, postRequest } = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters", { method: 'GET' })
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        let newHero = {
            id: uuidv4(),
        };

        if (event.target[0].value > 0 || event.target[1].value > 0 || event.target[2].value !== 'all') {
            let fm = new FormData(event.target)
            fm.forEach((value, key) => {
                newHero[key] = value;
            })

            dispatch(heroPosting());
            postRequest('http://localhost:3001/heroes/', newHero)
                .then(data => dispatch(heroPosted(newHero)))
        }
    }

    return (
        <form onSubmit={handleSubmit} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?" />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description"
                    className="form-control"
                    id="description"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    defaultValue='all'>
                    <option value='all' disabled>Я владею элементом...</option>
                    {filters.map((item, idx) => {
                        if (item.value !== 'all') {
                            return <option key={idx} value={item.value}>{item.inRus}</option>;
                        } else return '';
                    })}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;