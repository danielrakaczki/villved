import { NavLink } from "./nav-link";

export const Navbar = () => {
  return (
    <div className="bg-background-30 sticky top-0 z-40 backdrop-blur-lg">
      <nav className="mx-auto flex w-full items-stretch justify-end gap-4 px-8 py-4 lg:max-w-screen-2xl">
        <NavLink href="#services">Szolgáltatásaink</NavLink>
        <NavLink href="#references">Referenciák</NavLink>
        <NavLink href="#about-us">Rólunk</NavLink>
        <NavLink href="#faq">GYIK</NavLink>
      </nav>
    </div>
  );
};
