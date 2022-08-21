import Link from "next/link";
const Navbar = () => {
  return (
    <nav class="navbar" role="navigation">
      <div className="container">
        <a class="logo" href="#">
          Title
        </a>
        <ul class="nav navbar-nav">
          <li class="active">
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
