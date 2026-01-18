import { NavBarMedia } from "./NavBarMedia";
import { useState } from "react";

export function Media2n() {
  const [tamMuestra1, setTamMuestra1] = useState("");
  const [tamMuestra2, setTamMuestra2] = useState("");
  const [varianza1, setVarianza1] = useState("");
  const [varianza2, setVarianza2] = useState("");
  const [significacion, setSignificacion] = useState("");
  const [tipoPrueba, setTipoPrueba] = useState(1);

  return (
    <div>
      <NavBarMedia />

      <div className="p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Resolución de la media con dos muestras:
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de la muestra 1</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={tamMuestra1}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setTamMuestra1(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2
             text-base md:text-lg focus:border-blue-500
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de la muestra 2</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={tamMuestra2}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setTamMuestra2(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2
             text-base md:text-lg focus:border-blue-500
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Varianza poblacional 1</label>
            <input
              type="text"
              min={0}
              placeholder="Varianza"
              value={varianza1}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setVarianza1(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Varianza poblacional 2</label>
            <input
              type="text"
              min={0}
              placeholder="Varianza"
              value={varianza2}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setVarianza2(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full rounded-md border border-gray-300 px-3 py-2
                         text-base md:text-lg focus:border-blue-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Bilateral</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
