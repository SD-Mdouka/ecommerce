import Products from "../component/Products";

const index = ({ productList }) => {
  return (
    <main className="container">
      {productList.map((product) => (
        <Products key={product.id} product={product} />
      ))}
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
