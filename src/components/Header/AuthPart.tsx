import { LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPart() {
    const isAuth = false;
  const menuLinks = [
    {
      label: "Profile",
      icon: <User size={16} />,
      to: "#",
    },
    {
      label: "Settings",
      icon: <Settings size={16} />,
      to: "#",
    },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      to: "#",
    },
  ];

  const countries = [
    {
      name: "UAE",
      code: "uae",
      flag: "https://flagcdn.com/w320/ae.png",
    },
    {
      name: "UK",
      code: "uk",
      flag: "https://flagcdn.com/w320/gb.png",
    },
  ];

  const [selected, setSelected] = useState<string | null>("uae");

  const selectedCountry = countries.find((c) => c.code === selected);
  return (
    <div className="flex justify-between items-center my-1">
      <div className="hidden md:block">
        <h2
          className="
        relative
        bg-[linear-gradient(to_right,_#FD9BBE,_#F3A095)]
        p-3 text-white
        "
        >
          30% off on all products enter code: joolie2020
        </h2>
      </div>
      <div className=" w-[84px] ">
        <img src="/logo.png" className="w-full" alt="" />
      </div>
      <div className="flex items-center gap-x-1.5">
        {isAuth ? (
          <div className="flex items-center gap-x-1.5">
            <div className="dropdown dropdown-end rounded-full shadow">
              <label tabIndex={0} className="btn btn-ghost btn-circle rounded-full avatar">
                <div className="w-10 rounded-full">
                  <img src="/avatar.jpg" alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {menuLinks.map(({ label, icon, to }) => (
                  <li key={label} className={`${label==="Logout" ?" border-t border-gray-400 ":""} mt-1 `}>
                    <Link to={to} className={`flex items-center gap-x-2  my-1`}>
                      {icon}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 btn-ghost">
                  {selectedCountry && (
                    <div className="flex items-center gap-2">
                      <img
                        src={selectedCountry.flag}
                        alt={selectedCountry.code}
                        className="w-6 h-4 rounded"
                      />
                      <span>{selectedCountry.name}</span>
                    </div>
                  )}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                >
                  {countries.map((country) => (
                    <li key={country.code}>
                      <a
                        onClick={() => setSelected(country.code)}
                        className="flex items-center gap-3"
                      >
                        <img
                          src={country.flag}
                          alt={country.code}
                          className="w-6 h-4 rounded"
                        />
                        {country.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-x-0.5 ">
              <button className="btn btn-ghost btn-sm flex items-center gap-x-1 uppercase">
                <User />
                Login
              </button>
              <div className="h-5 w-0.5 bg-black" />
              <button className="btn btn-ghost btn-sm flex items-center gap-x-1 uppercase">
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
