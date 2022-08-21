const singleProsuct = ({ product }) => {
  const { title, price, desciption, category, image, id } = product;
  return <div className="container">{title}</div>;
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
