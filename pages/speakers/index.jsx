import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";
import Header from "../../components/Header/Header";
import Speakers from "../../components/Header/Speakers";
import Footer from "../../components/Footer/Footer";
import BestHero from "../../components/HeroFolder/BestHero";
import LinkCards from "../../components/LinkCards/LinkCards";
import SpeakerCards from "../../components/DataCards/SpeakerCards";

const SpeakersPage = (props) => {
  const { products } = props;
  return (
    <Fragment>
      <Header />
      <Speakers />
      <ul className="productsUl">
        {products.map((item) => (
          <SpeakerCards
            key={item.id}
            id={item.id}
            slug={item.slug}
            src={item.image.mobile}
            name={item.name}
            description={item.description}
            new={item.new}
            category={item.category}
          />
        ))}
      </ul>
      <LinkCards />
      <BestHero />
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const slicedData = data.slice(4);
  const speakerData = slicedData.reverse();

  return {
    props: {
      products: speakerData,
    },
  };
}

export default SpeakersPage;
