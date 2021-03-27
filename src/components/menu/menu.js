import React from 'react';
import { Link } from 'gatsby';

// data
const links = [
  {
    text: "Home",
    url: "/",
  }
]

const Menu = () => {
  return(
    <nav className="mb-4 nav bg-blue">
      <ul className="flex flex-row justify-center">
      {links.map(link => (
          <li className="py-2 mx-2" key={link.url}>
            <Link to={link.url} className="text-white">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Menu;
