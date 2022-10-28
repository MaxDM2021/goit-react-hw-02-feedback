import React from "react";
import { Box } from "./Box";
import { StyleButton } from "./Feetback.styled"

const FeedbackOptions  = ({onIncrementGood, onIncrementNeutral, onIncrementBad,}) => (
  <Box display="flex"  alignItems="center" justifyContent="center" >
    <StyleButton type="button" onClick={onIncrementGood}>
      Good
    </StyleButton>
    <StyleButton  type="button" onClick={onIncrementNeutral}>
      Neutral
    </StyleButton>
    <StyleButton  type="button" onClick={onIncrementBad }>
      Bad
    </StyleButton>
  </Box>
);


export default FeedbackOptions



