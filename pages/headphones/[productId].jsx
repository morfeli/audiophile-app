import { Fragment } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestHero from "../../components/HeroFolder/BestHero";
import LinkCards from "../../components/LinkCards/LinkCards";

const HeadphoneProductDetailsPage = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Fragment>
      <Header />
      <LinkCards />
      <BestHero />
      <Footer />
    </Fragment>
  );
};

export default HeadphoneProductDetailsPage;
