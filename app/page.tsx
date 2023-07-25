import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Hero2 from "./Components/Hero2/Hero2";
import Sponsors from "./Components/Sponsors/Sponsors";
import Statistic from "./Components/Statistic/Statistic";
import Topics from "./Components/Topics/Topics";

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
