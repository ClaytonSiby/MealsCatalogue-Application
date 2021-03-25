import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const LoadingComponent = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={80} width={80} />
);

LoadingComponent.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LoadingComponent;


{/* <Card key={Math.random() * 100}>
<Card.Img
  variant='top'
  alt={`${data.strCategory} thumbnail`}
  src={data.strCategoryThumb}
/>
<Card.Body>
  <Card.Title>
     <h4>{ data.strCategory }</h4>
  </Card.Title>
</Card.Body>
</Card> */}