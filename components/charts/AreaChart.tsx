import {AreaChart} from 'd3reactor';
import language from '../../data/language.json';
import {useTheme} from 'next-themes';

export default function AreaChartExample() {
  const {theme} = useTheme();
  return (
    <AreaChart
      height="500px"
      width="75%"
      data={language}
      xKey="Date"
      yKey="popularity"
      xAxis="bottom"
      groupBy="language"
      yAxis="left"
      yGrid={true}
      yAxisLabel="Popularity (%)"
      legend="right"
      legendLabel="Languages"
      colorScheme="schemeBlues"
      theme={theme === 'light' || theme === 'dark' ? theme : undefined}
    />
  );
}
