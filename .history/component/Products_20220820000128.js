import Image from "next/image";
const Products = () => {
  return (
    <div className="Products">
      <div>
        <Image src={Products.image} width={"200"} height={"300"} />
      </div>
    </div>
  );
};

export default Products;
