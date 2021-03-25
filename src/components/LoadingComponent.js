import React from 'react';
import ReactLoading from 'react-loading';

const LoadingComponent = ({ type, color }) => {
    return (
        <ReactLoading type={ type } color={ color } height={ 80 } width={ 80 } />
    )
}

export default LoadingComponent;