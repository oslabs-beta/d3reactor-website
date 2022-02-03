import dynamic from 'next/dynamic';
// import AreaChartSB from '../components/codeSandbox/AreaChartSB';
// import BarChartSB from '../components/codeSandbox/BarChartSB';

const AreaChart = dynamic(() => import('../components/charts/AreaChart'), {ssr: false});

export default function GetStarted() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto min-h-screen text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-gray-900 dark:text-white">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          <span>Add D3 to Your React</span>
          <span className="block">Apps With Ease</span>
        </h2>
        <div className="mt-8 flex justify-center ml-4">
          <AreaChart />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.docs.d3reactor.com/docs/intro"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500"
            >
              Get started
            </a>
          </div>
          {/* <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200"
            >
              yarn add d3reactor
            </a>
          </div> */}
        </div>
        {/* <div>
          <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            All charts are responsive
          </h3>
        </div>
        <div className="mt-8">
          <BarChartSB />
        </div> */}
        {/* <div>
          <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Performant
          </h3>
        </div>
        <div>
          <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Declarative
          </h3>
        </div>
        <div>
          <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            SSR support
          </h3>
        </div>
        <div>
          <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Highly configurable
          </h3>
        </div> */}
      </div>
    </div>
  );
}
