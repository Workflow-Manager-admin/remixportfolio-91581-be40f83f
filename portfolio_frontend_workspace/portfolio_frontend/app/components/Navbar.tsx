import { Link, NavLink } from "@remix-run/react";

// PUBLIC_INTERFACE
export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 bg-gray-950/95 backdrop-blur shadow-lg border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="font-extrabold text-xl tracking-wide"
          aria-label="Home"
        >
          <span className="text-primary">My</span>
          <span className="text-accent">Portfolio</span>
        </Link>
        <div className="space-x-2 md:space-x-8 text-base font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-primary underline underline-offset-4"
                : "text-gray-200 hover:text-primary transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline underline-offset-4"
                : "text-gray-200 hover:text-primary transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline underline-offset-4"
                : "text-gray-200 hover:text-primary transition"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline underline-offset-4"
                : "text-gray-200 hover:text-primary transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
