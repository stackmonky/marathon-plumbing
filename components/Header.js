import Image from "next/image";
import logo from '../public/logo.svg';

export default function Header() {
    return (
        <div className="bg-main-color">
            <div className="flex justify-center mx-auto max-w-7xl px-4 sm:py-24 sm:px-6 md:py-36 lg:py-60">
                <Image className=""
                alt="the path home logo main image"
                    src={logo}
                    
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
            </div>
        </div>
    )
}