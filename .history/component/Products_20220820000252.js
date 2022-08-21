import Image from "next/image";
const Products = () => {
  return (
    <div className="Products">
      <div>
        <Image src={Products.image} width={"200"} height={"300"} />
      </div>
      <ul>
        <li>Title</li>
        <li>Price</li>
      </ul>
    </div>
  );
};

export default Products;
