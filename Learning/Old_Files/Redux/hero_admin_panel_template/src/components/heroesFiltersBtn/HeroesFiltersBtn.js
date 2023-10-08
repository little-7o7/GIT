import { useSelector, useDispatch } from 'react-redux';

import {
    filterStatusAll,
    filterStatusFire,
    filterStatusWater,
    filterStatusWind,
    filterStatusEarth,
} from '../../actions';

const HeroesFiltersBtn = ({ item }) => {
    const { filterStatus } = useSelector(state => state);
    const dispatch = useDispatch();

    let elementClassName;
    let elementOnClick;

    switch (item.value) {
        case 'all':
            elementClassName = `btn btn-outline-dark ${filterStatus === 'all' ? 'active' : ''}`;
            elementOnClick = filterStatusAll;
            break;
        case 'fire':
            elementClassName = `btn btn-danger ${filterStatus === 'fire' ? 'active' : ''}`;
            elementOnClick = filterStatusFire;
            break;
        case 'water':
            elementClassName = `btn btn-primary ${filterStatus === 'water' ? 'active' : ''}`;
            elementOnClick = filterStatusWater;
            break;
        case 'wind':
            elementClassName = `btn btn-success ${filterStatus === 'wind' ? 'active' : ''}`;
            elementOnClick = filterStatusWind;
            break;
        case 'earth':
            elementClassName = `btn btn-secondary ${filterStatus === 'earth' ? 'active' : ''}`;
            elementOnClick = filterStatusEarth;
            break;
        default:
            elementClassName = '';
            elementOnClick = '';
    }

    return (
        <button className={elementClassName} onClick={() => dispatch(elementOnClick())}>{item.inRus}</button>
    )
}

export default HeroesFiltersBtn;