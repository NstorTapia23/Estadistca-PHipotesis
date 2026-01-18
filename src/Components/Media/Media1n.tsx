import { useState } from "react";
import { NavBarMedia } from "./NavBarMedia";

export function Media1n() {
  const [tamMuestra, setTamMuestra] = useState("");
  const [significacion, setSignificacion] = useState("");
  const [tipoPrueba, setTipoPrueba] = useState(1);
  const [varianza, setVarianza] = useState("");

  return (
    <div>
      <NavBarMedia />

      <div className="p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Resolución de la media con una muestra:
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de la muestra</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={tamMuestra}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setTamMuestra(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2
             text-base md:text-lg focus:border-blue-500
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Significación</label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0.05"
              value={significacion}
              onChange={(e) => {
                const value = e.target.value;

                if (/^(\d+(\.\d*)?)?$/.test(value)) {
                  setSignificacion(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2
             text-base md:text-lg focus:border-blue-500
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tipo de prueba</label>
            <select
              value={tipoPrueba}
              onChange={(e) => setTipoPrueba(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Bilateral</option>
              <option value="2">Unilateral Izquierda</option>
              <option value="3">Unilateral Derecha</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Varianza Poblacional</label>
            <input
              type="text"
              min={0}
              placeholder="Varianza"
              value={varianza}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setVarianza(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
