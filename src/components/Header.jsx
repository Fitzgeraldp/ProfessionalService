import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' }
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav">
        <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>
          Patrick <span>Fitzgerald</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link.to}>
              {/* NavLink sets aria-current="page" automatically when
                  active — style.css targets that to underline the
                  current page, same as [aria-current="page"] did on the
                  static HTML version of this site. */}
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
