import {Fragment} from 'react';
import {Disclosure} from '@headlessui/react';
import {SearchIcon} from '@heroicons/react/solid';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import Toggle from './Toggle';

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-black sticky top-0 z-50">
      {({open}) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16 fixed">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto"
                      src="https://storage.googleapis.com/d3reactor/d3-reactor-logo.svg"
                      alt="Workflow"
                      height={40}
                      width={40}
                    />
                  </Link>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4 hover:text-blue-400">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-900 hover:text-blue-400" */}
                    <Link href="https://docs.d3reactor.com/docs/intro">
                      <a className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                        Docs
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                        About us
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
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
                      <SearchIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 dark:bg-gray-700 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-600 focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-900 hover:text-blue-400" */}
              <Disclosure.Button
                as="a"
                href="https://docs.d3reactor.com/docs/intro"
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Docs
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                About us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/blog"
                className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
