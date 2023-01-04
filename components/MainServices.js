import { HomeIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import snowyhouse from '../public/snowyhouse.jpg';

const supportLinks = [
  {
    name: 'Home Organization',
    href: '#',
    description:
      'Any Room of Your home where you feel needs less clutter, more flow, simplicity and calmness.',
    icon: HomeIcon,
    listIcon: CheckIcon,
    areas:[
      'Bedroom',
      'Kitchen/Pantry',
      'Bathroom',
      'Laundry',
      'Closets',
      'Kids Room',
      'Playroom',
      'Home Office',
    ]
  },
  {
    name: 'Office Organization',
    href: '#',
    description:
      'Home Office Organization is crucial to staying productive for not only yourself but also for the projects you are tasked to complete. If you work from home and feel like your space needs a refresh or it never really worked for you in the first place, we can fix that. Lets create a workspace that you look forward to spending time in. ',
    icon: BuildingOffice2Icon,
    listIcon: CheckIcon,
    areas: [],
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src={snowyhouse}
            alt=""
          />
          <div className="absolute inset-0 bg-main-color/60 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-5xl">Organizational Services</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            When you schedule with me you can expect a clear and concise plan. The first step is to discuss the goals of the space. Next we will purge and sort any items that no longer serve a purpose. After that, we will organize and clean. Finally, we walk through and admire the functionality and purpose of the newly organized space. 
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
