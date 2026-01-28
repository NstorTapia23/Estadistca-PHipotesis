import type { useValues } from "./Proporcion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ComparacionProporcion } from "./ComparacionProporcion";

type useValues2 = {
  valorTabla: number;
};

export function CalcProporcion({
  tipoPrueba,
  significacion,
  tamMuestra,
  numExitos,
  P0,
}: useValues) {
  const [mostrarComparacion, setMostrarComparacion] = useState(false);
  const { register, handleSubmit, watch } = useForm<useValues2>();

  const resultadoTabla = ValorTablaConocida(tipoPrueba, significacion);
  const valorTabla = watch("valorTabla");

  const onSubmit = () => setMostrarComparacion(true);

  return (
    <div className="mt-6 max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Valor crítico</h2>
        <p className="text-sm text-gray-600 mt-1">
          Busque en la tabla el valor{" "}
          <span className="font-semibold text-blue-600">{resultadoTabla}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Valor encontrado en la tabla
          </label>
          <input
            type="number"
            step="any"
            placeholder="Ej: 1.96"
            {...register("valorTabla", { required: true, valueAsNumber: true })}
            className="rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500 text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={mostrarComparacion}
          className={`py-2 rounded-md font-medium transition
            ${
              mostrarComparacion
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {mostrarComparacion ? "Resultado mostrado" : "Comparar"}
        </button>
      </form>

      {mostrarComparacion && valorTabla !== undefined && (
        <div className="pt-4 border-t border-gray-200">
          <ComparacionProporcion
            tipoPrueba={tipoPrueba}
            estadigrafo={Estadigrafo(tamMuestra, numExitos, P0)}
            valorTabla={valorTabla}
            significacion={significacion}
          />
        </div>
      )}
    </div>
  );
}

function Estadigrafo(tamMuestra: number, numExitos: number, P0: number) {
  return (numExitos - P0 * tamMuestra) / Math.sqrt(P0 * (1 - P0) * tamMuestra);
}

function ValorTablaConocida(tipoPrueba: number, significacion: number) {
  switch (tipoPrueba) {
    case 1:
      return 1 - significacion / 2;
    case 2:
    case 3:
      return 1 - significacion;
    default:
      return "error";
  }
}
