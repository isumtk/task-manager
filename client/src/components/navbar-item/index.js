import Link from "next/link";

const NavbarItem = (props) => {
  const { href, isActive, icon, iconAlt, title, onClick } = props;
  return (
    <Link href={href ? href : ""}>
      <li className={"mr-2"}>
        <div
          onClick={onClick ? onClick : null}
          className={`flex cursor-pointer select-none items-center rounded-xl py-2 px-4 ${
            isActive ? "bg-indigo-200" : null
          }`}
        >
          <div className="flex items-center">
            <img src={isActive ? iconAlt : icon} className={"h-8 w-8"} />
            <p className="ml-1 capitalize">{title}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default NavbarItem;
