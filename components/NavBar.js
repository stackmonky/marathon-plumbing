import logo from '../public/logo.svg';
import Image from 'next/image';

import { HomeIcon, UsersIcon, PhotoIcon, UserIcon, PhoneIcon, WrenchIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', icon: HomeIcon, href: '#', current: false },
  { name: 'Services', icon: WrenchIcon, href: '#services', current: false },
  { name: 'About', icon: UserIcon, href: '#about', current: false },
  { name: 'Contact', icon: PhoneIcon, href: '#contact', current: false },
]
const secondaryNavigation = [
  { name: 'Fall City', href: '#' },
  { name: 'North Bend', href: '#' },
  { name: 'Snolqualmie', href: '#' },
  { name: 'Seattle', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <div className="z-10 hidden  md:flex fixed flex-grow flex-col lg:mt-10 sm:mt-0 overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
      <div className="">
        <nav className="flex-1 space-y-8 bg-white px-2" aria-label="Sidebar">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className="space-y-1 ">
            <h3 className="px-3 text-sm font-medium text-gray-500" id="projects-headline">
              Serving
            </h3>
            <div className="space-y-1" role="group" aria-labelledby="projects-headline">
              {secondaryNavigation.map((item) => (
                <p
                  key={item.name}
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="truncate">{item.name}</span>
                </p>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
