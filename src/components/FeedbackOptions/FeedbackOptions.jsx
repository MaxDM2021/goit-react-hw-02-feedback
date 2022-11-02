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



