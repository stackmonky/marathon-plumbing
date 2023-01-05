import Image from "next/image"
export default function Contact() {
    return (
      <div id="contact" className="relative bg-white py-16">
        <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl bg-main-color lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                    className=" z-10 rounded-3xl object-cover object-center shadow-2xl"
                    src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
  
            <div className="relative font-serif bg-main-color lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="text-6xl font-bold tracking-tight text-white" id="join-heading">
                  Contact
                </h2>
                <p className="text-xl text-white">
                  Reach out anytime day or night!
                </p>
                <div className="ml-3 text-base text-white">
                  <p className="text-3xl ">Marathon Plumbing</p>
                  <p className="text-xl">Bill Green</p>
                  <p className="text-xl">bgmarathon@gmail.com</p>
                  <p className="mt-1 text-lg">425-773-1683</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  