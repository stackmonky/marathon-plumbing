const faqs = [
    {
      id: 1,
      question: "Home Organization",
      answer:
        "Staying Happy and Healthy isn't just about Keeping up at the gym or eating the right thing. Organizing your environment is crucial to keeping a sound mind, body, and spirit. ",
    },
    
    {
      id: 2,
      question: "Office Organization",
      answer:
        "A good Organized Office Space can optimize your ability to complete projects. Knowing where things are stored and filed means you are not spending any extra time trying to remember where you placed something.",
    },
    
    {
      id: 3,
      question: "Storage Organization",
      answer:
        "Stockpiling things over the years into extra storage space and now you have run out? Let's organize it, categorize it, and optimize the space so you can maximize space.",
    },
    
  ]
  
  export default function Mission() {
    return (
      <div id="mission" className="bg-white font-serif">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">The Path Home Mission</h2>
            <p className="mt-4 text-xl text-gray-500 leading-relaxed">
              Organize your home, Organize Your Office, Organize Your mind. Whether it&apos;s working or relaxing, having an organized environment being free from Clutter, Garbage, and ridding of anything that gets in the way, does wonders for your ability to enjoy the space you are in. Not sure where to start? We are here to help.  
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-gray-900 text-xl">{faq.question}</dt>
                  <dd className="mt-3 text-gray-500 text-xl">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }