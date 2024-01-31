import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2  pr-4 text-[#8fc0e2] sm:text-xl rounded md:p-0 hover:text-indigo-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
