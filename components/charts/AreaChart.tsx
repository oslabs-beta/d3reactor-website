import {AreaChart} from 'd3reactor';
import language from '../../data/language.json';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function AreaChartExample() {
  const {theme} = useTheme();
  const {width} = useWindowSize();
  const cWidth = width ? width : window.innerWidth;
  return (
    <AreaChart
      height="500px"
      width="75%"
      data={language}
      xKey="Date"
      yKey="popularity"
      xAxis="bottom"
      groupBy="language"
      yAxis="right"
      yGrid={true}
      yAxisLabel="Popularity (%)"
      legend={cWidth < 900 ? 'bottom' : 'right'}
      colorScheme="schemeBlues"
      theme={theme === 'light' || theme === 'dark' ? theme : undefined}
    />
  );
}
