import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavBarMedia } from "../NavBarMedia";
import { CalcMedia1n } from "./CalcMedia1n";

type DatosCalculo = {
  tamMuestra: number;
  significacion: number;
  tipoPrueba: number;
  DesviacionTipica: number;
  varianzaConocida: "true" | "false";
  mediaMuestral: number;
  mediaPoblacional: number;
};

export function Media1n() {
  const [mostrar, setMostrar] = useState(false);
  const [datosCalculo, setDatosCalculo] = useState<DatosCalculo>();

  const { register, handleSubmit, watch } = useForm<DatosCalculo>({
    defaultValues: {
      tipoPrueba: 1,
      varianzaConocida: "true",
    },
  });

  const varianzaConocida = watch("varianzaConocida");

  const onSubmit = (data: DatosCalculo) => {
    setDatosCalculo(data);
    console.log(data);
    setMostrar(true);
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <NavBarMedia />

      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-3xl font-bold text-center mb-2">
              Resolución de la media (una muestra)
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Prueba de hipótesis para la media poblacional
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Tamaño de la muestra */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Tamaño de la muestra</label>
                <input
                  type="number"
                  min={1}
                  {...register("tamMuestra", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {/* Media muestral */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Media muestral</label>
                <input
                  type="number"
                  step="any"
                  {...register("mediaMuestral", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {/* Media poblacional */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Media poblacional</label>
                <input
                  type="number"
                  step="any"
                  {...register("mediaPoblacional", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {/* Significación */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Significación (α)</label>
                <input
                  type="number"
                  step="0.01"
                  min={0}
                  max={1}
                  {...register("significacion", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {/* Tipo de prueba */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Tipo de prueba</label>
                <select
                  {...register("tipoPrueba", { valueAsNumber: true })}
                  className={inputStyle}
                >
                  <option value={1}>Bilateral</option>
                  <option value={2}>Unilateral Derecha</option>
                  <option value={3}>Unilateral Izquierda</option>
                </select>
              </div>

              {/* Varianza */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium">Varianza</label>
                <select
                  {...register("varianzaConocida", {
                    setValueAs: (v) => v === "true",
                  })}
                  className={inputStyle}
                >
                  <option value="true">Conocida</option>
                  <option value="false">Desconocida</option>
                </select>

                <label className="mb-2 font-medium mt-3">
                  {varianzaConocida
                    ? "Desviación típica poblacional"
                    : "Desviación típica muestral"}
                </label>

                <input
                  type="number"
                  step="any"
                  {...register("DesviacionTipica", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className={inputStyle}
                />
              </div>

              {!mostrar && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-10 py-3 bg-blue-600 text-white font-semibold
                    rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg
                    transition-all"
                  >
                    Calcular
                  </button>
                </div>
              )}
            </form>

            {mostrar && datosCalculo && (
              <div className="mt-10 border-t pt-8">
                <CalcMedia1n {...datosCalculo} mostrar={mostrar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
