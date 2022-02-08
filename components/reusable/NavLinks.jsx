import Link from "next/link";

const NavLinks = ({ open }) => {
  let navClasses = "navigation-bar";

  if (open) {
    navClasses = "navigation-bar open";
  } else {
    navClasses = "navigation-bar";
  }

  return (
    <nav className={navClasses}>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/headphones">
          <li>Headphones</li>
        </Link>
        <Link href="/speakers">
          <li>Speakers</li>
        </Link>
        <Link href="/earphones">
          <li>Earphones</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
