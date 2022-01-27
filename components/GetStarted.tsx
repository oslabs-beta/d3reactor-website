// import dynamic from 'next/dynamic';

// const AreaChart = dynamic(() => import('../components/charts/AreaChart'), {ssr: false});

export default function GetStarted() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto min-h-screen text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-gray-900 dark:text-white">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          <span>Create Performant React</span>
          <span className="block">Visualizations with speed</span>
        </h2>
        <h3 className="mt-8"> Area Chart - Example</h3>
        <div className="mt-8 flex justify-center ml-4">{/* <AreaChart /> */}</div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200"
            >
              Npm i d3reactor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
