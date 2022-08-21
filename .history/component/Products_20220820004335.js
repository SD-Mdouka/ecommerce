import Image from "next/image";
import Styles from "./../styles/Products.module";

const Products = ({ product }) => {
  const { title, price, image, id } = product;
  return (
    <div className={Styles.products} key={id}>
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
