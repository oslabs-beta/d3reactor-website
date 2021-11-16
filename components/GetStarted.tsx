import Image from "next/image";

export default function GetStarted() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
					<span>Create Performant React</span>
					<span className="block">Visualizations with speed</span>
				</h2>
				<div className="mt-8 flex justify-center">
					{/* TODO: Replace this image and convert this image tag to Next */}
					<img
						alt="Example of D3 Reacts charts and visualizations"
						src="https://miro.medium.com/max/1400/1*rstwYdItC4WNPg7WhHhpag.png"
					/>
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
