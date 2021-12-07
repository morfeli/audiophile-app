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
  console.log(loadedProduct);

  return (
    <Fragment>
      <Header />
      <ul>
        {loadedProduct.map((item) => (
          <DetailCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            features={item.features}
            includes={item.includes}
            galleryFirst={item.gallery.first.mobile}
            gallerySecond={item.gallery.second}
            galleryThird={item.gallery.third}
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

async function getData() {
  const filePath = path.join(process.cwd(), "data.json");
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
