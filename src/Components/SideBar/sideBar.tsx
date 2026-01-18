import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        ☰
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4
          transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
          Estadística
        </h2>

        <nav className="flex flex-col gap-2">
          <Link to="/" className="px-4 py-2 rounded hover:bg-gray-700">
            Inicio
          </Link>

          <Link to="/1n" className="px-4 py-2 rounded hover:bg-gray-700">
            Media
          </Link>

          <Link to="/Varianza" className="px-4 py-2 rounded hover:bg-gray-700">
            Varianza
          </Link>

          <Link to="/Parametro" className="px-4 py-2 rounded hover:bg-gray-700">
            Parametro
          </Link>
        </nav>
      </div>
    </>
  );
}
