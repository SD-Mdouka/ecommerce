import Products from "../component/Products";
import Head from "next/dist/shared/lib/head";

const index = ({ productList }) => {
  return (
    <main className="container">
      <Head>
        <title>Project E-Commerce</title>
      </Head>
      <div className="main">
        {productList.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default index;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const productList = await req.json();
  return {
    props: { productList },
  };
}
