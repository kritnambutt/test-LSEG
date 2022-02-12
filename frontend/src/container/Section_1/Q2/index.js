import React from 'react';
import { ContainerWrapper } from './style';

const ContainerQ2 = () => {
    return (
        <ContainerWrapper>
            <h2>Question 2</h2>
            <h3>Quiz: Move a star to middle of the box.</h3>
                <div className="parent">
                <div className="star">★</div>
                <div className="box-left"></div>
            </div>  
        </ContainerWrapper>
    )
}

export default ContainerQ2;