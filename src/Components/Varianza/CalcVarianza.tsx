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
    <section
      className="
        bg-white
        rounded-xl
        shadow-md
        border border-gray-200
        p-6
        max-w-md
        mx-auto
        mt-6
      "
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Comparación de varianza
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Busque el valor en la tabla para (
            <span className="font-mono">
              {valorTablaVarConocida(significacion, caso, tamMuestra)}
            </span>
            )
          </label>

          <input
            type="number"
            step="any"
            placeholder="Ej: 1.96"
            {...register("valorTabla", {
              required: true,
              valueAsNumber: true,
            })}
            className="
              rounded-md
              border border-gray-300
              px-3 py-2
              text-gray-800
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:border-indigo-500
            "
          />
        </div>

        <button
          type="submit"
          disabled={mostrarComparacion}
          className={`
            py-2
            rounded-md
            font-medium
            transition
            ${
              mostrarComparacion
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }
          `}
        >
          {mostrarComparacion ? "Resultado mostrado" : "Comparar"}
        </button>
      </form>

      {mostrarComparacion && results && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <ComparacionVarianza
            caso={caso}
            valorTabla={results.valorTabla}
            tamMuestra={tamMuestra}
            varianzaMuestral={varianzaMuestral}
            varianzaPoblacional={varianzaPoblacional}
            significacion={significacion}
          />
        </div>
      )}
    </section>
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
