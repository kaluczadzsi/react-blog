import NavListItem from './NavListItem';

const NavLinks = () => {
  return (
    <ul className="nav-links flex gap-20 mmd:hidden text-secondary">
      <NavListItem to="/home" label="Home" />
      <NavListItem to="/" label="Post" />
      <NavListItem to="/" label="About" />
    </ul>
  );
};

export default NavLinks;
