import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestHero from "../../components/HeroFolder/BestHero";
import LinkCards from "../../components/LinkCards/LinkCards";
import DetailCard from "../../components/Details/DetailCard";

const HeadphoneProductDetailsPage = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <Header />
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loadedProduct.map((item) => (
          <DetailCard
            key={item.id}
            id={item.id}
            slug={item.slug}
            name={item.name}
            description={item.description}
            price={item.price}
            features={item.features}
            includes={item.includes}
            new={item.new}
            others={item.others}
          />
        ))}
      </ul>
      <LinkCards />
      <BestHero />
      <Footer />
    </Fragment>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const headphoneData = data.slice(1, 4);
  const revHeadPhoneData = headphoneData.reverse();

  return revHeadPhoneData;
}

export async function getStaticProps(context) {
  const { params } = context;

  const paramsId = params.productId;

  const revHeadPhoneData = await getData();

  const product = revHeadPhoneData.find((data) => data.slug === paramsId);

  const showProduct = [];

  showProduct.push(product);

  return {
    props: {
      loadedProduct: showProduct,
    },
  };
}

export async function getStaticPaths() {
  const revHeadPhoneData = await getData();

  const slugs = revHeadPhoneData.map((slug) => slug.slug);

  const params = slugs.map((slug) => ({ params: { productId: slug } }));

  return {
    paths: params,
    fallback: false,
  };
}

export default HeadphoneProductDetailsPage;
