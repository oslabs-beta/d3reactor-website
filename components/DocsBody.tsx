/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {Footer} from '../components/Footer';
import {
  ChartBarIcon,
  UserGroupIcon,
  XIcon,
  ChevronLeftIcon,
  PlusCircleIcon,
  LightningBoltIcon,
  DatabaseIcon,
} from '@heroicons/react/outline';

const navigation = [
  {name: 'Installation', href: '#', icon: PlusCircleIcon, current: true},
  {name: 'Charts', href: '#', icon: ChartBarIcon, current: false},
  {name: 'Accesibility', href: '#', icon: UserGroupIcon, current: false},
  {name: 'API', href: '#', icon: LightningBoltIcon, current: false},
  {name: 'Datatypes', href: '#', icon: DatabaseIcon, current: false},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DocsBody() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="h-full flex">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white-100 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">Docs</div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 h-6 w-6',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0 h-screen">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white-100">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">Docs</div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-200 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 h-6 w-6',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-white-100 border-b border-gray-200 px-4 py-1.5">
              <div>Docs</div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                  Installation and Getting Started
                </h1>
                MDX component here with the installation instructions from Github
                <h1 className="text-1xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  More info
                </h1>
                <h1 className="text-1xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  More info and cool component demos.More info and cool component demos.More info and cool component
                  demos.More info and cool component demos.More info and cool component demos.More info and cool
                  component demos.More info and cool component demos.More info and cool component demos.More info and
                  cool component demos.More info and cool component demos.More info and cool component demos.More info
                  and cool component demos.More info and cool component demos.More info and cool component demos.More
                  info and cool component demos.More info and cool component demos.More info and cool component
                  demos.More info and cool component demos.More info and cool component demos.More info and cool
                  component demos.More info and cool component demos.More info and cool component demos.More info and
                  cool component demos.More info and cool component demos.More info and cool component demos.More info
                  and cool component demos.More info and cool component demos.
                </h1>
                <Footer />
              </div>
              {/* End main area */}
            </main>
            <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
              {/* Start secondary column (hidden on smaller screens) */}

              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="font-extrabold tracking-tight text-gray-900">On This page</h1>
                This section will include current highlights of the current page. This is an option section and will not
                be visible on smaller viewports. This section will include current highlights of the current page. This
                is an option section and will not be visible on smaller viewports. This section will include current
                highlights of the current page. This is an option section and will not be visible on smaller viewports.
                This section will include current highlights of the current page. This is an option section and will not
                be visible on smaller viewports. This section will include current highlights of the current page. This
                is an option section and will not be visible on smaller viewports. This section will include current
                highlights of the current page. This is an option section and will not be visible on smaller viewports.
                This section will include current highlights of the current page. This is an option section and will not
                be visible on smaller viewports. This section will include current highlights of the current page. This
                is an option section and will not be visible on smaller viewports. This section will include current
                highlights of the current page. This is an option section and will not be visible on smaller viewports.
                This section will include current highlights of the current page. This is an option section and will not
                be visible on smaller viewports.
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
