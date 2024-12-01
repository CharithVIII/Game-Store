import { Link } from "react-router-dom";

function Nav() {
    return (
        <div classNameName="nav">
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img class="logo" src="https://th.bing.com/th/id/OIG1.i_WS_pK_cWO4z_fkTbBK?pid=ImgGn" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/newlyadded">Newly Added</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/popular">Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/classics">Classics</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Nav;