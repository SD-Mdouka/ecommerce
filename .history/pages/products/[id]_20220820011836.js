const singleProsuct = () => {
  return <div className="container">singleProsuct</div>;
};

export default singleProsuct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
}
