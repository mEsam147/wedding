import { LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ className }: { className: string }) {
  const navLink = [
    { id: 1, title: "Home", href: "/" },
    {
      id: 2,
      title: "Categories",
      href: "/categories",
      icon: <LayoutGrid className="size-5" />,
    },
    { id: 3, title: "Brands", href: "/brands" },
    { id: 4, title: "Pages", href: "/pages" },
  ];
  return (
    <div className={className}>
      {navLink.map((item) => (
        <Link
          to={item.href}
          className="flex items-center gap-x-2 text-gray-800 hover:text-gray-500"
          key={item.id}
        >
          {item.icon && <span>{item.icon}</span>}
          <span className="text-lg">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
