import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";
import Header from "../../components/Header/Header";
import Earphones from "../../components/Header/Earphones";
import Footer from "../../components/Footer/Footer";
import BestHero from "../../components/HeroFolder/BestHero";
import LinkCards from "../../components/LinkCards/LinkCards";
import EarphoneCards from "../../components/DataCards/Earphones";

const EarphonesPage = (props) => {
  const { products } = props;
  return (
    <Fragment>
      <Header />
      <Earphones />
      <ul>
        {products.map((item) => (
          <EarphoneCards
            key={item.id}
            id={item.id}
            slug={item.slug}
            name={item.name}
            description={item.description}
            category={item.category}
            new={item.new}
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
  const earphoneData = data.slice(0, 1);

  return {
    props: {
      products: earphoneData,
    },
  };
}

export default EarphonesPage;
