import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Headphones from "../../components/Header/Headphones";
import HeadphoneCards from "../../components/Headphones/HeadphoneCards";

const HeadphonesPage = (props) => {
  const { products } = props;
  return (
    <Fragment>
      <Header />
      <Headphones />
      <ul>
        {products.map((item) => (
          <HeadphoneCards
            key={item.id}
            id={item.id}
            image={item.image.mobile}
            name={item.name}
            description={item.description}
            new={item.new}
          />
        ))}
      </ul>
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
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
