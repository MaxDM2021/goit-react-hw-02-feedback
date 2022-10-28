
import React from "react";
import { StyleStatistic } from "./StatisticsStyle.styled"

const ValuePersentage =({onValuePersentage}) => (
<StyleStatistic >Positive feedback: {onValuePersentage? onValuePersentage: 0} %</StyleStatistic >
)

export default ValuePersentage


