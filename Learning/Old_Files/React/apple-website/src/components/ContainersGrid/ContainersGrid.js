import React from 'react';

import './ContainersGrid.scss';

import Container from '../Container/Container';
import MiniContainer from '../MiniContainer/MiniContainer';

import ContainersData from '../Container/ContainersData';
import MiniContainersData from '../MiniContainer/MiniContainersData';

const ContainersGrid = () => {
    return (
        <div className='ContainersGrid'>
            <div className="containersGrid">
                {
                    ContainersData.map(container => {
                        return <Container key={container.id} data={container} />;
                    })
                }
            </div>
            <div className="miniContainersGrid">
                {
                    MiniContainersData.map(container => {
                        return <MiniContainer key={container.id} data={container} />;
                    })
                }
            </div>
        </div>
    );
}

export default ContainersGrid;
