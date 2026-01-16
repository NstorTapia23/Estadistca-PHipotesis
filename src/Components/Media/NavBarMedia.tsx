import { Link } from "react-router-dom";

export function NavBarMedia() {
  return (
    <header className="h-16 bg-indigo-600 text-white flex items-center justify-center">
      <nav className="flex gap-64">
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
