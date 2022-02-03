import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestHero from "../../components/HeroFolder/BestHero";
import LinkCards from "../../components/LinkCards/LinkCards";
import DetailCard from "../../components/Details/DetailCard";

const EarphoneProductDetailsPage = (props) => {
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
  const earphoneData = data.slice(0, 1);
  return earphoneData;
}

export async function getStaticProps(context) {
  const { params } = context;

  const paramsId = params.productId;

  const earphoneData = await getData();

  const product = earphoneData.find((data) => data.slug === paramsId);

  const showProduct = [];

  showProduct.push(product);

  return {
    props: {
      loadedProduct: showProduct,
    },
  };
}

export async function getStaticPaths() {
  const earphoneData = await getData();

  const slugs = earphoneData.map((slug) => slug.slug);

  const params = slugs.map((slug) => ({ params: { productId: slug } }));

  return {
    paths: params,
    fallback: false,
  };
}

export default EarphoneProductDetailsPage;
