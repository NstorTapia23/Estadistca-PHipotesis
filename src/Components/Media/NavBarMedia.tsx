import { Link, useLocation } from "react-router-dom";

export function NavBarMedia() {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-lg font-medium transition-all
     ${
       location.pathname === path
         ? "bg-indigo-700 text-white shadow-inner"
         : "text-white hover:bg-indigo-500"
     }`;

  return (
    <header className="bg-indigo-600 shadow-md">
      <nav
        className="
          h-16 max-w-5xl mx-auto
          flex items-center justify-center
          gap-4 sm:gap-10
          px-4
        "
      >
        <Link to="/1n" className={linkStyle("/1n")}>
          Una muestra
        </Link>

        <Link to="/2n" className={linkStyle("/2n")}>
          Dos muestras
        </Link>
      </nav>
    </header>
  );
}
