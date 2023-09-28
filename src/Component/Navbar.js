import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Incedo</a>
    <form className="d-flex" role="search">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      <button type="button" className="btn btn-light mx-2">Log in</button>
      {/* <button type="button" class="btn btn-light">Sign up</button> */}
      <li className="nav-item dropdown mx-2">
          <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign up
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Participant</a></li>
            <li><a className="dropdown-item" href="#">Panelist</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">Admin</a></li>
          </ul>
        </li>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar
