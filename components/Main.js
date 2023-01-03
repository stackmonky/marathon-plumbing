import Contact from "./MainContact";
import Gallery from "./Gallery";
import Services from './MainServices.js';
import About from "./About";
import Mission from "./MainMissionState";
import Footer from "./Footer";
import Head from 'next/head';
import NavBar from "./NavBar";
import Header from "./Header";
export default function Main() {
    return (
        <>
            <Head>
                <title>The Path Home Coaching</title>
                <meta name='description' content='Home and office organization.' />
            </Head>
            <NavBar />
            <Header />
            <Mission />
            <Gallery />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>

    )
}