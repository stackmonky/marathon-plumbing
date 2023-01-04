
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
                  
                </div>
              </div>
            </div>
  
            <div className="relative font-serif bg-main-color lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                  Schedule a Consultation
                </h2>
                <p className="text-lg text-white">
                  {/*  */}
                </p>
                <div className="ml-3 text-base text-white">
                  <p className="text-2xl ">Marathon Plumbing</p>
                  <p>info@marathonplumbingfallcity.com</p>
                  <p className="mt-1">123-456-7891</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  