import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Headphones from "../../components/Header/Headphones";
import HeadphoneCards from "../../components/DataCards/HeadphoneCards";
import LinkCards from "../../components/LinkCards/LinkCards";
import BestHero from "../../components/HeroFolder/BestHero";

const HeadphonesPage = (props) => {
  const { products } = props;
  return (
    <Fragment>
      <Header />
      <Headphones />
      <ul className="productsUl">
        {products.map((item) => (
          <HeadphoneCards
            key={item.id}
            id={item.id}
            slug={item.slug}
            category={item.category}
            name={item.name}
            description={item.description}
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
  const headphoneData = data.slice(1, 4);
  const revHeadPhoneData = headphoneData.reverse();

  return {
    props: {
      products: revHeadPhoneData,
    },
  };
}

export default HeadphonesPage;
