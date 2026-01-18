import { useState } from "react";
import { NavBarMedia } from "../NavBarMedia";
import { CalcMedia1n } from "./CalcMedia1n";

type DatosCalculo = {
  tamMuestra: number;
  significacion: number;
  tipoPrueba: number;
  varianza: number;
  varianzaConocida: boolean;
  mediaMuestral: number;
  mediaPoblacional: number;
};

export function Media1n() {
  const [tamMuestra, setTamMuestra] = useState("");
  const [significacion, setSignificacion] = useState("");
  const [tipoPrueba, setTipoPrueba] = useState(1);
  const [DesviacionTipica, setDesviacionTipica] = useState("");
  const [varianzaConocida, setVarianzaConocida] = useState(true);
  const [mostrar, setMostrar] = useState(false);
  const [mediaMuestral, setMediaMuestral] = useState("");
  const [mediaPoblacional, setMediaPoblacional] = useState("");

  // Estado para guardar los datos “congelados” al presionar Resolver
  const [datosCalculo, setDatosCalculo] = useState<DatosCalculo>();

  const handleResolver = () => {
    setDatosCalculo({
      tamMuestra: Number(tamMuestra),
      significacion: Number(significacion),
      tipoPrueba: Number(tipoPrueba),
      varianza: Number(DesviacionTipica),
      varianzaConocida,
      mediaMuestral: Number(mediaMuestral),
      mediaPoblacional: Number(mediaPoblacional),
    });
    setMostrar(true);
  };

  return (
    <div>
      <NavBarMedia />

      <div className="p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Resolución de la media con una muestra:
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tamaño de la muestra */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tamaño de la muestra</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={tamMuestra}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setTamMuestra(value);
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Media Muestral */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media Muestral</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={mediaMuestral}
              onChange={(e) => {
                const value = e.target.value;
                if (/^-?\d*\.?\d*$/.test(value)) setMediaMuestral(value);
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Media Poblacional */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Media Poblacional</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Ingrese tamaño"
              value={mediaPoblacional}
              onChange={(e) => {
                const value = e.target.value;
                if (/^-?\d*\.?\d*$/.test(value)) {
                  setMediaPoblacional(value);
                }
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Significación */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Significación</label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              value={significacion}
              onChange={(e) => {
                const value = e.target.value;
                if (/^(\d+(\.\d*)?)?$/.test(value)) setSignificacion(value);
              }}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tipo de prueba */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Tipo de prueba</label>
            <select
              value={tipoPrueba}
              onChange={(e) => setTipoPrueba(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={1}>Bilateral</option>
              <option value={2}>Unilateral Izquierda</option>
              <option value={3}>Unilateral Derecha</option>
            </select>
          </div>

          {/* Varianza */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Varianza</label>
            <select
              value={varianzaConocida ? "conocida" : "desconocida"}
              onChange={(e) =>
                setVarianzaConocida(e.target.value === "conocida")
              }
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="conocida">Conocida</option>
              <option value="desconocida">Desconocida</option>
            </select>

            {varianzaConocida ? (
              <>
                {/* Desviación Típica Poblacional */}
                <label className="mb-2 font-medium">
                  Desviacion Típica Poblacional
                </label>
                <input
                  placeholder="Desv Tipica"
                  type="text"
                  min={0}
                  value={DesviacionTipica}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) setDesviacionTipica(value);
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                             focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            ) : (
              <>
                {/* Desviación Típica Muestral */}
                <label className="mb-2 font-medium">
                  Desviación Típica Muestral
                </label>
                <input
                  type="text"
                  min={0}
                  value={DesviacionTipica}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^-?\d*\.?\d*$/.test(value)) setDesviacionTipica(value);
                  }}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base md:text-lg
                             focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Botón Resolver */}
      {!mostrar && (
        <button
          className="col-span-1 sm:col-span-2 lg:col-span-4 px-4 py-2 bg-blue-600 text-white rounded text-base md:text-lg"
          onClick={handleResolver}
        >
          Resolver
        </button>
      )}

      {/* Componente de cálculo con props “congeladas” */}
      {mostrar && datosCalculo && (
        <CalcMedia1n
          key={datosCalculo.tamMuestra}
          tamMuestra={datosCalculo.tamMuestra}
          significacion={datosCalculo.significacion}
          tipoPrueba={datosCalculo.tipoPrueba}
          DesviacionTipica={datosCalculo.varianza}
          varianzaConocida={datosCalculo.varianzaConocida}
          mediaMuestral={datosCalculo.mediaMuestral}
          mediaPoblacional={datosCalculo.mediaPoblacional}
          mostrar={mostrar}
        />
      )}
    </div>
  );
}
