import Banner from "./components/Home/Banner";
import Footer from "./components/Home/Footer";
import Hero2 from "./components/Home/Hero2";
import Sponsors from "./components/Home/Sponsors";
import Statistic from "./components/Home/Statistic";
import Topics from "./components/Home/Topics";

export default function Home() {
    return (
        <main>
            <Banner></Banner>
            <Statistic></Statistic>
            <Hero2></Hero2>
            <Topics></Topics>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
}
