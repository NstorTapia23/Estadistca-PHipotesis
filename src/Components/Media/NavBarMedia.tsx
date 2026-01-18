import { Link } from "react-router-dom";

export function NavBarMedia() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav
        className="
        h-16
        flex flex-col sm:flex-row
        items-center justify-center
        gap-2 sm:gap-12
      "
      >
        <Link to="/1n" className="hover:underline">
          Una muestra
        </Link>

        <Link to="/2n" className="hover:underline">
          Dos muestras
        </Link>
      </nav>
    </header>
  );
}
