import Image from "next/image";
import Link from "next/link";
import Styles from "./../styles/Products.module.css";

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
      <Link href={`/products/${id}`} className="btn-detaile">
        More Details
      </Link>
    </div>
  );
};

export default Products;
