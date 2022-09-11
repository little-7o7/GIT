import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesFetching, heroesFetched, heroesFetchingError, heroDeleting, heroDeleted } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// TODO Задача для этого компонента:
// TODO При клике на "крестик" идет удаление персонажа из общего состояния
// TODO Усложненная задача:
// TODO Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const { heroes, heroesLoadingStatus, filterStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes", { method: 'GET' })
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    const heroDelete = (id) => {
        dispatch(heroDeleting(id))
        request("http://localhost:3001/heroes/" + id, { method: 'DELETE' })
            .then(data => dispatch(heroDeleted(id)))
            .catch((e) => console.log(e))
    }

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        if (filterStatus === 'all') {
            return arr.map(({ id, ...props }) => {
                return <HeroesListItem key={id} {...props} id={id} heroDelete={heroDelete} />
            })
        } else {
            let filtered = arr.filter(item => item.element === filterStatus)
            return filtered.map(({ id, ...props }) => {
                return <HeroesListItem key={id} {...props} id={id} heroDelete={heroDelete} />
            })
        }
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;