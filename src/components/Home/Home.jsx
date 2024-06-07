
import CountryHome from "../Country/CountryHome/CountryHome";
import FQA from "../FQA/FQA";
import TopFooter from "../Footer/TopFooter";
import Hero from "../Hero/Hero";
import HomeCard from "../HomeCard/HomeCard";
import Newsletter from "../Newsletter/Newsletter";
import Sponsor from "../Sponsor/Sponsor";




const Home = () => {
    return (
        <div>

            <Hero></Hero>
            <Sponsor></Sponsor>
            <CountryHome></CountryHome>
            <HomeCard></HomeCard>
            <FQA></FQA>
            <Newsletter></Newsletter>
            <TopFooter></TopFooter>
            
            
        </div>
    );
};

export default Home;