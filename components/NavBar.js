import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Mission', href: '#mission', current: false },
    { name: 'Gallery', href: '#gallery', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function NavBar() {
    const [showNav, setShowDrop] = useState(false);
    const handleNav = (e) => {
        setShowDrop(current => !current)
    }
    return (
        <>
            <div className={!showNav ? 'fixed z-50 rounded bg-main-color/90 shadow-lg shadow-gray-700 ' : 'transition-width transition-slowest flex fixed rounded z-50 w-full bg-main-color shadow-lg shadow-gray-700'}>
                <button onClick={handleNav}>{!showNav ? <Bars3Icon className="h-8 w-8 md:h-12 md:w-12 text-white rounded" aria-hidden="true" />: <XMarkIcon className="h-8 w-8 md:h-12 md:w-12 text-white " aria-hidden="true" />}</button>
                <nav className={!showNav ? 'hidden' : ' font-serif flex sm:flex-wrap '} aria-label="Sidebar">
                    {navigation.map((item) => (

                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'text-gray-900'  : 'text-white drop-shadow-xl  hover:bg-gray-50 hover:text-gray-900',
                                'flex items-center md:px-3 px-1.5  py-2 text-sm font-medium rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <span className="truncate drop-shadow-lg shadow-white md:text-xl">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </>
    )
}
