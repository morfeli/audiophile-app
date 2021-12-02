import { Fragment } from "react";
import Header from "../components/Header/Header";
import HomeHero from "../components/HeroFolder/HomeHero";
import LinkCards from "../components/LinkCards/LinkCards";
import SpeakerHero1 from "../components/HeroFolder/SpeakerHero";
import SpeakerHero2 from "../components/HeroFolder/SpeakerHero2";
import EarphoneHero from "../components/HeroFolder/EarphoneHero";
import BestHero from "../components/HeroFolder/BestHero";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HomeHero />
      <LinkCards />
      <SpeakerHero1 />
      <SpeakerHero2 />
      <EarphoneHero />
      <BestHero />
      <Footer />
    </Fragment>
  );
}
