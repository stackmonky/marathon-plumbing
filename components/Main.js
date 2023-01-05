import Contact from "./MainContact";
import Services from './MainServices.js';
import About from "./About";
import Footer from "./Footer";
import Head from 'next/head';
import NavBar from "./NavBar";
import Header from "./Header";
export default function Main() {
    return (
        <>
            <Head>
                <title>Marathon Plumbing Fall City</title>
                <meta name='description' content='Residential and Commercial Plumbing Services' />
            </Head>
            <div className="flex flex-row">
                <NavBar />
                <div className="m-auto">
                    <Header />
                    <About />
                    <Services />
                    <Contact />
                    <Footer />
                </div>

            </div>

        </>

    )
}