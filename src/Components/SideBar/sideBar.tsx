import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
        Estadística
      </h2>

      <nav className="flex flex-col gap-2">
        <Link to="/" className="px-4 py-2 rounded hover:bg-gray-700 transition">
          Inicio
        </Link>

        <Link
          to="/1n"
          className="px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Media
        </Link>

        <Link
          to="/Varianza"
          className="px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Varianza
        </Link>

        <Link
          to="/OtraCosa"
          className="px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Otra Cosa
        </Link>
      </nav>
    </div>
  );
}
