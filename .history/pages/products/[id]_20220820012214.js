const singleProsuct = () => {
  return <div className="container">singleProsuct</div>;
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
}
