import { HomeIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import snowyhouse from '../public/snowyhouse.jpg';

const supportLinks = [
  {
    name: 'Residential',
    href: '#',
    description:
      'From Leaking Faucets to Wells, if you need it installed, fixed, or upgraded, I make it hassle free.',
    icon: HomeIcon,
    listIcon: CheckIcon,
    areas:[
      'Emergencies',
      'Clogs and Drains',
      'Installs, Upgrades and Repairs',
      'Leaky Toilets, Faucets and Pipes',
      'Septic Systems',
      'Water Heaters',
      'Well Pumps',
    ]
  },
  {
    name: 'Commercial',
    href: '#',
    description:
      'Office Buildings, Work sites, Venues and everything in between. Providing adequate plumbing to any sort of establishment is important. We can handle and job big or small when it comes to your place of business',
    icon: BuildingOffice2Icon,
    listIcon: CheckIcon,
    areas: ['Emergencies',
      'Clogs and Drains',
      'Installs, Upgrades and Repairs',
      'Leaky Toilets, Faucets and Pipes',
      'Cleaning and Mainteinance'
    
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div id='services' className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src='https://plus.unsplash.com/premium_photo-1664301132849-f52af765df79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt=""
          />
          <div className="absolute inset-0 bg-main-color/60 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-5xl">Services</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
           Reach out! With Marathon Plumbing, We come runnin! 
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-20">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-main-color p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                <div  className='grid grid-cols-2'>
                  {link.areas.map((area) => (
                    <p key={link.name} className=' mt-2 text-gray-500 flex'>{area}<link.listIcon className='h-6 w-6 text-main-color'/></p>
                  ))}

                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
