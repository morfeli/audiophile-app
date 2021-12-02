import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <h1>Hello world!</h1>;
};

export default ProductDetailPage;
