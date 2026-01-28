import type { useValues } from "./Varianza";
import { ComparacionVarianza } from "./ComparacionVarianza";
import { useForm } from "react-hook-form";
import { useState } from "react";
type useValues2 = {
  valorTabla: number;
};

export function CalcVarianza({
  caso,
  significacion,
  varianzaMuestral,
  varianzaPoblacional,
  tamMuestra,
}: useValues) {
  const { register, handleSubmit } = useForm<useValues2>();

  const [mostrarComparacion, setMostrarComparacion] = useState(false);
  const [results, setResults] = useState<useValues2 | null>(null);
  const onSubmit = (data: useValues2) => {
    setResults(data);
    setMostrarComparacion(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Busque el valor en la tabla para
            {valorTablaVarConocida(significacion, caso, tamMuestra)}
          </label>
          <input
            type="number"
            step="any"
            placeholder="Ej: 1.96"
            {...register("valorTabla", {
              required: true,
              valueAsNumber: true,
            })}
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
      {mostrarComparacion && results && (
        <ComparacionVarianza
          caso={caso}
          valorTabla={results.valorTabla}
          tamMuestra={tamMuestra}
          varianzaMuestral={varianzaMuestral}
          varianzaPoblacional={varianzaPoblacional}
        />
      )}
    </div>
  );
}

function valorTablaVarConocida(
  significacion: number,
  caso: number,
  tamMuestra: number,
) {
  switch (caso) {
    case 1:
      console.log(`${significacion / 2} ; ${tamMuestra - 1}`);
      return `${significacion / 2} ; ${tamMuestra - 1}`;
    case 2:
      console.log(`${1 - significacion} ; ${tamMuestra - 1}`);
      return `${1 - significacion} ; ${tamMuestra - 1}`;

    case 3:
      console.log(`${significacion} ; ${tamMuestra - 1}`);
      return `${significacion} ; ${tamMuestra - 1}`;
    default:
      return "error";
      break;
  }
}
