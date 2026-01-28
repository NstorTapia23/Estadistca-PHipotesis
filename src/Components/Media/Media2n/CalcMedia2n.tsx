import { useState } from "react";
import { useForm } from "react-hook-form";
import { Comparacion2n } from "./Comparacion2n";

type Props = {
  tamMuestra1: number;
  tamMuestra2: number;
  significacion: number;
  varianza1: number;
  varianza2: number;
  varianzaConocida: "true" | "false";
  media1: number;
  media2: number;
};

type FormValues = {
  valorTablaUsuario: number;
};

export function CalcMedia2n({
  tamMuestra1,
  tamMuestra2,
  significacion,
  varianza1,
  varianza2,
  varianzaConocida,
  media1,
  media2,
}: Props) {
  const [mostrar, setMostrar] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormValues>();

  const valorTabla =
    varianzaConocida === "true"
      ? valorTablaVarConocida(significacion)
      : valorTablaVarDesonocida(significacion, tamMuestra1, tamMuestra2);

  const valorUsuario = watch("valorTablaUsuario");

  const onSubmit = () => setMostrar(true);

  return (
    <div className="mt-6 max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Valor crítico para dos muestras
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Busque en la tabla el valor{" "}
          <span className="font-semibold text-blue-600">{valorTabla}</span>
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Valor encontrado en la tabla
          </label>
          <input
            type="number"
            step="any"
            placeholder="Ej: 2.01"
            {...register("valorTablaUsuario", {
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
          disabled={mostrar}
          className={`py-2 rounded-md font-medium transition
            ${
              mostrar
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {mostrar ? "Resultado mostrado" : "Calcular"}
        </button>
      </form>

      {/* Resultado */}
      {mostrar && valorUsuario !== undefined && (
        <div className="pt-4 border-t border-gray-200">
          <Comparacion2n
            varUser={valorUsuario}
            tamMuestra1={tamMuestra1}
            tamMuestra2={tamMuestra2}
            varianza1={varianza1}
            varianza2={varianza2}
            media1={media1}
            significacion={significacion}
            media2={media2}
          />
        </div>
      )}
    </div>
  );
}
function valorTablaVarConocida(significacion: number) {
  return significacion / 2;
}

function valorTablaVarDesonocida(
  significacion: number,
  tamMuestra1: number,
  tamMuestra2: number,
) {
  return `${significacion / 2} ; ${tamMuestra1 + tamMuestra2 - 2}`;
}
