import { useForm } from "react-hook-form";
import { useState } from "react";
import { CalcProporcion } from "./CalcProporcion";

export type useValues = {
  tipoPrueba: number;
  significacion: number;
  tamMuestra: number;
  numExitos: number;
  P0: number;
};

export function Proporcion() {
  const { register, handleSubmit } = useForm<useValues>();
  const [result, setResult] = useState<useValues | null>(null);
  const [mostrar, setMostrar] = useState(false);

  const onSubmit = (data: useValues) => {
    setResult(data);
    setMostrar(true);
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center mb-2">
            Resolución de la Proporción
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Prueba de hipótesis para una proporción poblacional
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Tipo de Prueba */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Tipo de Prueba</label>
              <select
                className={inputStyle}
                {...register("tipoPrueba", {
                  required: true,
                  valueAsNumber: true,
                })}
              >
                <option value={1}>Bilateral</option>
                <option value={2}>Unilateral Derecho</option>
                <option value={3}>Unilateral Izquierdo</option>
              </select>
            </div>

            {/* Nivel de Significación */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Significación</label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                className={inputStyle}
                {...register("significacion", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Número de Éxitos */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Número de éxitos</label>
              <input
                type="number"
                className={inputStyle}
                {...register("numExitos", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Proporción Hipotética */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">
                Proporción hipotética (P₀)
              </label>
              <input
                type="number"
                step="any"
                className={inputStyle}
                {...register("P0", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>

            {/* Tamaño de Muestra */}
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Tamaño de muestra</label>
              <input
                type="number"
                className={inputStyle}
                {...register("tamMuestra", {
                  required: true,
                  valueAsNumber: true,
                })}
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

          {mostrar && result && (
            <div className="mt-10 border-t pt-8">
              <CalcProporcion
                tipoPrueba={result.tipoPrueba}
                significacion={result.significacion}
                tamMuestra={result.tamMuestra}
                numExitos={result.numExitos}
                P0={result.P0}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
