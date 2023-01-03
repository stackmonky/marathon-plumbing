import Image from "next/image";
// import some before and after images
const files = [
  {
    tag: "before",
    source:
    // replace before image
      "#",
  },
  {
    tag: "after",
    source:
    // replace after image
      "#",
  },
  // More files...
]

export default function Gallery() {
  return (
    <>
      <div id="gallery" className=" pt-20 text-center">
        <h2 className="mb-6 mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl font-serif mb-10">
          My Work
        </h2>
        <ul role="list" className="flex flex-row flex-wrap justify-center md:gap-28 gap-4">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {/* <Image src={file.source} alt="" className="border-solid border-x-8 border-main-color pointer-events-none object-cover h-72 w-96" /> */}
                <p className="italic">
                  {file.tag.includes("before") ? "Before" : "After"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}