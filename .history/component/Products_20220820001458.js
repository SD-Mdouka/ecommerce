import Image from "next/image";
const Products = ({ product }) => {
  const { title, price, image, id } = product;
  return (
    <div className="Products" key={id}>
      <div>
        <Image src={image} width={"200"} height={"300"} />
      </div>
      <ul>
        <li>{title}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

export default Products;
