import { useForm } from "react-hook-form";
import { useState } from "react";
import { CalcVarianza } from "./CalcVarianza";

export type useValues = {
  caso: number;
  significacion: number;
  mediaMuestral: number;
  mediaPoblacional: number;
  desvTip: number;
  tamMuestra: number;
};
export function Varianza() {
  const { register, handleSubmit } = useForm<useValues>();
  const [result, setResult] = useState<useValues | null>(null);
  const [mostrar, setMostrar] = useState(false);
  const onSubmit = (data: useValues) => {
    setResult(data);
    setMostrar(true);
    console.log(data);
  };
  return (
    <div className="p-4 md:p-6">
      {/* caso 1 2 3 significacion media muestral media poblacional desv tip tam
      muestra */}
      <h1 className="text-2xl font-bold mb-4">Resolución de la varianza</h1>
      <form
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Tipo de Prueba */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="caso">
            Tipo de Prueba
          </label>
          <select
            className="w-full rounded-md border px-3 py-2"
            {...register("caso", { required: true })}
          >
            <option value="1">Bilateral</option>
            <option value="2">Unilateral Izquierdo</option>
            <option value="3">Unilateral Derecho</option>
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
        {/* Media Muestral */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="mediaMuestral">
            Media Muestral
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            id="mediaMuestral"
            {...register("mediaMuestral", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        {/* Media Poblacional */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="mediaPoblacional">
            Media Poblacional
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            id="mediaPoblacional"
            {...register("mediaPoblacional", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>
        {/* Desviación Típica */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium" htmlFor="desvTip">
            Desviacion Típica
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            type="number"
            id="desvTip"
            {...register("desvTip", {
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
        <CalcVarianza
          caso={result.caso}
          significacion={result.significacion}
          mediaMuestral={result.mediaMuestral}
          mediaPoblacional={result.mediaPoblacional}
          desvTip={result.desvTip}
          tamMuestra={result.tamMuestra}
        />
      )}
    </div>
  );
}
