import React from "react"

function Header () {
    return (
        <nav className="#00e676 green accent-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">AMovies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Repo</a></li>
          </ul>
        </div>
      </nav>
    )
}

export {Header}