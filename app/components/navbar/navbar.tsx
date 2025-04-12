import { NavLink } from "./nav-link";
import { NavbarMobile } from "./navbar-mobile";

export const Navbar = () => {
  return (
    <div className="lg:bg-background-30 z-40 text-lg lg:sticky lg:top-0 lg:backdrop-blur-lg">
      <nav className="max-lg:hidden lg:mx-auto lg:flex lg:w-full lg:max-w-screen-2xl lg:items-stretch lg:justify-end lg:gap-4 lg:px-8 lg:py-4">
        <NavLink href="#services">Szolgáltatásaink</NavLink>
        <NavLink href="#references">Referenciák</NavLink>
        <NavLink href="#about-us">Rólunk</NavLink>
        <NavLink href="#faq">GYIK</NavLink>
      </nav>
      <NavbarMobile />
    </div>
  );
};
