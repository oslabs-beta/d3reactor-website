import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Toggle from './Toggle'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
		<Disclosure as="nav" className="bg-white dark:bg-black">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="flex items-center px-2 lg:px-0">
								<div className="flex-shrink-0">
										<Image
											className="block h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
											alt="Workflow"
											height={30}
											width={30}
										/>
								</div>
								<div className="hidden lg:block lg:ml-6">
									<div className="flex space-x-4">
										{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
										<Link href="/guides">
											<a className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												Guides
											</a>
										</Link>
										<Link href="/docs">
											<a className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												Docs
											</a>
										</Link>
										<Link href="/about">
											<a className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												About us
											</a>
										</Link>
										<Link href="/blog">
											<a className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												Blog
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
								<div className="max-w-lg w-full lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<SearchIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 dark:bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-white focus:text-gray-900 sm:text-sm"
											placeholder="Search"
											type="search"
										/>
									</div>
								</div>
							</div>
							<div className="flex lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:block lg:ml-4">
								<div className="flex items-center">
								<div className="p-4">
									<Toggle />
									</div>
									<button
										type="button"
										className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>
									{/* Profile dropdown */}
									<Menu as="div" className="ml-4 relative flex-shrink-0">
										<div>
											<Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://ca.slack-edge.com/T01SYDG735Y-U0236DUSB43-75542e23ca44-512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt="Avatar"
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Support
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Settings
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
							<Disclosure.Button
								as="a"
								href="/guides"
								className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Guides
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="/docs"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Docs
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="/about"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								About us
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="/blog"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Blog
							</Disclosure.Button>
						</div>
						<div className="pt-4 pb-3 border-t border-gray-700">
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src="https://ca.slack-edge.com/T01SYDG735Y-U0236DUSB43-75542e23ca44-512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-white">
										Travis Lockett
									</div>
									<div className="text-sm font-medium text-gray-400">
										Travis@gmail.com
									</div>
								</div>
								<button
									type="button"
									className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-3 px-2 space-y-1">
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
								>
									Support
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as="a"
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
								>
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}



