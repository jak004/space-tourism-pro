import { NavLink } from 'react-router-dom';

export function SegmentedNav({ items, ariaLabel }) {
  return (
    <nav className="segmented-nav" aria-label={ariaLabel}>
      <ul>
        {items.map((item, index) => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => `segment-link ${isActive ? 'is-active' : ''}`}>
              {item.number !== undefined ? <span>{item.number}</span> : <span className="sr-only">{index + 1}</span>}
              {item.label && <span className="segment-label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
