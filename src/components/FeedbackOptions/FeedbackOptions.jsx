import React from "react";
import PropTypes from 'prop-types';
import { Box } from "./Box";
import { StyleButton, StyleItem } from "./Feetback.styled"

const FeedbackOptions  = ({options, onLeaveFeedback}) => {
 return ( 
  <Box display="flex"  alignItems="center" justifyContent="center" as="ul" >
{options.map(option =>(
  <StyleItem key={option}>
  <StyleButton type="button"  name={option} onClick={onLeaveFeedback} key={option}>
 {option}
  </StyleButton>
  </StyleItem>
))}
  </Box>
 );
}


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions





// const FeedbackOptions  = ({onIncrementGood, onIncrementNeutral, onIncrementBad,}) => (
//   <Box display="flex"  alignItems="center" justifyContent="center" ></Box>
// <StyleButton type="button" onClick={onIncrementGood}>
// Good
// </StyleButton>
// <StyleButton  type="button" onClick={onIncrementNeutral}>
// Neutral
// </StyleButton>
// <StyleButton  type="button" onClick={onIncrementBad}>
// Bad
// </StyleButton> 
// </Box>
// );


