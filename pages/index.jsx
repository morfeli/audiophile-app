import { Fragment } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import HomeHero from "../components/HeroFolder/HomeHero";
import LinkCards from "../components/LinkCards/LinkCards";
import SpeakerHero1 from "../components/HeroFolder/SpeakerHero";
import SpeakerHero2 from "../components/HeroFolder/SpeakerHero2";
import EarphoneHero from "../components/HeroFolder/EarphoneHero";
import BestHero from "../components/HeroFolder/BestHero";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import { parseCookies } from "../components/helper/ParseReq";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Cart />
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
