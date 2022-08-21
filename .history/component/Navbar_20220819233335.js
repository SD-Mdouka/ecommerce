import Link from "next/link";
import Styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.navbar} role="navigation">
      <div className="container">
        <a className="logo" href="#">
          Logo Ecommerce
        </a>
        <ul className="nav navbar-nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/card">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
