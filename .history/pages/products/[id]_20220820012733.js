const singleProsuct = ({ product }) => {
  return <div className="container">{product.title}</div>;
};

export default singleProsuct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id },
    };
  });
  return {
    paths,
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
