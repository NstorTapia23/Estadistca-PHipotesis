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
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Resolución de la varianza</h1>
      <form
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Tipo de Prueba */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="tipoPrueba">
            Tipo de Prueba
          </label>
          <select
            className="w-full rounded-md border px-3 py-2"
            {...register("tipoPrueba", { required: true, valueAsNumber: true })}
          >
            <option value={1}>Bilateral</option>
            <option value={2}>Unilateral Derecho</option>
            <option value={3}>Unilateral Izquierdo</option>
          </select>
        </div>
        {/* Nivel de Significación */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="significacion">
            Significacion
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            step={"0.01"}
            inputMode="decimal"
            {...register("significacion", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        {/* Numero de Exitos */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="numExitos">
            Numero de exitos
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            step={"any"}
            id="numExitos"
            {...register("numExitos", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        {/* Proporcion Poblacional Hipotetica */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="P0">
            Proporcion Hipotetica
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            id="P0"
            step="any"
            {...register("P0", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        {/* Tamaño de Muestra */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="tamMuestra">
            Tamaño Muestra
          </label>
          <input
            inputMode="decimal"
            pattern="[0-9]*"
            className="w-full rounded-md border px-3 py-2"
            type="number"
            id="tamMuestra"
            {...register("tamMuestra", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        {!mostrar && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Calcular
            </button>
          </div>
        )}
      </form>
      {mostrar && result && (
        <CalcProporcion
          tipoPrueba={result.tipoPrueba}
          significacion={result.significacion}
          tamMuestra={result.tamMuestra}
          numExitos={result.numExitos}
          P0={result.P0}
        />
      )}
    </div>
  );
}
