import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { navItems } from '../../data/spaceData';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className="site-header">
      <NavLink className="site-logo" to="/" aria-label="Space Tourism home" onClick={() => setOpen(false)}>
        <img src="/assets/shared/logo.svg" alt="" />
      </NavLink>

      <div className="header-rule" aria-hidden="true" />

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <img src={open ? '/assets/shared/icon-close.svg' : '/assets/shared/icon-hamburger.svg'} alt="" />
      </button>

      <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span className="nav-number">{item.number}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
