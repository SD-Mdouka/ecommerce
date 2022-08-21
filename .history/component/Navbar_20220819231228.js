const Navbar = () => {
  return (
    <nav class="navbar" role="navigation">
      <div className="container">
        <a class="logo" href="#">
          Title
        </a>
        <ul class="nav navbar-nav">
          <li class="active">
            <link href="#">Home</link>
          </li>
          <li>
            <link href="#">About</link>
          </li>
          <li>
            <link href="#">Contact</link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
