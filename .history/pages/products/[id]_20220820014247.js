import Styles from "./../../styles/Products.module.css";
import Head from "next/dist/shared/lib/head";
import Image from "next/image";

const singleProsuct = ({ product }) => {
  const { title, price, desciption, category, image, id } = product;
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <div className={Styles.products} key={id}>
        <div>
          <Image src={image} width={"200"} height={"300"} />
        </div>
        <ul>
          <li>{title}</li>
          <li>{category}</li>
          <li>{price} ,00£ </li>
          <li>{desciption}</li>
        </ul>
      </div>
    </div>
  );
};

export default singleProsuct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();
  return {
    props: { product },
  };
}
