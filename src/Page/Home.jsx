import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Client from "../Components/Client";
import FutureFinance from "../Components/FutureFinance";
import Legacy from "../Components/Legacy";
import PHILOSOPHY from "../Components/PHILOSOPHY";
import Trusted from "../Components/Trusted";
import Technology from "../Components/Technology";




const Home = () => {
    return (
        <div>
            <Banner />
            <FutureFinance />
            <PHILOSOPHY />
            <Card />
            <Trusted />
            <Technology />
            <Client />
            <Legacy />

        </div>
    );
};

export default Home;