import {AreaChart} from 'd3reactor';
import skinny_fruit from '../../data/skinny_fruit.json';

export default function AreaChartExample() {
  const themeMode = localStorage.getItem('theme');
  return (
    <AreaChart
      theme={themeMode}
      height="400px"
      width="75%"
      data={skinny_fruit}
      xKey="date"
      yKey="value"
      xAxis="bottom"
      yAxis="right"
      yGrid={true}
      groupBy="fruit"
    />
  );
}
