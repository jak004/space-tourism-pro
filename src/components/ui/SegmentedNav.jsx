import { NavLink } from 'react-router-dom';

export function SegmentedNav({ items, ariaLabel, variant = 'default' }) {
  const navClassName = `segmented-nav segmented-nav--${variant}`;
  const linkClassName = ({ isActive }) =>
    `segment-link segment-link--${variant}${isActive ? ' is-active' : ''}`;

  return (
    <nav className={navClassName} aria-label={ariaLabel}>
      <ul>
        {items.map((item, index) => (
          <li key={item.to}>
            <NavLink to={item.to} className={linkClassName}>
              {item.number !== undefined ? <span>{item.number}</span> : <span className="sr-only">{index + 1}</span>}
              {item.label && <span className="segment-label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
