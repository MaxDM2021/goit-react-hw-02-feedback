import React  from 'react';
import PropTypes from 'prop-types';
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


Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueTotal: PropTypes.number.isRequired,
  valuePercentage: PropTypes.number.isRequired,
};

export default Statistics;