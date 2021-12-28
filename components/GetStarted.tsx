export default function GetStarted() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          <span>Create Performant React</span>
          <span className="block">Visualizations with speed</span>
        </h2>
        <h3 className="mt-8"> Area Chart - Example</h3>
        <div className="mt-8 flex justify-center mr-10">
          {/* When you uncomment this code and refresh the pages route an error of self not defined is thrown */}
          {/* <AreaChart
						data={skinny_fruit}
						xData={{ key: "date", dataType: "date" }}
						yData={{ key: "value", dataType: "number" }}
						groupBy="fruit"
						xGrid={true}
						yGrid={true}
						xAxisLabel="Date"
						yAxisLabel="Number of fruit"
						height="400px"
						width="600px"
					/> */}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Npm i d3-reacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
