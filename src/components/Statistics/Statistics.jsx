import React  from 'react';
import { Box } from "../FeedbackOptions/Box";
import ValueGood from './ValueGood';
import ValueNeutral from './ValueNeutral';
import ValueBad from './ValueBad';
import ValueTotal from './ValueTotal';
import ValuePersentage from './ValuePersentage';


const Statistics = ({valueGood, valueNeutral, valueBad, valueTotal, valuePercentage}) => (
  <Box display="flex"  alignItems="center" justifyContent="center" >
  <ValueGood onValueGood={valueGood}/>
  <ValueNeutral onValueNeutral={valueNeutral}/>
  <ValueBad onValueBad={valueBad}/>
  <ValueTotal onValueTotal={valueTotal}/>
  <ValuePersentage onValuePersentage={valuePercentage}/>
</Box>

)

export default Statistics;