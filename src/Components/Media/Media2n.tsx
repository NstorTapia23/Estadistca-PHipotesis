import { NavBarMedia } from "./NavBarMedia";
import { useState } from "react";

export function Media2n() {
  const [tamMuestra1, setTamMuestra1] = useState(0);
  const [tamMuestra2, setTamMuestra2] = useState(0);
  const [significacion, setSignificacion] = useState(0);
  const [tipoPrueba, setTipoPrueba] = useState(1);
  return (
    <div>
      <NavBarMedia />
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Resolución de la media con dos muestras:
        </h1>

        <div className="mt-6 flex gap-6">
          <div className="flex flex-col">
            <h2 className="mb-2">Tamaño de la muestra 1</h2>
            <input
              type="number"
              placeholder="Ingrese tamaño"
              min={0}
              value={tamMuestra1}
              onChange={(e) => setTamMuestra1(Number(e.target.value))}
              className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2">Tamaño de la muestra 2</h2>
            <input
              type="number"
              placeholder="Ingrese tamaño"
              min={0}
              value={tamMuestra2}
              onChange={(e) => setTamMuestra2(Number(e.target.value))}
              className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2">Significación</h2>
            <input
              type="number"
              step="0.01"
              min={0}
              placeholder="Ingrese media"
              value={significacion}
              onChange={(e) => setSignificacion(Number(e.target.value))}
              className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2">Tipo de prueba</h2>
            <select
              value={tipoPrueba}
              onChange={(e) => setTipoPrueba(Number(e.target.value))}
              className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Bilateral</option>
              <option value="2">Unilateral Izquierda</option>
              <option value="3">Unilateral Derecha</option>
            </select>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-2">Varianza Poblacional</h2>
            <input
              type="number"
              min={0}
              placeholder="varianza"
              className="w-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
