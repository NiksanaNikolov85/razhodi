import React from 'react';
import ChartBar1 from './ChartBar1';
import './Chart.css';

const Chart1 = (props) => {
    const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...dataPointsValue);


    return <div className="chart">
        {props.dataPoints.map((dataPoint) => <ChartBar1 value={dataPoint.value}
            maxValue={totalMax} label={dataPoint.label} key={dataPoint.label} />)}
    </div>
}

export default Chart1;